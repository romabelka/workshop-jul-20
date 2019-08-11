import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import generateId from "../middlewares/id-generator";
import api from "../middlewares/api";

const enhancer = applyMiddleware(thunk, generateId, api, logger);

export default initialState => createStore(reducer, initialState, enhancer);
