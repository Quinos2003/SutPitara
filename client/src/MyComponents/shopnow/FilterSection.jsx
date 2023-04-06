// import React from 'react'

// const FilterSection = () => {
//   return (
//     <div>
//       this is a filter section
//     </div>
//   )
// }

// export default FilterSection

import { useState } from "react";
import { Rating } from "react-simple-star-rating";
// import './FilterSection.css'
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import * as React from 'react';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

let tokenParse = [];

const SearchBar=styled(Box)`
display: flex;
    text-align: center;
    background-color: white;
    border-radius: 3px;`

    const Input=styled('input')`
    border: none;
    outline: none;
    width: 36vw;
    padding: 10px 15px;
    border-radius: 3px;
    `
const FilterSection = ({ applyFilter }) => {
  const [price, setPrice] = useState({
    minprice: "",
    maxprice: "",
  });

  const { minprice, maxprice } = price;
  const [rating, setRating] = useState("");
  const [condition, setCondition] = useState("");

  const handlePrice = (e) =>
    setPrice({ ...price, [e.target.name]: e.target.value });

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleCondition = (cond) => setCondition(cond);

  const resetFilter = () => {
    setPrice({
      minprice: "",
      maxprice: "",
    });
    setRating("");
    setCondition("");
    applyFilter("", "", "", "");
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box classname="container">
        <h3 style={{
          fontFamily: 'PT Serif',
          fontSize: '25px',
          color: '#830304',
          fontWeight: 'bolder',
        }}>Filter</h3>
      <Box>
        <SearchBar className="search-bar">
        <SearchIcon style={{
            color: '#830304',
            padding: '5px',
           fontSize: '25px',
          }} />
          <Input type="text" name="" id="" placeholder="Search for products" />
         
        </SearchBar>
      </Box>
      <Box>
        <h3 style={{
          fontFamily: 'PT Serif',
        }}>Categories</h3>
      <Box sx={{ minWidth: 120 }} style={{
        background: 'white',
      }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{
          fontFamily: 'PT Serif',
        }}>Banarasi Silk Saree</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Box>
    <Box>
        <h3 style={{
          fontFamily: 'PT Serif',
        }}>Types</h3>
      <Box sx={{ minWidth: 120 }}style={{
        background: 'white',
      }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{
          fontFamily: 'PT Serif',
        }}>Saree</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Box>
    <Box>
        <h3 style={{
          fontFamily: 'PT Serif',
        }}>Prices</h3>
      <Box sx={{ minWidth: 120 }}style={{
        background: 'white',
      }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{
          fontFamily: 'PT Serif',
        }}>20k-40k</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>40k-60k</MenuItem>
          <MenuItem value={20}>60k-80k</MenuItem>
          <MenuItem value={30}>80k-90k</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Box>
    <Box>
        <h3 style={{
          fontFamily: 'PT Serif',
        }}>Color</h3>
      <Box sx={{ minWidth: 120 }} style={{
        background: 'white',
      }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{
          fontFamily: 'PT Serif',
        }}>Blue</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Black</MenuItem>
          <MenuItem value={20}>Red</MenuItem>
          <MenuItem value={30}>Yellow</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Box>
    </Box>
  );
};

export default FilterSection;
