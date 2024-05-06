import rootReducer from './Reducer/ReducerIndex'
import { createStore } from 'redux'

const store= createStore(rootReducer)

export default store