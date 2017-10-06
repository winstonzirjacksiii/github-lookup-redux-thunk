import {ITEM_ERRORED, ITEM_LOADING, ITEM_FETCH_SUCCESS} from '../actions/github-account'

export function itemHasErrored(state = false, action) {
  switch (action.type) {
    case ITEM_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function itemIsLoading(state = false, action) {
  switch (action.type) {
    case ITEM_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case ITEM_FETCH_SUCCESS:
      return [
        ...state,
        action.item
      ];
    default:
      return state;
  }
}