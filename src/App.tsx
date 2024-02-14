import React from "react";
import './App.css';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Shop from './pages/shop/shop.tsx';
import Cart from './pages/cart/cart.tsx';
import Nav from './components/nav.tsx';
import {ShopContextProvider} from './context/shopContext.tsx'
import Contact from './pages/contact.tsx';
import Footer from './components/footer/footer.tsx';
import AboutUs from './pages/aboutUs.tsx';
import Home from './pages/home.tsx';

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
