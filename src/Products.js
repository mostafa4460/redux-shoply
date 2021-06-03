import {useSelector, shallowEqual} from 'react-redux';
import Product from './Product';
import {Typography} from '@material-ui/core';
import './Products.css';

const Products = () => {
    const products = useSelector(state => state.products, shallowEqual);
    let productComponents = [];

    for (let [k, v] of Object.entries(products)) {
        productComponents.push(<Product key={k} {...v} id={k} />);
    }

    return (
        <div>
            <Typography color="primary" variant="h3" component="h1">
                Thanks for shopping at Shoply :)
            </Typography>
            {productComponents}
        </div>
    );
}

export default Products;