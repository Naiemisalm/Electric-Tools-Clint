import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOders from './Pages/Dashboard/MyOders';
import MyReviwe from './Pages/Dashboard/MyReviwe';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
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
                <Route path='dashboard' element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }>
                    <Route index element={<MyOders></MyOders>}></Route>
                    <Route path='reviwe' element={<MyReviwe></MyReviwe>}></Route>

                </Route>
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