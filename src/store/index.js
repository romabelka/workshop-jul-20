import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";

const enhancer = applyMiddleware(logger);

export default initialState => createStore(reducer, initialState, enhancer);
