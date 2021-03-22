import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { GET_ANNOUNCEMENTS } from '../utils/constants';

export const StoreContext = createContext();

const initialState = {
  announcements: [],
};

function reducer(state, action) {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.payload,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.object,
};
