import "./App.css";
import NavBar from "./components/common/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

import Footer from "./components/pages/Footer";
import AboutPage from "./components/pages/AboutPage";

/***
 * Even though this is more or less a single page application, each fold is sectioned off as its own page, 
 * and this is all organized from the "HomePage" component. 
 * 
 * To add any images, we recommend uploading them to the images folder (please feel free to delete or restructure this folder if you like,
 * but this may require looking at every fold with image imports to ensure these aren't messed up.)
 * 
 * 
 * 
 * 
 */

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
