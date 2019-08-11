import { Record } from "immutable";
import {} from "../constants";
import { normalizedComments } from "../fixtures";
import { arrToMap } from "../utils";
import { ADD_COMMENT } from "../constants";

const CommentModel = Record({
  id: null,
  text: null,
  user: null
});

const defaultComments = arrToMap(normalizedComments, CommentModel);

export default (commentsState = defaultComments, action) => {
  const { type, payload, id } = action;

  switch (type) {
    case ADD_COMMENT:
      return commentsState.set(
        id,
        new CommentModel({
          ...payload.comment,
          id
        })
      );

    default:
      return commentsState;
  }
};
