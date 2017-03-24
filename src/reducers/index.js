import { combineReducers } from 'redux'

import userReducer from './userReducer'
import linkCardsReducer from './linkCardsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  linkCards: linkCardsReducer
})

export default rootReducer
