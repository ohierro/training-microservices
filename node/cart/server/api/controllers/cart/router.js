import * as express from 'express';
import CartController from './cart';

export default express
  .Router()
  .get('/:id', CartController.list)
  // .post('/:id/checkout', CartController.checkout)
  // .post('/', CartController.add);
