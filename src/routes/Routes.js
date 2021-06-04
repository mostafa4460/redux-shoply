import {Switch, Route, Redirect} from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Products />
        </Route>
        <Route exact path="/products/:id">
            <ProductDetails />
        </Route>
        <Redirect to="/" />
    </Switch>
);

export default Routes;