import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Shared/Navbar';
import MenuDetails from './components/Pages/MenuDetails/MenuDetails';
import Breakfast from './components/Pages/Home/Menu/Breakfast';
import Lunch from './components/Pages/Home/Menu/Lunch';
import Dinner from './components/Pages/Home/Menu/Dinner';
import Shipping from './components/Pages/OrderProcessing/Shipping/Shipping';
import Shop from './components/Pages/Shop/Shop';
import LowToHigh from './components/Pages//Shop/Category/LowToHigh';
import IndianDishes from './components/Pages//Shop/Category/IndianDishes';
import AllDishes from './components/Pages//Shop/AllDishes';
import HighToLow from './components/Pages//Shop/Category/HighToLow';
import RequireAuth from './components/Auth/RequireAuth';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import OneToHundred from './components/Pages/Shop/ShopByPrice/OneToHundred';
import ThreeHundredToFiveHundred from './components/Pages/Shop/ShopByPrice/ThreeHundredToFiveHundred';
import HundredToThreeHundred from './components/Pages/Shop/ShopByPrice/HundredToThreeHundred';
import FiveHundredToThousand from './components/Pages/Shop/ShopByPrice/FiveHundredToThousand';
import OrderProcessing from './components/Pages/OrderProcessing/OrderProcessing';
import Checkout from './components/Pages/OrderProcessing/Checkout/Checkout';
import Orders from './components/Pages/Orders/Orders';
import Faq from './components/Pages/Faq/Faq';
function App() {
  return (
    <div>
      <Navbar></Navbar>
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
          <Route path="highToLow" element={<HighToLow></HighToLow>}></Route>
          <Route path="oneToHundred" element={<OneToHundred></OneToHundred>}></Route>
          <Route path="hundredToThreeHundred" element={<HundredToThreeHundred></HundredToThreeHundred>}></Route>
          <Route path="threeHundredToFiveHundred" element={<ThreeHundredToFiveHundred></ThreeHundredToFiveHundred>}></Route>
          <Route path="fiveHundredToThousand" element={<FiveHundredToThousand></FiveHundredToThousand>}></Route>
        </Route>
        <Route path="/lowtohigh" element={<LowToHigh></LowToHigh>}></Route>
        <Route path="/orderProcessing" element={<OrderProcessing />} >
          <Route index element={<Orders></Orders>}></Route>
          <Route path="checkout" element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          } />
          <Route path="shipping" element={
            <RequireAuth>
              <Shipping />
            </RequireAuth>
          } />

        </Route>
        <Route path="/faq" element={<Faq />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/menuDetails/:id" element={<MenuDetails />} />
      </Routes>
    </div>
  );
}

export default App;
