import React from "react"
import styled from "styled-components"
import { useCookies } from 'react-cookie';
import { notification2 } from "../notifications/notification";
import { useNavigate } from "react-router-dom";

function Logout(){

    const [, , removeCookies] = useCookies(['sessionid']);
    const navigate = useNavigate();

    const handleLogout = (message) => {
        removeCookies(['sessionid']);
        notification2(message);
        navigate("/");
      };

  return (
    <LogoutContainer onClick={()=>handleLogout("Logged Out")}>
      <p>Logout</p>
    </LogoutContainer>
  )
};

const LogoutContainer = styled.div`
p{
  font-color:#C70D0D;
  background-color: white;
  padding:0.25rem 0.4rem;
  font-weight: 500;
  &:hover{
    cursor: pointer;
    border-radius: 0.6rem;
    transition: 0.25s;
}
  }
`

export default Logout;
