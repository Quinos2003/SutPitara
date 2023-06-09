import { Drawer,Box, IconButton, Typography,styled } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'




const MuiDrawer = () => {
    const [isDrawerOpen,setIsDrawerOpen]=useState(false)

  
  return (
    <>
    <IconButton size='large' edge='start'  color='inherit' aria-aria-label='logo' onClick={()=> setIsDrawerOpen(true)} style={{
      color:"white",
     
    }}>
        <MenuIcon />
    </IconButton>
    <Drawer 
    anchor='right'
   
    open={isDrawerOpen} 
    onClose={()=> setIsDrawerOpen(false)}  >
        <Box sx={{ overflow: 'auto',
      width: '50vw' }}  textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>Previous Orders</Typography>
            <Typography variant='h6' component='div'>My Profile</Typography>
            <Typography variant='h6' component='div'>Login</Typography>
            <Typography variant='h6' component='div'>Wishlist</Typography>
            
        </Box>
    </Drawer>
      
    </>
  )
}

export default MuiDrawer
