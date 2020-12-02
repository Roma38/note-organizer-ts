import {
  NOTES_LOAD_SUCCEED,
  ADD_NOTE_SUCCEED,
  EDIT_NOTE_SUCCEED,
  DELETE_NOTE_SUCCEED,
} from "../actions/notes";
import { Note } from "../types/Notes";
import { NoteActionTypes } from "../types/actions";

const initialState: Note[] = [];

export const notesReducer = (state = initialState, action: NoteActionTypes) => {
  switch (action.type) {
    case NOTES_LOAD_SUCCEED:
      return action.payload;
    case ADD_NOTE_SUCCEED:
      return [...state, action.payload];
    case EDIT_NOTE_SUCCEED: {
      const index = state.findIndex(({ id }) => id === action.payload.id);
      const newState = [...state];
      newState[index] = { ...state[index], ...action.payload };
      return newState;
    }
    case DELETE_NOTE_SUCCEED:
      return state.filter(({ id }) => id !== action.payload);
      
    default:
      return state;
  }
};
