import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from '../src/components/pages/HomePage';
import ShopPage from '../src/components/pages/ShopPage';
import AboutPage from '../src/components/pages/AboutPage';
import TeamPage from '../src/components/pages/TeamPage';
import BlogPage from '../src/components/pages/BlogPage';
import ContactPage from '../src/components/pages/ContactPage';
import Cart from '../src/components/pages/Cart';
import Login from '../src/components/pages/Login';
import ShopProducts from "./components/pages/ShopProducts";
import ShopImage from "./components/pages/ShopImage";
import { CartProvider } from 'react-use-cart';
import Footer from "./components/Footer";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import GridLoader from "react-spinners/GridLoader";
import ScrollTop from "./components/ScrollTop";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },

    
  });

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, [])
  return (
    
    <div>
      {
        loading?
        <div className="load">
          <GridLoader
           color={"#419ed9"} 
           loading={loading} 
           size={35} 
           />
        </div>
     :
      <div>
      <CartProvider>
      <BrowserRouter >
      <ScrollTop/>
      <Navbar/>
       <Switch>
         <Route path="/" exact component={HomePage}></Route>
         <Route path="/shop" component={ShopPage}></Route>
         <Route path="/about" component={AboutPage}></Route>
         <Route path="/team" component={TeamPage}></Route>
         <Route path="/Blog" component={BlogPage}></Route>     
         <Route path="/contact" component={ContactPage}></Route>
         <Route path="/login" component={Login}></Route>
         <Route path="/cart" component={Cart}></Route>
         <Route path="/shopProducts" component={ShopProducts}></Route>
         <Route path="/shopImage" component={ShopImage}></Route>


       </Switch>
       <Footer />
      </BrowserRouter>
      </CartProvider>
      </div>
      }
      
      </div>
  )
}

export default App