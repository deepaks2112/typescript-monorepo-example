'use client'
import { StockPrice } from '../../../../../common/models/price';
import StockList from './stockList';
import { useState, useEffect } from 'react';
import { getStockPrice } from '../networks/stockPriceHandler';
import { FidgetSpinner } from 'react-loader-spinner';


function Dashboard({ userStocks }: { userStocks: string[] }) {
    const [stockList, setStockList] = useState<StockPrice[]>([]);

    useEffect(() => {
        getStockPrice(userStocks)
            .then(response => { setStockList(response) });
        ;
    }, [userStocks]);

    return (
            stockList.length > 0 ? <StockList stocks={stockList} /> : <FidgetSpinner
                height="80"
                width="80"
                ariaLabel="loading"
            />
    );
}

export default Dashboard;
