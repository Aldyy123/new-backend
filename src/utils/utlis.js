const sortBy = (text) => {
  switch (text) {
    case 'dateasc':
      return { createdAt: 'asc' }

    case 'datedesc':
      return { createdAt: 'desc' }

    case 'priceasc':
      return { price: 'asc' }

    case 'pricedesc':
      return { price: 'desc' }
  }
}
module.exports = {
  sortBy
}
