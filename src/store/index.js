import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import generateId from "../middlewares/id-generator";
import api from "../middlewares/api";

const enhancer = applyMiddleware(generateId, api, logger);

export default initialState => createStore(reducer, initialState, enhancer);
