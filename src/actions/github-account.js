export const ITEM_ERRORED = 'ITEM_HAS_ERRORED'
export const ITEM_LOADING = 'ITEM_IS_LOADING'
export const ITEM_FETCH_SUCCESS = 'ITEM_FETCH_DATA_SUCCESS'

export function itemHasErrored(bool) {
  return {
    type: ITEM_ERRORED,
    hasErrored: bool
  }
}

export function itemIsLoading(bool) {
  return {
    type: ITEM_LOADING,
    isLoading: bool
  }
}

export function itemFetchDataSuccess(item) {
  return {
    type: ITEM_FETCH_SUCCESS,
    item
  }
}

export function itemFetchData(id) {
  return (dispatch) => {
    console.log("inItemFetchData")
    dispatch(itemIsLoading(true))
    
    const url = "https://api.github.com/users/" + id

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(itemIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((item) => dispatch(itemFetchDataSuccess(item)))
      .catch(()=> dispatch(itemHasErrored(true)))
  }
}