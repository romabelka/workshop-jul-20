import { createContext } from "react";

const context = createContext("Roma");

export const { Provider, Consumer } = context;
export default context;
