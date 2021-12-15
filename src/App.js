import react from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Section from "./components/section";

function App() {

  return (
    <react.Fragment>
        <Navbar/>
        <h1 className="mt-3 text-bold text-center">Characters</h1>
        <Section/>
    </react.Fragment>
  );
}

export default App;
