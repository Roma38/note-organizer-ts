import {
  NOTES_LOADING,
  NOTES_LOAD_SUCCEED,
  NOTES_LOAD_FAILED,
  ADD_NOTE,
  ADD_NOTE_SUCCEED,
  ADD_NOTE_FAILED,
  EDIT_NOTE_SUCCEED,
  DELETE_NOTE_SUCCEED,
} from "../actions/notes";
import { Note } from "../types/Notes";
import { NoteActionTypes } from "../types/actions";

const initialState: Note[] = [];

export const notesReducer = (state = initialState, action: NoteActionTypes) => {
  switch (action.type) {
    // case NOTES_LOADING:
    //   return action.payload;
    case NOTES_LOAD_SUCCEED:
      return action.payload;
    // case NOTES_LOAD_FAILED:
    //   return { ...state, sentRequest: null };

    // case ADD_NOTE:
    //   return { ...state, sentRequest: "addNote" };
    case ADD_NOTE_SUCCEED:
      return [...state, action.payload];
    // case ADD_NOTE_FAILED:
    //   return { ...state, sentRequest: null };
    case EDIT_NOTE_SUCCEED: {
      const index = state.findIndex(({ id }) => id === action.payload.id);
      const newState = [...state];
      newState[index] = { ...state[index], ...action.payload };
      return newState;
    }
    case DELETE_NOTE_SUCCEED:
      return state.filter(({ id }) => id !== action.payload);
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
