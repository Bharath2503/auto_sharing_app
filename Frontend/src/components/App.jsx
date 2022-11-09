import '../css/App.css';
import {Route,Routes} from 'react-dom'
import {BrowserRouter} from 'react-dom'
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
