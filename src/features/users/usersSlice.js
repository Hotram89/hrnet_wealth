import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/MOCK_DATA.json";

const initialState = {
  users: data,
  //   users: [
  //     {
  //       firstname: "Beyonce",
  //       lastname: "Knowles",
  //       StartDate: "2010",
  //       department: "Marketing",
  //       street: "Avenue",
  //       birthdate: 4091971,
  //       City: "Huston",
  //       ZipCode: "1234",
  //       state: "Texas",
  //     },
  //   ],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    ADD_USER: (state, action) => {
      const newArr = [...state.users];
      newArr.unshift(action.payload);
      return { users: newArr };
    },
  },
});

export const { increment, decrement, ADD_USER } = usersSlice.actions;
export default usersSlice.reducer;
