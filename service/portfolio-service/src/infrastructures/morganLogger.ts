import morgan from 'morgan';
import { TokenIndexer } from 'morgan';
import { IncomingMessage, ServerResponse } from 'http';


const jsonFormat = (tokens: TokenIndexer, req: IncomingMessage, res: ServerResponse<IncomingMessage>): string =>
    JSON.stringify({
        level: tokens.level,
        method: tokens.method(req, res),
        url: tokens.url(req, res),
        status: tokens.status(req, res),
        "response-time": tokens["response-time"](req, res) + "ms",
        "content-length": tokens.res(req, res, "content-length"),
    })

export default morgan(jsonFormat);
