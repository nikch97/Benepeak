import React, { createContext, useReducer } from "react";
export {}; 
// import { UserActions } from '../actions';
// import { UserReducer, UserSetReducer } from '../reducers/UserReducer';
// import { getUser, setUser } from '../../services/Middleware';
// import { UserContextState } from '../../types/store-typings'

// const initialState: UserContextState = {
//   error: null,
//   fetching: false,
//   current: { Id: '1', FullName: 'Advisor1' },
//   data:null,
// }

// export const UserContext = createContext<{ 
//   setState:UserContextState,
//   setActions:any,
//   state: UserContextState,
//   actions: any }>(
//   { state: initialState,
//     setState: initialState,
//     actions: () => null,
//     setActions: ()=> null
//    });

// const UserContextProvider = (props:any) => {
//   const [state, dispatch] = useReducer(UserReducer, initialState);
//   const [setState, setDispatch] = useReducer(UserSetReducer, initialState);
//   const actions = UserActions(state, getUser(dispatch))
//   const setActions = UserActions(setState, setUser(setDispatch))

//   return (
//     <UserContext.Provider value={{ state, actions,setState, setActions }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;
