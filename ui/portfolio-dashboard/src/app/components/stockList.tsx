import { StockPrice } from '../../../../../common/models/price';
import Stock from './stock';

function StockList({ stocks }: { stocks: Array<StockPrice> }) {
    return <ul>{stocks.map(item => <li key={item.symbol}><Stock name={item.name} symbol={item.symbol} price={item.price} /></li>)}</ul>;
}

export default StockList;