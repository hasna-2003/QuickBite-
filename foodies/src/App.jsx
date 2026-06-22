import React from 'react' ;
import Menubar from './components/Menubar/Menubar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import ContactUs from './pages/contactUs/ContactUs';
import FoodDetails from './pages/FoodDetails/FoodDetails';


const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/food/:id' element={<FoodDetails />} />
      </Routes>
    </div>
  )
}

export default App ;
