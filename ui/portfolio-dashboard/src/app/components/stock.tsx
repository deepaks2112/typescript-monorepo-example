import { StockPrice } from '../../../../../common/models/price';

function Stock({ price, symbol, name }: StockPrice) {
    return (
        <>
            <h3>Name: {name}</h3>
            <h4>Symbol: {symbol}</h4>
            <p>Price: {price}</p>
        </>
    );
}

export default Stock;
