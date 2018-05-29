export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';

function requestProducts(products) {
  return {
    type: 'REQUEST_PRODUCTS',
    products
  }
}

function receiveProducts(json) {
  return {
    type: 'RECEIVE_PRODUCTS',
    posts: json.map(data => {
      data.author = data.metadata.author.title;
      data.brand = data.metadata.brand.title;
      data.description = data.metadata.description;
      data.image = data.metadata.image.url;
      return data
    }),
    receivedAt: Date.now()
  }
}

export function productHasError(bool) {
  return {
    type: 'PRODUCT_HAS_ERROR',
    productError: bool
  }
}

export function fetchProductItems(url) {
  return(dispatch) => {
    dispatch(requestProducts(url))
    fetch(url)
    .then( response => response.json(),
      error => {
        console.log('An error has occurred.', error)
        dispatch(productHasError(error))
      }
    )
    .then(json => {
      console.log(json);
      dispatch(receiveProducts(json))
    }
  )
};
}
