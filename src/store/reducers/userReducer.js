import { createReducer, createSlice } from "@reduxjs/toolkit";

const initial = {
  name: "Montu",
  age: 20,
  status: "coder",
};

// OLD way to create reducer
// const userReducer = (state = initial, action) => {
//     switch(action.type) {
//         case "UPDATE_AGE": {
//             return {
//                 ...state,
//                 age: state.age + action.payload
//             }
//         }
//         default:
//             return state;
//     }
// }

// module.exports = {
// userReducer
// }

// NEW way to create reducers
// export const userReducer = createReducer(initial, (builder) => {
//     builder.addCase("UPDATE_AGE", (state, action) => {
//         state.age = state.age + action.payload
//     });

//     builder.addCase("UPDATE_NAME", (state, action) => {
//         state.name = action.payload;
//     });
// });

// (createSlice) NEW way to create reducers
const userSlice = createSlice({
  name: "user",
  initialState: initial,
  reducers: {
    UPDATE_AGE: (state, action) => {
        state.age = state.age + action.payload
    },

    UPDATE_NAME: (state, action) => {
        state.name = action.payload;
    },

    UPDATE_STATUS: (state, action) => {
        state.status = action.payload;
    },
  },
});

export const { UPDATE_AGE, UPDATE_NAME, UPDATE_STATUS } = userSlice.actions;

export default userSlice.reducer;
