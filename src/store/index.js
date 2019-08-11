import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import generateId from "../middlewares/id-generator";

const enhancer = applyMiddleware(generateId, logger);

export default initialState => createStore(reducer, initialState, enhancer);
