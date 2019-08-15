import { configureStore } from 'redux-starter-kit'
import commentReducer from './reducers/comments'

const store = configureStore({
  reducer: commentReducer
})

export default store