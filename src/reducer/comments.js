import {} from "../constants";
import { normalizedComments } from "../fixtures";
import { arrToMap } from "../utils";

const defaultComments = arrToMap(normalizedComments);

export default (commentsState = defaultComments, action) => {
  const { type, payload, response, error } = action;

  switch (type) {
    default:
      return commentsState;
  }
};
