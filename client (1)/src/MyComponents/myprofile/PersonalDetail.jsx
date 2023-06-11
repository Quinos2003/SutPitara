import { Card, Box, Typography, Button, styled } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
// import { addEllipsis } from '../../utils/util';
// import GroupButton from './GroupButton';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from '@mui/material/Divider';

const Component = styled(Box)`
  // border-top: 1px solid #f0f0f0;
  border: 2px solid #e0e0e0;
  border-radius: 2px;

`;
const Container = styled(Box)`
  padding: 23px;
`;
const Header = styled(Box)`
  display: flex;
  align-items: center;
  padding-bottom: 24px;
`;
const Heading = styled(Typography)`
font-weight: 600;
font-size: 18 ;
// padding: 5px 0 0 16px;
padding-right: 24px;
}
`;
const Edit = styled("span")`
  font-size: 14px;
  font-weight: 500;
  color: #830304;
  cursor: pointer;
`;
const Main = styled(Box)`
  padding-bottom: 56px;
`;
const FaqHeading = styled("h4")`
  margin-bottom: 5px;
  margin-top: 20px;
  padding: 0;
  line-height: 1.5;
  font-weight: 500;
  font-size: 14px;
`;
const FaqPara = styled("p")`
  line-height: 1.5;
  margin-top: 15px;
`;

const PersonalDetail = ({ item, removeItemFromCart }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <>
      <Component>
        <Container>
          <Main>
            <Header>
              <Heading>Personal Information</Heading>
              <Edit>Edit</Edit>
            </Header>

            <FormControl
              sx={{ display: "flex", flexDirection: "row" }}
              variant="outlined"
            >
              <TextField
                disabled
                id="filled-disabled"
                defaultValue=""
                sx={{
                  width: "30ch",
                  paddingRight: "12px",
                  marginBottom: "10px",
                }}
              />
              <TextField
                disabled
                id="filled-disabled"
                defaultValue=""
                sx={{
                  width: "30ch",
                  paddingRight: "12px",
                  marginBottom: "10px",
                }}
              />
            </FormControl>
            <FormControl>
              <Typography
                style={{
                  padding: " 12px 0",
                  fontSize:'14px',
                }}
              >
                Your Gender
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Main>
          <Main>
            <Header>
              <Heading>Email Address</Heading>
              <Edit>Edit</Edit>
            </Header>

            <FormControl
              sx={{ display: "flex", flexDirection: "row" }}
              variant="outlined"
            >
              <TextField
                disabled
                id="filled-disabled"
                defaultValue="amansoni221010@gmail.com"
                sx={{
                  width: "30ch",
                  paddingRight: "12px",
                  marginBottom: "10px",
                }}
              />
            </FormControl>
          </Main>
          <Main>
            <Header>
              <Heading>Mobile Number</Heading>
              <Edit>Edit</Edit>
            </Header>

            <FormControl
              sx={{ display: "flex", flexDirection: "row" }}
              variant="outlined"
            >
              <TextField
                disabled
                id="filled-disabled"
                defaultValue="+919473740017"
                sx={{
                  width: "30ch",
                  paddingRight: "12px",
                  marginBottom: "10px",
                }}
              />
            </FormControl>
          </Main>

          <Main>
            <Header>
              <Heading>FAQS</Heading>
            </Header>
            <Box>
              <FaqHeading>
                What happens when I update my email address (or mobile number)?
              </FaqHeading>
              <FaqPara>
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </FaqPara>
              <FaqHeading>
                When will my Flipkart account be updated with the new email
                address (or mobile number)?
              </FaqHeading>
              <FaqPara>
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </FaqPara>
              <FaqHeading>
                What happens to my existing Flipkart account when I update my
                email address (or mobile number)?
              </FaqHeading>
              <FaqPara>
                Updating your email address (or mobile number) doesn't
                invalidate your account. Your account remains fully functional.
                You'll continue seeing your Order history, saved information and
                personal details.
              </FaqPara>
              <FaqHeading>
                Does my Seller account get affected when I update my email
                address?
              </FaqHeading>
              <FaqPara>
                Flipkart has a 'single sign-on' policy. Any changes will reflect
                in your Seller account also.
              </FaqPara>
            </Box>
            <Box>
              <FaqHeading
                style={{
                  color: "#2874f0",
                  cursor: "pointer",
                  paddingTop: "22px",
                }}
              >
                Deactivate Account
              </FaqHeading>
            </Box>
          </Main>
        </Container>
        <Box style={{ position: "relative" }}>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
            alt=""
            style={{
              width: "100%",
            }}
          />

          <Typography
            variant="h4"
            style={{
              top: "30px",
              position: "absolute",
              left: "131px",
              // fontSize: '30px',
              fontWeight: "bolder",
              fontStyle: "italic",
              color: "#830304",
            }}
          >
            SutPitaara
          </Typography>
        </Box>
      </Component>
    </>
  );
};

export default PersonalDetail;
