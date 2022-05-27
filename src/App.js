import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuDetails from './components/MenuDetails/MenuDetails';
import Menu from './components/Menu/Menu';
import Breakfast from './components/Menu/Breakfast';
import Lunch from './components/Menu/Lunch';
import Dinner from './components/Menu/Dinner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Breakfast></Breakfast>}></Route>
          <Route path="/lunch" element={<Lunch></Lunch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/about" element={<Home />} />
        <Route path="/menuDetails/:id" element={<MenuDetails />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
