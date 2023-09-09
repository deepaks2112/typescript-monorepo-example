type StockPrice = {
    name: string;
    symbol: string;
    price: number;
};

type StockPriceRequest = {
    symbols: string[]
}

export type {
    StockPrice,
    StockPriceRequest,
};
