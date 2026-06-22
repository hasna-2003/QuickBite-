import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Menubar from './components/Menubar/Menubar';
import { Routes, Route } from 'react-router-dom';
import AddFood from './pages/AddFood/AddFood';
import ListFood from './pages/ListFood/ListFood';
import Order from './pages/Order/Order';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [sidebarVisible , setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }

  return (
            <div className="d-flex" id="wrapper">


            <Sidebar sidebarVisible={sidebarVisible} />
           
            <div id="page-content-wrapper">

              <Menubar toggleSidebar={toggleSidebar}  />
              <ToastContainer />
              
                <div className="container-fluid">
                  <Routes>
                    <Route path="/addfood" element={<AddFood />} />
                    <Route path="/listfood" element={<ListFood />} />
                    <Route path="/order" element={<Order />} />
                      <Route path="/" element={<ListFood />} />
                  </Routes>
                </div>
        </div>
    </div>
  )
}

export default App
