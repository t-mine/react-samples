参考
https://qiita.com/zaburo/items/de312001dc79422eba45

環境構築メモ

```
npx create-react-app redux
cd redux
yarn add react react-redux react-router-dom
```

この辺が肝。

Home.js

```
/**
 * storeが更新されるたびに呼び出される関数。
 * storeからstateを取得するための関数。
 * componentではthis.props.userという形でpropsからstoreのstateを参照できるようになる。
 * connectの第1引数に渡す。
 */
const mapStateToProps = (state) => ({
  user: state.user,
});

/**
 * stateを書き換える。
 * componentではthis.props.updateName()という形で参照できる。
 * connectの第2引数に渡す。
 */
const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
  updateAge: (age) => dispatch(updateAge(age)),
});

// Homeコンポーネントとstoreを繋げている
export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

index.js

```
import user from "./reducers/userReducer";

// reducerを登録したstoreを生成
const store = createStore(
  combineReducers(
    {
      user: user,
    },
    applyMiddleware()
  )
);

/**
 * Providerとは
 * ①Reactコンポーネント内でreact-reduxのconnect()関数を使えるようにする。
 * ②ラップしたコンポーネントにstore情報を渡す。
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
