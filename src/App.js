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
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import AllUser from './Pages/Dashboard/AllUser';
import Blog from './Pages/Shared/Blog';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import NotFoundPage from './Pages/Shared/NotFoundPage';
import Footer from './Pages/Shared/Footer';
import Protfalio from './Pages/Home/Protfalio.js/Protfalio';

function App() {
    return (
        <div className='px-12'>
            <Navber></Navber>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='signup' element={<SignUp></SignUp>}></Route>
                <Route path='blog' element={<Blog></Blog>}></Route>
                <Route path='prot' element={<Protfalio></Protfalio>}></Route>
                <Route path='dashboard' element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }>
                    <Route index element={<MyOders></MyOders>}></Route>
                    <Route path='reviwe' element={<MyReviwe></MyReviwe>}></Route>
                    <Route path='users' element={<AllUser></AllUser>}></Route>
                    <Route path='add' element={<AddAProduct></AddAProduct>}></Route>
                    <Route path='manage' element={<ManageProducts></ManageProducts>}></Route>

                </Route>
                <Route path='purchase/:purchaseId' element={
                    <RequireAuth>
                        <Purchase></Purchase>
                    </RequireAuth>
                }></Route>
                <Route path='/*' element={<NotFoundPage></NotFoundPage>}></Route>

            </Routes>
            <Footer></Footer>
            
            <ToastContainer />

        </div>
    );
}

export default App;