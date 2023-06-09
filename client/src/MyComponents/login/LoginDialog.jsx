import { Dialog ,Box, TextField, Typography, Button, styled} from '@mui/material'
import {useState, React, useEffect} from 'react'
import { useCookies } from 'react-cookie';
import { BsFillEyeFill,BsFillEyeSlashFill } from "react-icons/bs";
import { notification1, notification2 } from "../notifications/notification.js"
import jwt_decode from "jwt-decode";
//  import { authenticateSignup } from '../../service/api';
//  import { authenticateLogin } from '../../service/api';
const Component=styled(Box)`
height: 70vh;
width: 90vh;

`
const Image=styled(Box)`
// height: 82%;
width: 28%;
background: #830304
url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85%  no-repeat;
padding: 45px 35px;
&>p ,&>h5{
color: #ffffff;
font-weight: 600
}
`

const Wrapper=styled(Box)`
display: flex; 
flex-direction: column;
padding: 25px 35px;


// flex 1 means same width on on both page signin and signup
flex: 1;
& > div, & > button, & > p{
    margin-top: 20px;

}

`
const  LoginButton=styled(Button)`
text-tranform: none; 
// it is used for the writren text is only in capital alphabet

// background: #FB641B;
background: #830304;
color: #fff;
height: 48px;
border-radius: 2px
`

const  OtpButton=styled(Button)`
text-tranform: none; 
// it is used for the writren text is only in capital alphabet

background: #fff;
// color: #2874f0;
color: #830304;
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
`
const Text=styled(Typography)`
font-size: 12px;
color: #878787
`
const CreateAccount=styled(Typography)`
font-size: 14px;
text-align: center;
// color: #2874f0;
color: #830304;
font-weight: 600;
cursor: pointer;

`
const LoginAccount=styled(Typography)`
font-size: 14px;
text-align: center;
// color: #2874f0;
color: #830304;
font-weight: 600;
cursor: pointer;

`

const  ToggleButton=styled(Button)`

`

const accountInitialValues={
    login:{
        view: 'login',
        heading: 'Login',
        SubHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view: 'signup',
        heading: "Looks like you're new here!",
        SubHeading: "Sign up with your mobile number to get started"
    }
}


// const signupInitialValues={
//     firstname: '',
//     lastname: '',
//     username: '',
//     email: '',
//     password: '',
//     phone: '',
// }
// const loginInitialValues={
//     username: '',
//     password: '',
// }


export default function LoginDialog({open,setOpen}) {
        const [cookies, setCookies] = useCookies(['csrftoken']);
        const [account, toggleAccount]=useState(accountInitialValues.login);
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [firstNameError, setFirstNameError] = useState('');
        const [lastNameError, setLastNameError] = useState('');
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [emailSignUp, setEmailSignUp] = useState('');
        const [passwordSignUp, setPasswordSignUp] = useState('');
        //To toggle password visibility
        const [show, setShow] = useState(false);

        //To check whether user is authenticated
        const [isAuthenticated, setisAuthenticated] = useState(false);

        // ----to show and hide password----
        const showIcon=()=>{
            setShow(!show)
        }
    

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    // const tokenCheck = (success,failure) => {
    //     if ( isAuthenticated ) {
    //         console.log(isAuthenticated)
    //         notification2(success);
    //     }else{
    //         console.log(isAuthenticated)
    //         notification1(failure);
    //     }
    // }

    const signUp = async () => {
        const first_name = firstName;
        if (first_name === '') {
          setFirstNameError('First name cannot be blank');
          console.log(firstNameError);
          return;
        }
      
        const last_name = lastName;
        if (last_name === '') {
          setLastNameError('Last name cannot be blank');
          console.log(lastNameError);
          return;
        }
      
        // Validate email
        const email = emailSignUp;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email === '') {
          setEmailError('Invalid email');
          console.log(emailError);
          return;
        }
        setEmailError('');
      
        // Validate password (at least 6 characters)
        const password = passwordSignUp;
        const passwordRegex = /^.{6,}$/;
        if (!passwordRegex.test(password) || password === '') {
          setPasswordError('Password must be at least 6 characters');
          console.log(passwordError);
          return;
        }
        setPasswordError('');
      
        const data = {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
        };
      
        fetch('/store/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': cookies.csrftoken,
            },
          })
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
              // Handle response and show alert message based on success or failure
              if (response.success && response.token) {
                // Verify and decode the JWT token
                try {
                    const decodedToken = jwt_decode(response.token);                  const { name } = decodedToken;
                  notification2(`Account created successfully. Welcome, ${name}!`);
                } catch (error) {
                  console.log(error);
                  notification1('Account creation failed');
                }
              } else {
                notification1('Account creation failed');
              }
            })
            .catch((error) => {
              console.log(error);
              notification1('Account creation failed');
            });
        
          handleClose();
        };
      
        const toggleSignup=()=>{
            
                toggleAccount(accountInitialValues.signup);
        }
        const toggleLogin=()=>{
            
            toggleAccount(accountInitialValues.login);
        }   

   

  

        const loginUser = async () => {
            // Validate email
            const email = document.getElementById('email').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email) || email === '') {
              setEmailError('Invalid email');
              console.log(emailError);
              return;
            }
            setEmailError('');
          
            // Validate password (at least 6 characters)
            const password = document.getElementById('password').value;
            const passwordRegex = /^.{6,}$/;
            if (!passwordRegex.test(password) || password === '') {
              setPasswordError('Password must be at least 6 characters');
              console.log(passwordError);
              return;
            }
            setPasswordError('');
          
            const data = {
              "email": email,
              "password": password
            };
          
            await fetch("store/login", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": cookies.csrftoken
              }
            })
            .then(response => response.json())
            .then(response => {
              console.log(response);
              if (response.status === 200) {
                const token = response.token;
                try {
                  // Verify and decode the JWT token
                  const decodedToken = jwt_decode(token);
                  const { user_id } = decodedToken;
          
                  // Save token in localStorage
                  localStorage.setItem('token', token);
                  localStorage.setItem('user_id', user_id)
          
                  // Show success notification
                  notification2("Successfully logged in");
                } catch (error) {
                  console.error("Invalid token:", error);
                  // Show error notification
                  notification1("Invalid credentials");
                }
              } else {
                // Show error notification
                notification1("Invalid credentials");
              }
            });
          
            handleClose();
          }

  return (
        <Dialog open={open} onClose={() => { setOpen(false)}} PaperProps={ {sx : {maxWidth: 'unset'}}}>
            <Component>
                <Box style={{
                    display: "flex",
                    height: '100%'
                }}>
                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{
                        marginTop: 20
                    }}>{account.SubHeading}</Typography>

                </Image>

                {
                    account.view==='login'?
                <Wrapper style={{position:"relative"}}>
                    <TextField variant="standard"  id='email'  name="username" label="Enter Email/Mobile number" />
                    <div style={{display:"flex"}}>
                        <TextField style={{width:"100%"}} variant="standard" type={show?"text":"password"} id='password' name="password" label="Enter Password"/>
                        <span style={{margin:'8px 6px 0px 0px'}} onClick={()=>showIcon()}>
                            {show ? <BsFillEyeSlashFill style={{color:"black", fontSize:"1.2rem", margin:"0.8rem",cursor:"pointer"}}/> : <BsFillEyeFill style={{color:"black", fontSize:"1.2rem", margin:"0.8rem",cursor:"pointer"}}/>}
                        </span>
                    </div>

                    <Text>By continuing,you are agree to Sutpitaara's Terms of Use and Privacy Policy.</Text>
                    <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                    <Typography style={{
                        textAlign: 'center' 
                    }}>Or</Typography>
                    <OtpButton>Request OTP?</OtpButton>
                    <CreateAccount onClick={()=> toggleSignup()}>New to Sutpitaara? Create an account</CreateAccount>
                    {/* <CreateAccount >New to Flipkart? Create an account</CreateAccount> */}
                </Wrapper>
                
                :
                <Wrapper>
                    <TextField variant="standard" id='first' name="firstname" label="Enter  Firstname" defaultValue={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    <TextField variant="standard" id='last' name="lastname" label="Enter  Lastname" defaultValue={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    {/* <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter  Username"/> */}
                    <TextField variant="standard" id='emailsignup' name="email" label="Enter  Email" defaultValue={emailSignUp} onChange={(e)=>setEmailSignUp(e.target.value)}/>
                    <div style={{display:"flex"}}>
                        <TextField style={{width:"100%"}} variant="standard" type={show?"text":"password"} id='password' name="password" label="Enter Password" defaultValue={passwordSignUp} onChange={(e)=>setPasswordSignUp(e.target.value)}/>
                        <span style={{margin:'8px 6px 0px 0px'}} onClick={()=>showIcon()}>
                            {show ? <BsFillEyeSlashFill style={{color:"black", fontSize:"1.2rem", margin:"0.8rem",cursor:"pointer"}}/> : <BsFillEyeFill style={{color:"black", fontSize:"1.2rem", margin:"0.8rem",cursor:"pointer"}}/>}
                        </span>
                    </div>                {/* <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="phone"label="Enter  Phone"/>   */}
                    {/* here in the name field we have to take the same values that we have taken in the uperside of the object  that is signupInitialValues */}
                    
                    <LoginButton onClick={() => signUp()}>Continue</LoginButton>
                    <LoginAccount onClick={()=> toggleLogin()}>Already have an account? Click to login</LoginAccount>
                </Wrapper>
                }
                </Box>
            </Component>
        </Dialog>
  )
}
