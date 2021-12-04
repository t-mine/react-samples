参考
https://qiita.com/zaburo/items/de312001dc79422eba45

環境構築メモ

```
npx create-react-app redux
cd redux
yarn add react react-redux react-router-dom
```

この辺が肝みたいだけど、説明が無い。

```
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
  updateAge: (age) => dispatch(updateAge(age)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

```
// store
const store = createStore(
  combineReducers(
    {
      user: user,
    },
    applyMiddleware()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
