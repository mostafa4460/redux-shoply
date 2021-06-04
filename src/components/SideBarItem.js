import { Card, CardContent, CardMedia } from '@material-ui/core';
import CartButtons from './CartButtons';
import './SideBarItem.css';

const SideBarItem = ({id, name, price, image_url}) => {
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
                <CartButtons id={id} name={name} price={price} image_url={image_url} />
            </div>
        </Card>
    );
};

export default SideBarItem;