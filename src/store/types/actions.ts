import { Note } from "./Notes";
import { Tag } from "./Tags";
import {
  NOTES_LOAD_SUCCEED,
  ADD_NOTE_SUCCEED,
  EDIT_NOTE_SUCCEED,
  DELETE_NOTE_SUCCEED
} from "../actions/notes";
import {
  TAGS_LOADING,
  TAGS_LOAD_SUCCEED,
  TAGS_LOAD_FAILED,
  ADD_TAG,
  ADD_TAG_SUCCEED,
  ADD_TAG_FAILED,
} from "../actions/tags";
import {
  SET_SEARCH_STRING,
  // ADD_TAG_TO_FILTERS,
  // REMOVE_TAG_FROM_FILTERS,
  TOGGLE_TAG_IN_FILTERS,
  CLEAR_FILTERS,
} from "../actions/filters";

//Notes actions

export interface LoadSucceedNoteAction {
  type: typeof NOTES_LOAD_SUCCEED;
  payload: Note[];
}
export interface AddNoteSucceedAction {
  type: typeof ADD_NOTE_SUCCEED;
  payload: Note;
}
export interface EditNoteSucceedAction {
  type: typeof EDIT_NOTE_SUCCEED;
  payload: Note;
}
export interface DeleteNoteSucceedAction {
  type: typeof DELETE_NOTE_SUCCEED;
  payload: string;
}

export type NoteActionTypes =
  | LoadSucceedNoteAction
  | AddNoteSucceedAction
  | EditNoteSucceedAction
  | DeleteNoteSucceedAction;

//Tags actions

export interface LoadStartTagAction {
  type: typeof TAGS_LOADING;
}
export interface LoadSucceedTagAction {
  type: typeof TAGS_LOAD_SUCCEED;
  payload: Tag[];
}
export interface LoadFailedTagAction {
  type: typeof TAGS_LOAD_FAILED;
  payload: string;
}

export interface AddTagAction {
  type: typeof ADD_TAG;
}
export interface AddTagSucceedAction {
  type: typeof ADD_TAG_SUCCEED;
  payload: Tag;
}
export interface AddTagFailedAction {
  type: typeof ADD_TAG_FAILED;
  payload: string;
}

export type TagActionTypes =
  | LoadStartTagAction
  | LoadSucceedTagAction
  | LoadFailedTagAction
  | AddTagAction
  | AddTagSucceedAction
  | AddTagFailedAction;

export interface SetSearchStringAction {
  type: typeof SET_SEARCH_STRING;
  payload: string;
}
// export interface AddTagToFiltersAction {
//   type: typeof ADD_TAG_TO_FILTERS;
//   payload: string;
// }
// export interface RemoveTagFromFiltersAction {
//   type: typeof REMOVE_TAG_FROM_FILTERS;
//   payload: string;
// }
export interface ToggleTagInFiltersAction {
  type: typeof TOGGLE_TAG_IN_FILTERS;
  payload: string;
}
export interface ClearFiltersAction {
  type: typeof CLEAR_FILTERS;
}

export type FiltersActionTypes =
  | SetSearchStringAction
  // | AddTagToFiltersAction
  // | RemoveTagFromFiltersAction
  | ToggleTagInFiltersAction
  | ClearFiltersAction;

export type AppActions = NoteActionTypes | TagActionTypes | FiltersActionTypes;
