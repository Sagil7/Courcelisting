import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Courselist from './Component/Courselist/Courselist';
import Coursedetails from './Component/Coursedetail/Coursedetails';
import Dashboard from './Component/Dashboard/Dashboard';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
   <>
   <Navbar/>
    <Routes>
        <Route path="/" element={<Courselist />} />
        <Route path="/course/:courseId" element={<Coursedetails />} />
        <Route path="/dashboard" element={<Dashboard/>  } />
        
    </Routes>
     
   
   </>
  );
}

export default App;
