import {} from "../constants";
import { normalizedComments } from "../fixtures";
import { arrToMap } from "../utils";
import { ADD_COMMENT } from "../constants";

const defaultComments = arrToMap(normalizedComments);

export default (commentsState = defaultComments, action) => {
  const { type, payload, id } = action;

  switch (type) {
    case ADD_COMMENT:
      return {
        ...commentsState,
        [id]: {
          ...payload.comment,
          id
        }
      };

    default:
      return commentsState;
  }
};
