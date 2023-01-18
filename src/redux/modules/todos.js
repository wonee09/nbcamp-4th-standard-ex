import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// 첫 번째 인자 : 이름
// 두 번째 인자 : 비동기함수

// 0. 값 조회
export const __getTodos = createAsyncThunk(
  "GET_TODOS",
  async (arg, thunkAPI) => {
    try {
      const todos = await axios.get("http://localhost:4000/todos");
      console.log("todos", todos.data);
      return thunkAPI.fulfillWithValue(todos.data);
    } catch (error) {}
  }
);

// 1. 추가
export const __addTodoThunk = createAsyncThunk("ADD_TODO", async (arg) => {
  try {
    console.log("arg", arg);
    // 시도할 내용
    await axios.post("http://localhost:4000/todos", arg);
  } catch (error) {
    // 오류가 났을 때의 내용
    console.log(error);
  }
});

// initial states
const initialState = {
  todos: [],
  isSuccess: false,
  isLoading: false,
  error: null,
};

// createSlice의 결과물 -> action creators와 reducers
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   return [...state, action.payload];
    // }, // action creator의 이름
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    }, // action creator의 이름
    switchTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    }, // action creator의 이름
  },
  extraReducers: {
    [__getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { removeTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
