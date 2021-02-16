import { FETCH_DATA } from '../action/types';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};


export default reducer;
