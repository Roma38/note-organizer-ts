import {
  SET_SEARCH_STRING,
  // ADD_TAG_TO_FILTERS,
  // REMOVE_TAG_FROM_FILTERS,
  TOGGLE_TAG_IN_FILTERS,
  CLEAR_FILTERS,
} from "../actions/filters";
import { FiltersActionTypes } from "../types/actions";

export interface Filter {
  search: string;
  tags: string[];
}

export const initialState: Filter = {
  search: "",
  tags: [],
};

export const filtersReducer = (
  state = initialState,
  action: FiltersActionTypes
) => {
  switch (action.type) {
    case SET_SEARCH_STRING:
      return { ...state, search: action.payload };
    // case ADD_TAG_TO_FILTERS:
    //   return { ...state, tags: [...state.tags, action.payload] };
    // case REMOVE_TAG_FROM_FILTERS:
    //   return {
    //     ...state,
    //     tags: state.tags.filter((tagId) => tagId !== action.payload),
    //   };
    case TOGGLE_TAG_IN_FILTERS:
      return state.tags.includes(action.payload)
        ? {
            ...state,
            tags: state.tags.filter((tagId) => tagId !== action.payload),
          }
        : { ...state, tags: [...state.tags, action.payload] };
    case CLEAR_FILTERS:
      return initialState;
    default:
      return state;
  }
};
