class CartDB {
  constructor() {
    this.db = {}
  }

  add(user, productId, quantity) {
    console.log(`Add ${user} - ${productId} - ${quantity}`)
    let userData = this.db[user]

    if (!userData) {
      this.db[user] = []
    }

    this.db[user].push( { productId, quantity } )
  }

  list(user) {
    return this.db[user]
  }
}

// eslint-disable-next-line prettier/prettier
export default new CartDB()