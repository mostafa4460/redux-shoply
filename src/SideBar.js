import {Drawer, Typography, Divider, Button} from '@material-ui/core';
import {useSelector, shallowEqual} from 'react-redux';
import SideBarItem from './SideBarItem';
import calcTotal from './helpers/calcTotal';
import './SideBar.css';

const SideBar = () => {
    const cart = useSelector(state => state.cart, shallowEqual);
    const cartIsEmpty = Object.keys(cart).length === 0;
    let productsInCart = [];

    if (cartIsEmpty) {
        productsInCart.push(
            <Typography key="cart-empty" variant="h5" component="em">
                Cart is empty
            </Typography>
        );
    } else {
        for (let [k, v] of Object.entries(cart)) {
            productsInCart.push(<SideBarItem key={k} {...v} id={k} />);
        };
    };

    return (
        <Drawer
            variant="permanent"
            anchor="right"
            PaperProps={{className: "SideBar"}}
        >
            <Typography color="primary" variant="h5" className="SideBar-title">
                Shopping Cart
            </Typography>
            <Divider className="SideBar-divider" />
            <div className="SideBar-items">
                {productsInCart}
            </div>
            <Typography variant="h5" color="primary">
                <b>Total: ${cartIsEmpty ? 0 : calcTotal(cart)}</b>
            </Typography>
            <Button 
                variant="contained" 
                color="primary"
                disabled={cartIsEmpty ? true : false}
            >Checkout</Button>
        </Drawer>
    );
};

export default SideBar;