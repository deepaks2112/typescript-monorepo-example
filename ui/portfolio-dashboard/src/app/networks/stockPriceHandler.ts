import axios from 'axios';
import { StockPrice } from '../../../../../common/models/price';

const getStockPrice = async (symbols: string[]): Promise<StockPrice[]> => {
    const response = await axios({
        method: "POST",
        url: "http://localhost:3000/stocks",
        data: {
            symbols
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    return response.data;
};

export {
    getStockPrice
};