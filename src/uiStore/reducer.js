import { createContext } from 'react';
import PropTypes from 'prop-types';
import useReducerWithThunk from 'use-reducer-thunk';

export const UIStoreContext = createContext();

export const SET_LOADING = 'SET_LOADING';
export const SET_LOADING_DONE = 'SET_LOADING_DONE';

const initialState = {
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_LOADING_DONE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export function UIStoreProvider(props) {
  const [uiState, uiDispatch] = useReducerWithThunk(
    reducer,
    initialState,
    'dtd-ui-reducer',
  );
  const value = { uiState, uiDispatch };

  return (
    <UIStoreContext.Provider value={value}>
      {props.children}
    </UIStoreContext.Provider>
  );
}

UIStoreProvider.propTypes = {
  children: PropTypes.object,
};
