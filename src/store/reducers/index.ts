import { combineReducers } from "redux";

import { notesReducer } from "./notes";
import { tagsReducer } from "./tags";
import { filtersReducer } from "./filters";

const rootReduser = combineReducers({
  notes: notesReducer,
  tags: tagsReducer,
  filters: filtersReducer,
});

export default rootReduser;