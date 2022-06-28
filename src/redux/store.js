import { legacy_createStore } from "redux"
import rootReducer from "./rootReducer"

const createStore = legacy_createStore

const store = createStore(rootReducer)

console.log('hihiih',store.getState())

export default store