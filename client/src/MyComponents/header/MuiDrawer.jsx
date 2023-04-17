import { Drawer,Box, IconButton, Typography,styled } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'




const MuiDrawer = () => {
    const [isDrawerOpen,setIsDrawerOpen]=useState(false)

  
  return (
    <>
    <IconButton size='large' edge='start'  color='inherit' aria-aria-label='logo' onClick={()=> setIsDrawerOpen(true)} style={{
      color:"white"
    }}>
        <MenuIcon />
    </IconButton>
    <Drawer 
    anchor='left'
    open={isDrawerOpen} 
    onClose={()=> setIsDrawerOpen(false)}  >
        <Box sx={{ overflow: 'auto' }}  textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>New Arrivals</Typography>
            <Typography variant='h6' component='div'>Kurtas & bundis</Typography>
            <Typography variant='h6' component='div'>Bandhgalas</Typography>
            <Typography variant='h6' component='div'>Sherwanis & achkans</Typography>
            <Typography variant='h6' component='div'>Occasion wear</Typography>
            <Typography variant='h6' component='div'>Wedding</Typography>
            <Typography variant='h6' component='div'>Bran</Typography>
        </Box>
    </Drawer>
      
    </>
  )
}

export default MuiDrawer
