import {
  LoadSucceedTagAction,
  AddTagSucceedAction,
} from "../types/actions";
import { Tag } from "../types/Tags";

export const TAGS_LOAD_SUCCEED = "TAGS_LOAD_SUCCEED";

export const ADD_TAG_SUCCEED = "ADD_TAG_SUCCEED";

export const tagsLoadSucceed = (payload: Tag[]): LoadSucceedTagAction => ({
  type: TAGS_LOAD_SUCCEED,
  payload,
});

export const addTagSucceed = (payload: Tag): AddTagSucceedAction => ({
  type: ADD_TAG_SUCCEED,
  payload,
});