import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync, clear } from "../stores/gif";

function VendingMachine() {
  const imageUrl = useSelector(state => state.gif.url);
  const loading = useSelector(state => state.gif.loading);
  const error = useSelector(state => state.gif.error);

  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="title">猫GIFガチャ</h1>
      <Gif {...{ imageUrl, loading, error }} />
      <hr/>
      <div className="buttons">
        <button
          className="button is-primary"
          onClick={() => dispatch(fetchAsync())}
        >Play</button>
        <button
          className="button"
          onClick={() => dispatch(clear())}
        >Clear</button>
      </div>
    </div>
  );
}

function Gif({ imageUrl, loading, error }) {
  if (error) {
    return <p className="notification is-danger">Error!!</p>;
  }

  if (loading) {
    return <p className="notification is-info">Loading...</p>;
  }

  if (!imageUrl) {
    return <p className="notification">Welcome!</p>;
  }

  return (
    <figure>
      <img src={imageUrl} alt="" />
      <figcaption>
        GIFs by <a href="https://giphy.com/">GIPHY</a>
      </figcaption>
    </figure>
  );
}

export default VendingMachine;