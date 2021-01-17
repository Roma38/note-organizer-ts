import { Note } from "./Notes";
import { Tag } from "./Tags";
import {
  NOTES_LOAD_SUCCEED,
  ADD_NOTE_SUCCEED,
  EDIT_NOTE_SUCCEED,
  DELETE_NOTE_SUCCEED
} from "../actions/notes";
import {
  TAGS_LOAD_SUCCEED,
  ADD_TAG_SUCCEED,
} from "../actions/tags";
import {
  SET_SEARCH_STRING,
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
export interface LoadSucceedTagAction {
  type: typeof TAGS_LOAD_SUCCEED;
  payload: Tag[];
}
export interface AddTagSucceedAction {
  type: typeof ADD_TAG_SUCCEED;
  payload: Tag;
}

export type TagActionTypes =
  | LoadSucceedTagAction
  | AddTagSucceedAction

//Filters actions
export interface SetSearchStringAction {
  type: typeof SET_SEARCH_STRING;
  payload: string;
}
export interface ToggleTagInFiltersAction {
  type: typeof TOGGLE_TAG_IN_FILTERS;
  payload: string;
}
export interface ClearFiltersAction {
  type: typeof CLEAR_FILTERS;
}

export type FiltersActionTypes =
  | SetSearchStringAction
  | ToggleTagInFiltersAction
  | ClearFiltersAction;

export type AppActions = NoteActionTypes | TagActionTypes | FiltersActionTypes;
