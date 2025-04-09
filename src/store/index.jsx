import { configureStore } from "@reduxjs/toolkit";
import  usersSlice  from "./slices/UserSlice";


const store=configureStore({
    reducer:{
        // if this is a single function , it will be directly used as the root reducer for the store
        // if it is an object of slice reducer like {users: userReducer , posts: postReducer} configurestore will autoimatically create the root reducer by passing this objectto the redux combineReducer utilities 


        // users:usersSlice.reducer,
        users: usersSlice,
    },


});
export default store;