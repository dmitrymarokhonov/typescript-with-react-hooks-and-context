import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Store } from "./Store";
import { Link } from "@reach/router";



export default function App(props: any): JSX.Element {

  const { state } = React.useContext(Store);

  console.log(state);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>TypeScript Project 02: TV Shows Episodes!</h1>
          <p>Pick your favourite episode</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourites amount: {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  )
}
