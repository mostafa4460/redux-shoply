import {useHistory} from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import CartButtons from './CartButtons';
import './Product.css';

const Product = ({id, name, price, image_url}) => {
    const history = useHistory();
    return (
        <Card className="Product">
            <CardActionArea onClick={() => history.push(`/products/${id}`)}>
                <CardMedia
                    className="Product-img"
                    image={image_url}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography component="p">
                        ${price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CartButtons id={id} name={name} price={price} image_url={image_url} />
        </Card>
    );
};

export default Product;