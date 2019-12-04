import CartRouter from './api/controllers/cart/router';

export default function routes(app) {
  app.use('/api/v1/cart', CartRouter);
}
