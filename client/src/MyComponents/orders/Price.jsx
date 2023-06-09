import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box, style } from '@mui/system'
import React from 'react'

const Container=styled(Box)`
// margin: 20px;
`

const Price = () => {
  return (
    <div>
      <Container>
        <Typography>
        ₹625
        </Typography>
      </Container>
    </div>
  )
}

export default Price
