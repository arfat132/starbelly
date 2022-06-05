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
import AllDishes from './components/Pages//Shop/AllDishes';
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
import Contact from './components/Pages/Contact/Contact';
import Blogs from './components/Pages/Blogs/Blogs';
import Payment from './components/Pages/OrderProcessing/Payment/Payment';
import ThaiDishes from './components/Pages/Shop/Category/ThaiDishes';
import ArabianDishes from './components/Pages/Shop/Category/ArabianDishes';
import ItalianDishes from './components/Pages/Shop/Category/ItalianDishes';
import ChineseDishes from './components/Pages/Shop/Category/ChineseDishes';
import Chicken from './components/Pages/Shop/ShoByMeat/Chicken';
import Pasta from './components/Pages/Shop/ShoByMeat/Pasta';
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
          <Route path="arabian" element={<ArabianDishes></ArabianDishes>}></Route>
          <Route path="chinese" element={<ChineseDishes></ChineseDishes>}></Route>
          <Route path="italian" element={<ItalianDishes></ItalianDishes>}></Route>
          <Route path="thai" element={<ThaiDishes></ThaiDishes>}></Route>
          <Route path="oneToHundred" element={<OneToHundred></OneToHundred>}></Route>
          <Route path="hundredToThreeHundred" element={<HundredToThreeHundred></HundredToThreeHundred>}></Route>
          <Route path="threeHundredToFiveHundred" element={<ThreeHundredToFiveHundred></ThreeHundredToFiveHundred>}></Route>
          <Route path="fiveHundredToThousand" element={<FiveHundredToThousand></FiveHundredToThousand>}></Route>
          <Route path="chicken" element={<Chicken></Chicken>}></Route>
          <Route path="pasta" element={<Pasta></Pasta>}></Route>
        </Route>
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
           <Route path="payment" element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          } />
        </Route>
        <Route path="/faq" element={<Faq />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/menuDetails/:id" element={<MenuDetails />} />
      </Routes>
    </div>
  );
}

export default App;
