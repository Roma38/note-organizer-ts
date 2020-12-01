import { combineReducers } from "redux";

import { notesReducer } from "./notes";
import { tagsReducer } from "./tags";
// import { filterReducer } from "./notesFilter";

const rootReduser = combineReducers({
  notes: notesReducer,
  tags: tagsReducer,
  // filter: filterReducer,
});

export default rootReduser;