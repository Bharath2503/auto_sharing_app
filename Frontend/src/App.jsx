import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Login from './components/Login';
import Header from './components/navbar';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Slot from './components/CreateSlot';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
       <Header/>
      <Routes>
      <Route path="/home" element={<Home/>} /> 
      <Route path="/slot" element={<Slot/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
