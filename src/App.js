import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuDetails from './components/MenuDetails/MenuDetails';
import Breakfast from './components/Menu/Breakfast';
import Lunch from './components/Menu/Lunch';
import Dinner from './components/Menu/Dinner';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import LowToHigh from './components/Shop/Category/LowToHigh';
import IndianDishes from './components/Shop/Category/IndianDishes';
import AllDishes from './components/Shop/AllDishes';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Breakfast></Breakfast>}></Route>
          <Route path="/lunch" element={<Lunch></Lunch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/shop" element={<Shop />} >
          <Route index element={<AllDishes></AllDishes>}></Route>
          <Route path="indianDishes" element={<IndianDishes></IndianDishes>}></Route>
          <Route path="lowtohigh" element={<LowToHigh></LowToHigh>}></Route>
        </Route>
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/menuDetails/:id" element={<MenuDetails />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
