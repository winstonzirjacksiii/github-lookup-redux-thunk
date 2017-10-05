import { combineReducers } from 'redux'
import { items, itemHasErrored, itemIsLoading } from './github-account'

export default combineReducers({
  items,
  itemHasErrored,
  itemIsLoading
})