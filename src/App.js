import logo from './logo.svg';
import './App.css';
import Header from './components/inc/Header';
import Home from './components/pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './components/pages/Home/AboutUs';
import ContactUs from './components/pages/Home/ContactUs';
import UserRegister from './components/pages/User/UserRegisterForm';
import NgoRegister from './components/pages/NGO/NgoRegister';
import SsiRegister from './components/pages/SSI/SsiRegister';
import UserLogin from './components/pages/User/UserLogin';
import Layout from './components/pages/Home/Layout';
import UserLoginHome from './components/pages/User/UserLoginHome';
import NgoList from './components/pages/User/NgoList';
import DonateForm from './components/pages/User/DonateForm';
import RequestList from './components/pages/User/RequestList';
import AcceptedList from './components/pages/User/AcceptedList';
import FoodDetails from './components/pages/User/FoodDetails';
import FoodDetailsSsi from './components/pages/User/FoodDetailsSsi';
import SsiList from './components/pages/User/SsiList';

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
    <Route path="/ngoregister" element={<NgoRegister></NgoRegister>}></Route>
    <Route path="/ssiregister" element={<SsiRegister></SsiRegister>}></Route>
    <Route path="/userlogin" element={<UserLogin></UserLogin>}></Route>
    <Route path="/userlogin/home" element={<UserLoginHome></UserLoginHome>}></Route>
    <Route path="/userlogin/ngolist" element={<NgoList></NgoList>}></Route>
    <Route path="/userlogin/donate" element={<DonateForm></DonateForm>}></Route>
    <Route path="/userlogin/requestlist" element={<RequestList></RequestList>}></Route>
    <Route path="/userlogin/acceptedlist" element={<AcceptedList></AcceptedList>}></Route>
    <Route path="/userlogin/fooddetailsngo" element={<FoodDetails></FoodDetails>}></Route>
    <Route path="/userlogin/fooddetailsssi" element={<FoodDetailsSsi></FoodDetailsSsi>}></Route>
    <Route path="/userlogin/ssilist" element={<SsiList></SsiList>}></Route>
    </Route>
    </Routes>
      </Router>
      
      

      </>
  );
}

export default App;
