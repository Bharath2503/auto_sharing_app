import '../css/App.css';
import TextField from './textfield';
import React from 'react'

function App() {
  const handleSubmit=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div className="App">
    
      <h1>Development process is on going ........</h1>
      <TextField  name="test" id="name" onchange={handleSubmit} padding='10px'/>
      
    </div>
  );
}

export default App;
