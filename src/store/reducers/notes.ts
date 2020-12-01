import {
  NOTES_LOADING,
  NOTES_LOAD_SUCCEED,
  NOTES_LOAD_FAILED,
  ADD_NOTE,
  ADD_NOTE_SUCCEED,
  ADD_NOTE_FAILED,
} from "../actions/notes";
import { Note } from "../types/Notes";
import { NoteActionTypes } from "../types/actions";

type NotesState = { items: Note[]; sentRequest: SentRequest };

const initialState: NotesState = {
  items: [],
  sentRequest: null,
};

type SentRequest = "getNotes" | "addNote" | "editNote" | "deleteNote" | null;

export const notesReducer: (
  state: NotesState,
  action: NoteActionTypes
) => NotesState = (state = initialState, action: NoteActionTypes) => {
  switch (action.type) {
    case NOTES_LOADING:
      return { ...state, sentRequest: "getNotes" };
    case NOTES_LOAD_SUCCEED:
      return { items: action.payload || [], sentRequest: null };
    case NOTES_LOAD_FAILED:
      return { ...state, sentRequest: null };

    case ADD_NOTE:
      return { ...state, sentRequest: "addNote" };
    case ADD_NOTE_SUCCEED:
      return { items: [...state.items, action.payload], sentRequest: null };
    case ADD_NOTE_FAILED:
      return { ...state, sentRequest: null };
    // case EDIT_NOTE: {
    //   const index = state.findIndex(({ id }) => id === action.payload.id);
    //   const newState = [...state];
    //   newState[index] = { ...state[index], ...action.payload };
    //   return newState;
    // }
    // case DELETE_NOTE:
    //   return state.filter(({ id }) => id !== action.payload);
    // case ADD_TAG_TO_NOTE: {
    //   const index = state.findIndex(({ id }) => id === action.payload.id);
    //   const newState = [...state];
    //   newState[index] = {
    //     ...state[index],
    //     tags: [...state[index].tags, action.payload.tagId],
    //   };
    //   return newState;
    // }
    default:
      return state;
  }
};
