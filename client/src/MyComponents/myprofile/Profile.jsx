

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";
import { Box, Typography, Button, Grid, styled } from "@mui/material";

import { useNavigate } from 'react-router-dom';

import PersonalDetail from './PersonalDetail'
import LeftPart from "./LeftPart";


const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 12px;
  background: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border: 2px solid #e0e0e0;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 2px;
`;

const Profile = () => {


  return (
    <div>
      <Component container>
        <LeftComponent item lg={3} md={5} sm={12} xs={12}>
          <Header>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="profile image" />
            <Typography style={{ fontWeight: 600, fontSize: 18 ,    padding: '5px 0 0 16px',}}>
              Hello{" "}
            </Typography>
          </Header>
          
         <LeftPart/>
          
        </LeftComponent>
        <Grid item lg={9} md={7} sm={12} xs={12}> 
         <PersonalDetail/>
        </Grid>
      </Component>
    </div>
  );
};

export default Profile;
