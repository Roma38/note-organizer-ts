import { Dispatch } from "redux";
import {
  // AppActions,
  TagActionTypes,
  LoadStartTagAction,
  LoadSucceedTagAction,
  LoadFailedTagAction,
  AddTagAction,
  AddTagSucceedAction,
  AddTagFailedAction,
} from "../types/actions";
import { Tag } from "../types/Tags";
import { FAKE_API as axios } from "../../fakeAPI";

export const TAGS_LOADING = "TAGS_LOADING";
export const TAGS_LOAD_SUCCEED = "TAGS_LOAD_SUCCEED";
export const TAGS_LOAD_FAILED = "TAGS_LOAD_FAILED";

export const ADD_TAG = "ADD_TAG";
export const ADD_TAG_SUCCEED = "ADD_TAG_SUCCEED";
export const ADD_TAG_FAILED = "ADD_TAG_FAILED";

// Get Tags
export const tagsLoadStart = (): LoadStartTagAction => ({
  type: TAGS_LOADING,
});
export const tagsLoadSucceed = (payload: Tag[]): LoadSucceedTagAction => ({
  type: TAGS_LOAD_SUCCEED,
  payload,
});
export const tagsLoadFailed = (error: string): LoadFailedTagAction => ({
  type: TAGS_LOAD_FAILED,
  payload: error,
});
export const getTags = () => (dispatch: Dispatch<TagActionTypes>) => {
  dispatch(tagsLoadStart());
  axios
    .get("tags")
    .then(({ data }) => dispatch(tagsLoadSucceed(data)))
    .catch((error) => dispatch(tagsLoadFailed(error)));
};

// Post Tag
export const addTag = (): AddTagAction => ({
  type: ADD_TAG,
});
export const addTagSucceed = (payload: Tag): AddTagSucceedAction => ({
  type: ADD_TAG_SUCCEED,
  payload,
});
export const addTagFailed = (error: string): AddTagFailedAction => ({
  type: ADD_TAG_FAILED,
  payload: error,
});
export const postTag = (payload: Tag) => (
  dispatch: Dispatch<TagActionTypes>
) => {
  dispatch(addTag());
  axios
    .post("tags", payload)
    .then(() => dispatch(addTagSucceed(payload)))
    .catch((error: string) => dispatch(addTagFailed(error)));
};
