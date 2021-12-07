import { createSlice } from "@reduxjs/toolkit";
import gifApi from "../api/gif";

const initialState = {
  url: "",
  loading: false,
  error: false,
};

/**
 * Redux ToolkitのcreateSlice関数で個別のストアを生成する
 * useSelector((state) => state.gif.url)でVendingMachine.jsからアクセスできる。
 */
const slice = createSlice({
  name: "gif",
  initialState,
  reducers: {
    fetchStart: (state) => {
      return Object.assign({}, state, { url: "", loading: true });
    },
    /**
     * 第一引数は現在（更新前）のState
     * 第二引数は渡されたaction
     * action.payloadプロパティに、Action Creatorに渡された引数が入っている
     */
    fetchSucceed: (state, action) => {
      return Object.assign({}, state, { url: action.payload, loading: false });
    },
    fetchFaild: (state, action) => {
      console.error(action.payload);
      return Object.assign({}, state, { loading: false, error: true });
    },
    clear: () => {
      return { url: "", loading: false, error: false };
    },
  },
});

// Reducerをエクスポート
export default slice.reducer;

// Action Creatorをエクスポート
export const { clear } = slice.actions;

// Async task
export function fetchAsync() {
  return async function (dispatch) {
    dispatch(slice.actions.fetchStart());

    try {
      const response = await gifApi.random();
      dispatch(slice.actions.fetchSucceed(response.url));
    } catch (err) {
      dispatch(slice.actions.fetchFaild(err));
    }
  };
}
