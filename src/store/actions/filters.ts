import {
  SetSearchStringAction,
  // AddTagToFiltersAction,
  // RemoveTagFromFiltersAction,
  ToggleTagInFiltersAction,
  ClearFiltersAction,
} from "../types/actions";

export const SET_SEARCH_STRING = "SET_SEARCH_STRING";
export const ADD_TAG_TO_FILTERS = "ADD_TAG_TO_FILTERS";
export const REMOVE_TAG_FROM_FILTERS = "REMOVE_TAG_FROM_FILTERS";
export const TOGGLE_TAG_IN_FILTERS = "TOGGLE_TAG_IN_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const setSearchString = (payload: string): SetSearchStringAction => ({
  type: SET_SEARCH_STRING,
  payload,
});

// export const addTagToFilters = (payload: string): AddTagToFiltersAction => ({
//   type: ADD_TAG_TO_FILTERS,
//   payload,
// });

// export const removeTagFromFilters = (
//   payload: string
// ): RemoveTagFromFiltersAction => ({
//   type: REMOVE_TAG_FROM_FILTERS,
//   payload,
// });

export const toggleTagInFilters = (payload: string): ToggleTagInFiltersAction => ({
  type: TOGGLE_TAG_IN_FILTERS,
  payload,
});
;

export const clearFilters = (): ClearFiltersAction => ({
  type: CLEAR_FILTERS,
});
