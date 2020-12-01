import { Note } from "./Notes";
import { Tag } from "./Tags";
import {
  NOTES_LOADING,
  NOTES_LOAD_SUCCEED,
  NOTES_LOAD_FAILED,
  ADD_NOTE,
  ADD_NOTE_SUCCEED,
  ADD_NOTE_FAILED,
  EDIT_NOTE,
  EDIT_NOTE_SUCCEED,
  EDIT_NOTE_FAILED,
  // EDIT_NOTE,
  // DELETE_NOTE,
  // ADD_TAG_TO_NOTE,
} from "../actions/notes";
import {
  TAGS_LOADING,
  TAGS_LOAD_SUCCEED,
  TAGS_LOAD_FAILED,
  ADD_TAG,
  ADD_TAG_SUCCEED,
  ADD_TAG_FAILED,
} from "../actions/tags";

//Notes actions

export interface LoadStartNoteAction {
  type: typeof NOTES_LOADING;
}
export interface LoadSucceedNoteAction {
  type: typeof NOTES_LOAD_SUCCEED;
  payload: Note[];
}
export interface LoadFailedNoteAction {
  type: typeof NOTES_LOAD_FAILED;
  payload: string;
}

export interface AddNoteAction {
  type: typeof ADD_NOTE;
}
export interface AddNoteSucceedAction {
  type: typeof ADD_NOTE_SUCCEED;
  payload: Note;
}
export interface AddNoteFailedAction {
  type: typeof ADD_NOTE_FAILED;
  payload: string;
}

export interface EditNoteAction {
  type: typeof EDIT_NOTE;
}
export interface EditNoteSucceedAction {
  type: typeof EDIT_NOTE_SUCCEED;
  payload: Note;
}
export interface EditNoteFailedAction {
  type: typeof EDIT_NOTE_FAILED;
  payload: string;
}

// export interface DeleteNoteAction {
//   type: typeof DELETE_NOTE;
//   payload: { id: string };
// }
// export interface AddTagToNoteAction {
//   type: typeof ADD_TAG_TO_NOTE;
//   payload: { id: string };
// }

export type NoteActionTypes =
  | LoadStartNoteAction
  | LoadSucceedNoteAction
  | LoadFailedNoteAction
  | AddNoteAction
  | AddNoteSucceedAction
  | AddNoteFailedAction
  | EditNoteAction
  | EditNoteSucceedAction
  | EditNoteFailedAction;

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

export type AppActions = NoteActionTypes | TagActionTypes;
