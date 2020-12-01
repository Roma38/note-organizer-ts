import {
  // AppActions,
  NoteActionTypes,
  LoadStartNoteAction,
  LoadSucceedNoteAction,
  LoadFailedNoteAction,
  AddNoteAction,
  AddNoteSucceedAction,
  AddNoteFailedAction,
  EditNoteAction,
  EditNoteSucceedAction,
  EditNoteFailedAction,
  // EditNoteAction,
  // DeleteNoteAction,
  // AddTagToNoteAction,
} from "../types/actions";
import { Note } from "../types/Notes";
import { Dispatch } from "redux";
import { FAKE_API as axios } from "../../fakeAPI";

export const NOTES_LOADING = "NOTES_LOADING";
export const NOTES_LOAD_SUCCEED = "NOTES_LOAD_SUCCEED";
export const NOTES_LOAD_FAILED = "NOTES_LOAD_FAILED";

export const ADD_NOTE = "ADD_NOTE";
export const ADD_NOTE_SUCCEED = "ADD_NOTE_SUCCEED";
export const ADD_NOTE_FAILED = "ADD_NOTE_FAILED";

export const EDIT_NOTE = "EDIT_NOTE";
export const EDIT_NOTE_SUCCEED = "EDIT_NOTE_SUCCEED";
export const EDIT_NOTE_FAILED = "EDIT_NOTE_FAILED";

export const DELETE_NOTE = "DELETE_NOTE";
export const ADD_TAG_TO_NOTE = "ADD_TAG_TO_NOTE";

// Get Notes
export const notesLoadStart = (): LoadStartNoteAction => ({
  type: NOTES_LOADING,
});
export const notesLoadSucceed = (payload: Note[]): LoadSucceedNoteAction => ({
  type: NOTES_LOAD_SUCCEED,
  payload,
});
export const notesLoadFailed = (error: string): LoadFailedNoteAction => ({
  type: NOTES_LOAD_FAILED,
  payload: error,
});
export const getNotes = () => (dispatch: Dispatch<NoteActionTypes>) => {
  dispatch(notesLoadStart());
  axios
    .get("notes")
    .then(({ data }) => dispatch(notesLoadSucceed(data)))
    .catch((error) => dispatch(notesLoadFailed(error)));
};

// Post Note
export const addNote = (): AddNoteAction => ({
  type: ADD_NOTE,
});
export const addNoteSucceed = (payload: Note): AddNoteSucceedAction => ({
  type: ADD_NOTE_SUCCEED,
  payload,
});
export const addNoteFailed = (error: string): AddNoteFailedAction => ({
  type: ADD_NOTE_FAILED,
  payload: error,
});
export const postNote = (payload: Note) => (
  dispatch: Dispatch<NoteActionTypes>
) => {
  dispatch(addNote());
  axios
    .post("notes", payload)
    .then(() => dispatch(addNoteSucceed(payload)))
    .catch((error: string) => dispatch(addNoteFailed(error)));
};

// Edit Note
export const editNote = (): EditNoteAction => ({
  type: EDIT_NOTE,
});
export const editNoteSucceed = (payload: Note): EditNoteSucceedAction => ({
  type: EDIT_NOTE_SUCCEED,
  payload,
});
export const editNoteFailed = (error: string): EditNoteFailedAction => ({
  type: EDIT_NOTE_FAILED,
  payload: error,
});
// export const putNote = (payload: Note) => (
//   dispatch: Dispatch<NoteActionTypes>
// ) => {
//   dispatch(editNote());
//   axios
//     .put("notes", payload)
//     .then(() => dispatch(editNoteSucceed(payload)))
//     .catch((error: string) => dispatch(editNoteFailed(error)));
// };

// export const editNote = payload => ({
//   type: EDIT_NOTE,
//   payload
// });

// export const deleteNote = payload => ({
//   type: DELETE_NOTE,
//   payload // id
// });

// export const addTag = payload => ({
//   type: ADD_TAG_TO_NOTE,
//   payload // {id, labelId}
// });
