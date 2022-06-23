import { createStore } from "store";
import reducer from "./cakeReducer";

const store = createStore(reducer);

export default store;
