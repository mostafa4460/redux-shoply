const calcTotal = cart => {
    const reducer = (total, item) => total + (item.qty * item.price);
    const total = Object.values(cart).reduce(reducer, 0);
    return Math.round(total * 100) / 100;
};

export default calcTotal;