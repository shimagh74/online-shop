import './App.css';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav from './components/nav';
import {ShopContextProvider} from './context/shopContext'
import Contact from './pages/contact';
import Home from './pages/home';
import Footer from './components/footer/footer';
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <ShopContextProvider>
       <Router>
        <Nav/>
        <div className="container mx-auto mt-28">
        <Routes>
         <Route path="/"  element={<Home/>}/>
         <Route path="/shop"  element={<Shop/>}/>
         <Route path="/cart"  element={<Cart/>}/>
         <Route path="/aboutUs"  element={<AboutUs/>}/>
         <Route path="/contactus"  element={<Contact/>}/>
       </Routes>
    </div>
       <Footer/>
     </Router>
     </ShopContextProvider>
  );
}

export default App;
