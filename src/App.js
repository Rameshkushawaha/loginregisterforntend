
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './component/register';
import Login from './component/login';
import Home from './component/home';
import './component/login.css'

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
       
       <Routes>
          {/* <Link to="/register" >Home</Link>
          <Link to="/">Login</Link>  */}

        <Route path="/register" element={<Register/>} />
        <Route path='/' element={<Login/>} />
        <Route path="/home" element={<Home/>} />
       </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
