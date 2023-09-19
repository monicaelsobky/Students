import React from 'react';
import './App.css';
import {Route, Link, Routes, useNavigate} from 'react-router-dom';



import Header from './components/Header';
import Add from './components/Add';
import Register from './components/Register';




function App() {
  return (

<>
<Header/>
<Routes>		
				<Route path="/Add" element={<Add/>} />
				<Route path="/Reg" element={<Register/>} />
			</Routes>
</>
   
 
   
  );
}

export default App;
