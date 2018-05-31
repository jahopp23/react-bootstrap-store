export const RECEIVE_SLUG = 'RECEIVE_SLUG'
export const REQUEST_SLUG ='REQUEST_SLUG'

function requestSlug(slug) {
  return {
    type: 'REQUEST_SLUG',
    slug
  }
}

function receiveSlug(json) {
  const slug = {
    'name': json.metadata.name.title,
    'brand': json.metadata.brand.title,
    'amount': json.metadata.price.title,
    'description': json.metadata.description.title,
    'author': json.metadata.author.title,
    'image': json.metadata.hero.url,
    'category': json.metadata.category.title,

  }
  return {
    type: 'RECEIVE_SLUG',
    slug: Object.assign(slug, json),
    receivedAt: Date.now()
  }
}

function slugHasError(bool) {
  return {
    type: 'SLUG_HAS_ERRORED',
    hasErrored: bool
  }
}

export function fetchSlugProduct(url) {
  return(dispatch) {
    dispatch(requestSlug(url))
    fetch(url)
    .then(response => response.json(),
      error => {
        console.log('An error has occurred.', error)
        dispatch(slugHasError(error))
      }
    )
    .then(json => {
      dispatch(receiveSlug(json))
    }
  )
};
}
