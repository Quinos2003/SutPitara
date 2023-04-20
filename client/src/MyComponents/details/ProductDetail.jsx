import {
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  styled,
  TextField,
} from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";
import { ShoppingCart as Cart } from "@mui/icons-material";
import GroupedButton from "./GroupButton";
import { useNavigate } from "react-router-dom";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;
const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const AddBuyButton = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  // const { id } = product;

  // const [quantity, setQuantity] = useState(1);
  // const dispatch = useDispatch();
  const addItemToCart = () => {
    // dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  const buyNow = (e) => {
    e.preventDefault();
    // if(amount === ""){
    // alert("please enter amount");
    // }else{
    var options = {
      key: "rzp_test_L0OE3OK4mfOEtJ",
      key_secret: "w4qnWCdwJRcRaC1Dp8QSMMVw",
      amount: 500,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Velmurugan",
        email: "mvel1620r@gmail.com",
        contact: "7904425033",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };
  //   }
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      {/* <Typography>Available offers</Typography> */}
      <AddBuyButton>
        <Box style={{ display: "flex", marginTop: "20px" }}>
          <GroupedButton />
          <StyledButton
            onClick={() => addItemToCart()}
            style={{ background: "#830304" }}
            variant="contained"
          >
            <Cart />
            Add to Cart
          </StyledButton>
        </Box>
        <Box style={{ display: "flex", marginTop: "20px" }}>
          <StyledButton
            onClick={buyNow}
            style={{ background: "#830304" }}
            variant="contained"
          >
            Buy It Now
          </StyledButton>
        </Box>
      </AddBuyButton>

      <Box style={{ marginTop: '20px'}}>
        <Typography variant="h6">Check Delivery:</Typography>
        <Box style={{ display: "flex" }}>
          <Box>
            <FormControl sx={{ width: "25ch" }}>
              <OutlinedInput placeholder="Postcode" />
              {/* <MyFormHelperText /> */}
            </FormControl>
          </Box>
          <Button style={{ background: "#830304" }} variant="contained">
            Check
          </Button>
        </Box>
      </Box>

      <SmallText>
        <Typography>
          <StyledBadge />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </Typography>
        <Typography>
          <StyledBadge />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </Typography>
        <Typography>
          <StyledBadge />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          {/* <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹329</Typography>
            </TableCell>
          </ColumnText> */}
          {/* <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow> */}
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            {/* <TableCell>{product.description}</TableCell> */}
            <TableCell>
              This electric kettle from Pigeon will soon become a travelers best
              friend, a hostelite saviour and an answer to all the midnight
              cravings. With this handy appliance, you can boil water and use it
              to make instant noodles, packet soup, coffee and green tea.',
              discount: 'Extra 10% Off
            </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
