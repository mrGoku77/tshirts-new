import './App.css';
import './Header.css'

import Header from "./Header"
import Mens from "./pages/Mens"
import Womens from "./pages/Womens"
import Kids from "./pages/kids"
import Contacts from "./pages/Contacts"
import Homes from "./pages/Homes"
import Offers from "./pages/Offers"

import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  return (
    <div>
      
    <BrowserRouter> 
    
    <Routes>

    <Route path="/"  elements={<Homes/>} />  
    <Route path="/mens"  elements={<Mens/>} /> 
    <Route path="/offers"  elements={<Offers/>} /> 
    <Route path="/womens"  elements={<Womens/>} /> 
    <Route path="/kids"  elements={<Kids/>} /> 
    <Route path="/contacts"  elements={<Contacts/>} /> 
    

    </Routes>

    <Header/> 

    </BrowserRouter>
    </div>
  );
}

export default App;
