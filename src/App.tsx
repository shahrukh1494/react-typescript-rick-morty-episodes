import { useContext } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
        <div>
          <Link to="/">
            <p className="links">Home </p>
          </Link>
          <Link to="/faves">
            <p className="links">Favourite(s): {state.favourites.length}</p>
          </Link>
        </div>
      </header>
      {props.children}
    </>
  );
}

export default App;
