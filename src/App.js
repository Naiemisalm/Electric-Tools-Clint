import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Reviwe from './Pages/Reviwe/Reviwe';
import Navber from './Pages/Shared/Navber';

function App() {
    return (
        <div className='max-w-7-xl mx-auto px-12'>
            <Navber></Navber>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='signup' element={<SignUp></SignUp>}></Route>
                <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='review' element={
                    <RequireAuth>
                        <Reviwe></Reviwe>
                    </RequireAuth>
                }></Route>
                <Route path='purchase/:purchaseId' element={
                    <RequireAuth>
                        <Purchase></Purchase>
                    </RequireAuth>
                }></Route>

            </Routes>
        </div>
    );
}

export default App;