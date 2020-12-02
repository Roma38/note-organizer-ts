import {
  SetSearchStringAction,
  ToggleTagInFiltersAction,
  ClearFiltersAction,
} from "../types/actions";

export const SET_SEARCH_STRING = "SET_SEARCH_STRING";
export const TOGGLE_TAG_IN_FILTERS = "TOGGLE_TAG_IN_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const setSearchString = (payload: string): SetSearchStringAction => ({
  type: SET_SEARCH_STRING,
  payload,
});

export const toggleTagInFilters = (payload: string): ToggleTagInFiltersAction => ({
  type: TOGGLE_TAG_IN_FILTERS,
  payload,
});

export const clearFilters = (): ClearFiltersAction => ({
  type: CLEAR_FILTERS,
});
