import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {addItem, removeItem} from '../actions';
import {IconButton, Typography} from '@material-ui/core';
import {AddCircle, RemoveCircle} from '@material-ui/icons';

const CartButtons = ({id, name, price, image_url}) => {
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
        <div className="CartButtons">
            <Typography color="primary" variant="caption" component="p">
                <b>{itemQty ? itemQty : 0}</b>
            </Typography>
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
    );
};

export default CartButtons;