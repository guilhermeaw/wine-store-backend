import { NextFunction, Request, Response } from 'express';

import app from './app';

// eslint-disable-next-line no-unused-vars
app.use((err: Error, request: Request, response: Response, _: NextFunction) => (
  response.status(500).json({
    status: 'error',
    message: err.message,
  })));

app.listen(3333, () => {
  console.log('Server up on port 3333');
});
