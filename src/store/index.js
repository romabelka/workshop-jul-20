import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import generateId from "../middlewares/id-generator";
import api from "../middlewares/api";
import history from "../history";

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
  generateId,
  api,
  logger
);

export default initialState => createStore(reducer, initialState, enhancer);
