import logo from './logo.svg';
import './App.css';
import Header from './components/inc/Header';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import UserRegister from './components/pages/UserRegisterForm';
import Footer from './components/inc/Footer';
import { Provider } from 'react-redux';
import store from './components/store/mystore';
import UserReg from './components/request/UserReg';
import NgoReg from './components/request/NgoReg';
import Provide from './components/store/Provide';
import NgoRegister from './components/pages/NgoRegister';
import SsiRegister from './components/pages/SsiRegister';
import UserLogin from './components/pages/UserLogin';
import Layout from './components/pages/Layout';
import UserLoginHome from './components/pages/UserLoginHome';
import NgoLogin from "./components/pages/NgoLogin";
import NgoLoginHome from "./components/pages/NgoLoginHome";

function App() {
  return (
    <>
  
   <Router>    
    <Routes>
    <Route  path="/" element={<Layout></Layout>}>
    <Route exact path="/home" element={<Home></Home>}></Route>
    <Route path="/about" element={<AboutUs></AboutUs>}></Route>
    <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
    <Route path="/userregister" element={<UserRegister></UserRegister>}></Route>
    <Route path="/userreg" element={<UserReg></UserReg>}></Route>
    <Route path="/ngoregister" element={<NgoRegister></NgoRegister>}></Route>
    <Route path="/ssiregister" element={<SsiRegister></SsiRegister>}></Route>
    <Route path="/userlogin" element={<UserLogin></UserLogin>}></Route>
    <Route path="/userlogin/home" element={<UserLoginHome></UserLoginHome>}></Route>
    <Route path="/ngologin" element={<NgoLogin></NgoLogin>}></Route>
    <Route path="/ngologin/home" element={<NgoLoginHome></NgoLoginHome>}></Route>

    </Route>
    </Routes>
      </Router>
      
      

      </>
  );
}

export default App;
