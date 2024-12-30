import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Layout from "./pages/layout/Layout.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Product from "./pages/product/Product.jsx";
import Category from "./pages/category/Category.jsx";
import Customer from "./pages/customer/Customer.jsx";
import Orders from "./pages/orders/Orders.jsx";
import Coupons from "./pages/coupons/Coupons.jsx";
import Chats from "./pages/chats/Chats.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Logout from "./pages/logout/Logout.jsx";
import Register from "./pages/register/Register.jsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/customer" element={<Customer/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/coupons" element={<Coupons/>}/>
                <Route path="/chats" element={<Chats/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default App
