import { createSlice } from "@reduxjs/toolkit";

const usersSlice=createSlice({
    name:"user",
    initialState:[],
    reducers : {
        addUser(state , action){
state.push(action.payload);
        },
        removeUser(state , action){
// console.log("hii " + action.payload)
// state.pop(action.payload)
state.splice(action.payload , 1)
        },
        clearAllUser(state , action){

            return [];

        }
    }
});
// console.log(usersSlice.actions,);
// export {usersSlice}
export default usersSlice.reducer;
export const {addUser , removeUser , clearAllUser}=usersSlice.actions;