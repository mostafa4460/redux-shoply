import {useParams, useHistory} from 'react-router-dom';
import {useSelector, shallowEqual} from 'react-redux';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import CartButtons from '../components/CartButtons';
import './ProductDetails.css';

const ProductDetails = () => {
    const history = useHistory();
    const {id} = useParams();
    const item = useSelector(state => state.products[id]);
    if (!item) {
        history.push('/');
        return null;
    } else {
        const {name, price, image_url, description} = item;
        return (
            <Card className="ProductDetails">
                <CardMedia
                    className="ProductDetails-img"
                    image={image_url}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="p">
                        {description}
                    </Typography>
                    <Typography component="p">
                        ${price}
                    </Typography>
                </CardContent>
                <CartButtons id={id} name={name} price={price} image_url={image_url} />
            </Card>
        );
    };
};

export default ProductDetails;