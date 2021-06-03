import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import {AddCircle, RemoveCircle} from '@material-ui/icons';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {addItem, removeItem} from './actions';
import './Product.css';

const Product = ({id, name, price, image_url}) => {
    const itemQty = useSelector(state => state.cart[id] && state.cart[id].qty, shallowEqual);
    const dispatch = useDispatch();
    const addItemToCart = () => dispatch(addItem(
        id,
        {
            name,
            price, 
            image_url,
            qty: 1
        }
    ));
    const removeItemFromCart = () => dispatch(removeItem(id));

    return (
        <Card className="Product">
            <CardActionArea>
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
            <Typography color="primary" variant="caption" component="p">
                <b>{itemQty ? itemQty : 0}</b>
            </Typography>
            <CardActions className="Product-btns">
                <IconButton 
                    size="small" 
                    color="primary"
                    onClick={addItemToCart}
                >
                    <AddCircle />
                </IconButton>
                <IconButton 
                    size="small" 
                    color="secondary"
                    onClick={removeItemFromCart}
                    disabled={itemQty ? false : true}
                >
                    <RemoveCircle />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;