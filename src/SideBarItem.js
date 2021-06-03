import { Card, CardContent, Typography, IconButton, CardMedia } from '@material-ui/core';
import {AddCircle, RemoveCircle} from '@material-ui/icons';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {addItem, removeItem} from './actions';
import './SideBarItem.css';

const SideBarItem = ({id, name, price, image_url}) => {
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
        <Card className="SideBarItem">
            <CardMedia
                className="SideBarItem-image"
                image={image_url}
                title={name}
            />
            <div className="SideBarItem-details">
                <CardContent className="SideBarItem-content">
                    <h4>{name}</h4>
                    <p>${price}</p>
                </CardContent>
                <Typography color="primary" variant="caption" component="p">
                    <b>{itemQty ? itemQty : 0}</b>
                </Typography>
                <div className="SideBarItem-btns">
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
                </div>
            </div>
        </Card>
    );
};

export default SideBarItem;