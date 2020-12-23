import { createContext, useEffect, useReducer } from 'react';

// Global state

const initialState = localStorage.savedState
  ? JSON.parse(localStorage.savedState)
  : {
      watchHistory: [],
    };

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'AddToWatchHistory':
      let watchHistory = state.watchHistory;
      if (!watchHistory.includes(action.id)) {
        watchHistory.push(action.id);
      }
      return { ...state, watchHistory };
    case 'RemoveFromWatchHistory':
      return {
        ...state,
        watchHistory: state.watchHistory.filter((x) => x !== action.id),
      };
    default:
      return state;
  }
};

const StoreContext = createContext();

function Store({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    localStorage.savedState = JSON.stringify(state);
  }, [state]);

  return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>;
}

export { Store, StoreContext };
