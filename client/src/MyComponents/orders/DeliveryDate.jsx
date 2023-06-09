
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box, style } from '@mui/system'
import React from 'react'
import RectangleIcon from '@mui/icons-material/Rectangle';
import StarRateIcon from '@mui/icons-material/StarRate';
const Container=styled(Box)`
// margin: 20px;
`
const Component=styled(Box)`
display: flex;
align-items: center;
`

const DeliveryDate = () => {
  return (
    <div>
      <Container>
        <Component >
          <RectangleIcon style={{
                backgroundColor: '#26a541',
                border: '2px solid #26a541',
                height: '7px',
                width: '7px',
                borderRadius: '50%',
                color: '#26a541',
                marginRight: '8px'
          }}/>
        <Typography style={{
          fontSize: '14px',
          fontWeight: '600',
          
        }}>
         Delivered on Jan 15
        </Typography>
        </Component>
        <Typography style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>Your item has been delivered</Typography>
        <Component style={{
          marginTop: '10px'

        }}>
          <StarRateIcon style={{
            // height: '16px',
            width: '18px',
            color: '#830304',
            margin: '0 8px 0 6px',

          }}/>
          <Typography style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#830304',
        
          
        }}>Rate & Review Product</Typography>
        </Component>
      </Container>
    </div>
  )
}

export default DeliveryDate
