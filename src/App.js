import react from "react";
import "./App.css";
import Navbar from './components/characters/navbar'
import Episode from "./components/episodes/episode";
import Section from './components/characters/section'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import episode from "./components/episodes/episode";

function App() {

  return (
<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><h1 className="text-center pt-5">Characters</h1><Section /></>}></Route>
        <Route path="/episodes" element={<Episode/>}></Route>
        <Route path="/locations" element={<h1 className="text-center pt-5">Locations</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
