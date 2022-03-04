import { createContext, useState, useEffect } from 'react';



const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  };



const AuthContext = createContext(INITIAL_STATE)


export const AuthContext;

export const AuthProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return(
        <AuthContext.Provider 
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
          }}
        >
            {children}
        </AuthContext.Provider>
    )
}