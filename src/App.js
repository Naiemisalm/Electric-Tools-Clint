import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navber from './Pages/Shared/Navber';

function App() {
    return (
      <div>
          <Navber></Navber>
          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/home' element={<Home></Home>}></Route>

              <Route path='login' element={<Login></Login>}></Route>
              <Route path='signup' element={<SignUp></SignUp>}></Route>

          </Routes>
      </div>
    );
}

export default App;