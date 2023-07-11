import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/common/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { InlineWidget } from "react-calendly";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <div className="container">
        <div className="card mt-4 mb-5">
          <div className="card-body text-center p-3">Hello</div>
        </div>
          <div className="col-3 p-3">
            <InlineWidget url="https://calendly.com/carson-brantley"></InlineWidget>
          </div>
      </div>
    </div>
  );
}

export default App;
