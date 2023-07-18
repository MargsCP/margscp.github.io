import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/common/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import ContactPage from "./components/pages/ContactPage";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/pages/Footer";
import ExtendAboutMe from "./components/pages/ExtendAboutMe";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<ExtendAboutMe />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
