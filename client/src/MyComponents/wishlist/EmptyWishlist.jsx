import { Typography, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #fff;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;



const Image = styled('img')({
    width: '15%'
});


const EmptyWishlist = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        <>
        <Component>
            <Container>
                <Image src={imgurl} />
                <Typography>Your wishlist is empty!</Typography>
                <Link to="/" style={{textDecoration:"none", color:"#D20000"}}> 
                    <Typography component="span">
                        <h3>Add items to it now.</h3>
                    </Typography>
                </Link>
            </Container>
        </Component>
        </>
    )
}

export default EmptyWishlist;