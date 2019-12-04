import cartDB from '../../services/cart.db.service'
import axios from 'axios'
import log from '../../../common/logger'


export class Cart {

  constructor() {
    cartDB.add('foo', 'sample-product', 5)
  }

  list(req, res) {
    log.info(`List of items from ${req.params.id}`)
    res.send(cartDB.list(req.params.id))
  }

  // add (req, res) {
  //
  //}

  // checkout(req, res) {
  // }
}

export default new Cart();
