import express from 'express';
import { publicRouter } from '../route/public-api';
import { errorMiddleware } from '../middleware/error-middelware';
import { apiRouter } from '../route/api';

export const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(apiRouter);

web.get('/api/test', (req, res) => {
    res.send('Hello World');
});

web.use(errorMiddleware);
