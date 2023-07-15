import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/common/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { InlineWidget } from "react-calendly";
import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <div>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
