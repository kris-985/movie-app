import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/nav/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Favourites from "./pages/Favourites";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="favourites" element={<Favourites />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
