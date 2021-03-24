import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext();
const initialState = {
  announcements: [],
};

// action type
import { SET_ANNOUNCEMENTS } from '../utils/constants';

// action creators
export function setAnnouncements(payload) {
  return { type: SET_ANNOUNCEMENTS, payload };
}

// reducer
function reducer(state, action) {
  switch (action.type) {
    case SET_ANNOUNCEMENTS:
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
