import { Dialog ,Box, TextField, Typography, Button, styled} from '@mui/material'
import { height } from '@mui/system';
import {useState, React} from 'react'
import { useCookies } from 'react-cookie';
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
    const [cookies, setCookie] = useCookies(['csrftoken']);
        const [account, toggleAccount]=useState(accountInitialValues.login);
        // const[ signup,setSignup]=useState(signupInitialValues);
        // const[ login,setLogin]=useState(loginInitialValues);

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        
    }

    const signUp = async () => {
        const data = {
            "first_name": document.getElementById("first").value,
            "last_name": document.getElementById("last").value,
            "email": document.getElementById("emailsignup").value,
            "password": document.getElementById("passwordsignup").value
        }
        console.log("test")
        fetch("store/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": cookies.csrftoken
            }}).then(response => response.json())
            .then(response => {
              console.log(response);
            })
         handleClose();
    }
        const toggleSignup=()=>{
            
                toggleAccount(accountInitialValues.signup);
        }
        const toggleLogin=()=>{
            
            toggleAccount(accountInitialValues.login);
        }   

   

  

    const loginUser = async () => {
            
        const data = {
            "email": document.getElementById("email").value,
            "password": document.getElementById("password").value
        }
        fetch("store/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",                "X-CSRFToken": cookies.csrftoken
            }}).then(response => response.json())
            .then(response => {
              console.log(response);
            })
         handleClose();
    }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={ {sx : {maxWidth: 'unset'}}}>
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
            <Wrapper>
                <TextField variant="standard" id='email'  name="username" label="Enter Email/Mobile number" />
                <TextField variant="standard" id='password' name="password" label="Enter Password"/>
                <Text>By continuing,you are agree to Flipkart's Terms of Use and Privacy Policy.</Text>
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
                <TextField variant="standard" id='first' name="firstname" label="Enter  Firstname"/>
                <TextField variant="standard" id='last' name="lastname" label="Enter  Lastname"/>
                {/* <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter  Username"/> */}
                <TextField variant="standard" id='emailsignup' name="email" label="Enter  Email"/>
                <TextField variant="standard" id='passwordsignup' name="password" label="Enter  Password"/>
                {/* <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="phone"label="Enter  Phone"/>   */}
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
