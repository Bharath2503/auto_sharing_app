import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './components/navbar';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Slot from './components/createslot';
import Home from './components/home';
import About from './components/about';
import SlotDetails from "./components/slotdetails";
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
       <Header/>
      <Routes>
      <Route path="/login" element={<Login/>} /> 
      <Route path="/book" element={<Slot/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/SlotDetails" element={<SlotDetails/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
