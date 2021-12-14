import react from "react";
import "./App.css";
import Characters from "./components/Characters/Characters";

function App() {

  return (
    <react.Fragment>
      <header className="header">
        <img className="header-img" src="" alt=""/>
        <nav className="header-nav">
          <a className="header-nav-a" href="#">Characters</a>
          <a className="header-nav-a" href="#">Episodes</a>
          <a className="header-nav-a" href="#">Locations</a>
        </nav>
      </header>
      <Characters/>
    </react.Fragment>
  );
}

export default App;
