import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './components/navbar';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import SlotBook from './components/SlotBooking';
import Slot from './components/CreateSlot';
import Home from './components/Home';
import About from './components/About';
import SlotDetails from "./components/SlotDetails";
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
       <Header/>
      <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/slot" element={<Slot/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/slotbook" element={<SlotBook/>}/>
      <Route path="/SlotDetails" element={<SlotDetails/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
