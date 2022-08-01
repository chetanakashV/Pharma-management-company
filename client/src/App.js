import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Axios from 'axios';
import Register from "./components/auth/Register";
import RegisterU from "./components/auth/RegisterU"
import Login from './components/auth/Login'
import LoginU from './components/auth/LoginU'
import LoginW from "./components/auth/LoginW";
import Landing from "./components/layouts/Landing"
// import NavBar from "./components/layouts/Navbar"
import Admin from "./components/dashboards/Admin"
import Customer from "./components/Admin functions/AddCustomer"
import Company from "./components/Admin functions/AddCompany"
import ViewCustomers from "./components/Admin functions/ViewCustomers"
import ViewCompanies from "./components/Admin functions/ViewCompanies"
import User from "./components/dashboards/User";
import Store from "./components/store"
import Edit from "./components/Admin functions/EditCompanies";
import ViewStock from "./components/Admin functions/ViewStock";
import ViewDrugs from "./components/Admin functions/ViewDrugs";
import ViewCovid from "./components/Admin functions/ViewCovid";
import BuyItems from "./components/User functions/BuyItems";
import ViewOrders from "./components/Admin functions/ViewOrders";
import ViewSuccessOrders from "./components/Admin functions/ViewSuccesfulOrders";
import AddStock from "./components/Admin functions/AddStocks";
import EditStock from "./components/Admin functions/EditStock";
import ViewOrdersU from "./components/User functions/ViewOrdersU";
import ViewExpired from "./components/Admin functions/ViewExpired";
import ViewPenOrdersU from "./components/User functions/PendingOrders";

function App() {

  Axios.defaults.withCredentials = true;
  return (
    <>
    <Router>
      {/* <NavBar/> */}
      <Routes>
      <Route exact path='/' element={<LoginW/>} />
      <Route exact path='/registeru' element={<RegisterU/>} />
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/loginu' element={<LoginU/>} />
      <Route  path='/admin' element={<Admin/>} />
      <Route  path="/user/:username" element={<User/>} />
      <Route path = '/store'  element = {Store}/>
      <Route exact path='/admin/addcustomer' element={<Customer/>} />
      <Route exact path='/admin/viewcustomers' element={<ViewCustomers/>} />
      <Route exact path='/admin/addcompany' element={<Company/>} />
      <Route exact path='/admin/viewcompanies' element={<ViewCompanies/>} />
      <Route exact path='/admin/viewstocks/viewdrugs' element={<ViewDrugs/>} /> 
      <Route exact path='/admin/viewstocks/viewcovid' element={<ViewCovid/>} /> 
      <Route exact path='/admin/viewstocks' element={<ViewStock/>} /> 
      <Route exact path='/admin/vieworders' element={<ViewOrders/>} /> 
      <Route  path='/user/viewsuccorders/:username' element={<ViewOrdersU/>} /> 
      <Route exact path='/admin/addstock' element={<AddStock/>} /> 
      <Route exact path='/admin/viewstock' element={<ViewStock/>} /> 
      <Route exact path='/admin/viewsuccessorders' element={<ViewSuccessOrders/>} /> 
      <Route exact path='/admin/viewexpiredstock' element={<ViewExpired/>} /> 
      <Route  path='/admin/editcompany/:comp_id' element={<Edit/>} />
      <Route  path='/admin/editstock/:stock_id' element={<EditStock/>} />
      <Route  path='/user/buyitems/:username' element={<BuyItems/>} />
      <Route  path='/user/viewpenorders/:username' element={<ViewPenOrdersU/>} />

    </Routes>
  </Router>
  </>
  );
}

export default App;