import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });

import appSettings from './appSettings';
import { StockPrice, StockPriceRequest } from '../../../common/models/price';
import morganLogger from './infrastructures/morganLogger';
import winstonLogger from './infrastructures/winstonLogger';
import cors from 'cors';
import stockPrices from './stockPrices.json';


const app = express();

app.use(express.json());
app.use(morganLogger);
app.use(cors({
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}));


console.log(appSettings);

app.post("/stocks", (request, response) => {
    const stockPriceRequest: StockPriceRequest = request.body;
    winstonLogger.info("Stocks Request =>", stockPriceRequest);
    const stockPriceResponse: StockPrice[] = stockPriceRequest.symbols.map((_, index) => stockPrices[index]);
    response.send(stockPriceResponse);
});

app.listen(appSettings.PORT, () => {
    winstonLogger.info(`${appSettings.NAME} listening on port ${appSettings.PORT}`);
});
