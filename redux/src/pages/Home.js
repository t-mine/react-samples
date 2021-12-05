import React from "react";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { updateName, updateAge } from "../actions/userAction";

class Home extends React.Component {
  handleOnClick = () => {
    this.props.updateName("foo@Home");
  };

  render() {
    console.log(this.props.user);
    return (
      <div>
        <p>Home</p>
        <Link to="/about">Aboutへ</Link>
        <p>名前：{this.props.user.name}</p>
        <p>名前：{this.props.user.age}</p>
        <button onClick={this.handleOnClick}>updateName@Home</button>
      </div>
    );
  }
}

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
