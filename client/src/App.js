import logo from './logo.svg';
import './App.css';

import { Box, styled } from "@mui/material";
import Home from './MyComponents/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './MyComponents/header/Header';
function App() {
  return (
    <>
    <BrowserRouter>
    
        <Header/>
        <Box>
    
    
          <Routes>
    
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/product/:id' element={<DetailVeiw/>}/> */}
            {/* <Route path='/men' element={<ForMen/>}/> */}
            
            </Routes>
        </Box>
      
     
     
        
    </BrowserRouter>
        
       
      
        </>
  );
}

export default App;
