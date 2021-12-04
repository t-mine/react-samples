import React from "react";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { updateName, updateAge } from "../actions/userAction";

class About extends React.Component {
  handleOnClick = () => {
    this.props.updateAge(44);
  };

  render() {
    return (
      <div>
        <p>About</p>
        <Link to="/">Homeへ</Link>
        <p>名前：{this.props.user.name}</p>
        <p>年齢：{this.props.user.age}</p>
        <button onClick={this.handleOnClick}>updateAge@About</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
  updateAge: (age) => dispatch(updateAge(age)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
