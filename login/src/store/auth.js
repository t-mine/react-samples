import { createSlice } from '@reduxjs/toolkit';
import { login as loginApi } from '../api/auth';

const initialState = {
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return Object.assign({}, state, { user: action.payload });
    },
  },
});

export default slice.reducer;

/**
 * 認証済みか確認するセレクター
 * useSelectorフックでstateにアクセスするときに使う
 */
export const isAuthSelector = (state) => state.auth.user !== null;

/**
 * ログイン機能
 * useDispatchでdispatchを使用するときに使う
 */
export function login(username, password) {
  return async function (dispatch) {
    const user = await loginApi(username, password);
    // ログイン後にユーザー情報をストアに格納する
    dispatch(slice.actions.setUser(user));
  };
}
