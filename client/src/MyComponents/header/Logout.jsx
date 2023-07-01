import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { notification2 } from "../notifications/notification";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Logout() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");
  let decodedToken = null;

  useEffect(() => {
    if (token) {
      try {
        decodedToken = jwt_decode(token);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [token, isLoggedIn]);

  const handleLogout = (message) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setIsLoggedIn(false);
    window.location.reload();
    notification2(message);
    navigate("/");
  };

  return (
    <LogoutContainer onClick={() => handleLogout("Logged Out")}>
      <p>Logout</p>
    </LogoutContainer>
  );
}

const LogoutContainer = styled.div`
  p {
    background-color: #f5f5f5;
    border: none;
    outline: none;
    width: 5vw;
    color: #830304;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    padding: 7px;
    text-align: center;
    &:hover {
      cursor: pointer;
      border-radius: 0.6rem;
    }
  }
`;

export default Logout;
