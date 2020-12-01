import { ADD_TAG_SUCCEED, TAGS_LOAD_SUCCEED } from "../actions/tags";
import { TagActionTypes } from "../types/actions";
import { Tag } from "../types/Tags";

const initialState: Tag[] = [];

export const tagsReducer = (state = initialState, action: TagActionTypes) => {
  switch (action.type) {
    case TAGS_LOAD_SUCCEED:
      return action.payload || [];
    case ADD_TAG_SUCCEED:
      return [...state, action.payload];

    default:
      return state;
  }
};
