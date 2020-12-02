import {
  LoadSucceedNoteAction,
  AddNoteSucceedAction,
  EditNoteSucceedAction,
  DeleteNoteSucceedAction
} from "../types/actions";
import { Note } from "../types/Notes";

export const NOTES_LOAD_SUCCEED = "NOTES_LOAD_SUCCEED";
export const ADD_NOTE_SUCCEED = "ADD_NOTE_SUCCEED";
export const EDIT_NOTE_SUCCEED = "EDIT_NOTE_SUCCEED";
export const DELETE_NOTE_SUCCEED = "DELETE_NOTE_SUCCEED";

export const notesLoadSucceed = (payload: Note[]): LoadSucceedNoteAction => ({
  type: NOTES_LOAD_SUCCEED,
  payload,
});

export const addNoteSucceed = (payload: Note): AddNoteSucceedAction => ({
  type: ADD_NOTE_SUCCEED,
  payload,
});

export const editNoteSucceed = (payload: Note): EditNoteSucceedAction => ({
  type: EDIT_NOTE_SUCCEED,
  payload,
});

export const deleteNoteSucceed = (id: string): DeleteNoteSucceedAction => ({
  type: DELETE_NOTE_SUCCEED,
  payload: id,
});
