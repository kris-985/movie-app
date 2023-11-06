import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from "./pages/AboutUs";
import Contacts from './pages/Contacts';
import Favourites from "./pages/Favourites";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Account from './components/Account';
import PrivacyPolicy from './components/PrivacyPolicy';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className='router-wrapper'>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={<Account />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>

    </AuthContextProvider>
  );
}

export default App;
