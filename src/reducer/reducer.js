import { FETCH_DATA, SEARCH_DATA } from '../action/types';

const initialState = {
  data: [],
  keyword: '',
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
      };
    case SEARCH_DATA:
      return {
        ...state,
        keyword: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
