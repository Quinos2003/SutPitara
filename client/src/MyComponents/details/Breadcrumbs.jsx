import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to='/' style={{ textDecoration: 'none',
      color: '#9F9F9F',
      }}> 
          Home
        </Link>
        
        <Typography  style={{
            color: '#807353 ',
            fontWeight: 'normal',
            textDecoration: 'none',
            fontSize: '14px',
          }}>Proudctname</Typography>
      </Breadcrumbs>
    </div>
  );
}