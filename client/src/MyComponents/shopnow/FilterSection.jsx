import React from "react";
import styled from "styled-components";

const FilterSectionContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Styles for tablet */
    flex-direction: row;

    gap:2rem;
    border-bottom: 1px solid #ccc;
  }
  
  @media screen and (min-width: 480px) and (max-width: 767px) {
    /* Styles for smartphone landscape */
    flex-direction: row;
    border-bottom: 1px solid #ccc;
    gap:2rem;
  }
  
  @media screen and (min-width: 300px) and (max-width: 479px) {
    /* Styles for smartphone portrait */
    flex-direction: row;
    border-bottom: 1px solid #ccc;
    gap:1rem;
  }
`;

const FilterLabel = styled.h2`
  margin-bottom: 10px;
  font-size: 1.2rem;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Styles for tablet */
    font-size: 1rem;
  }
  
  @media screen and (min-width: 480px) and (max-width: 767px) {
    /* Styles for smartphone landscape */
    font-size: 0.9rem;
  }
  
  @media screen and (min-width: 300px) and (max-width: 479px) {
    /* Styles for smartphone portrait */
    font-size: 0.8rem;
  }
`;

const Dropdown = styled.select`
  width: 18rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 0.9rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Styles for tablet */
    width: 10rem;
  }
  
  @media screen and (min-width: 480px) and (max-width: 767px) {
    /* Styles for smartphone landscape */
    width: 5.5rem;
    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;
  }
  
  @media screen and (min-width: 300px) and (max-width: 479px) {
    /* Styles for smartphone portrait */
    width: 4.5rem;
    padding: 0.3rem 0.5rem;
    font-size: 0.7rem;
  }
`;

const Option = styled.option`
  font-size: 14px;
`;

const FilterSection = () => {
  return (
    <FilterSectionContainer>
      {/* Price Range Filter */}
      <div>
        <FilterLabel>Price Range</FilterLabel>
        <Dropdown>
          <Option value="">All</Option>
          <Option value="0-50">$0 - $50</Option>
          <Option value="51-100">$51 - $100</Option>
          <Option value="101-200">$101 - $200</Option>
        </Dropdown>
      </div>

      {/* Colors Filter */}
      <div>
        <FilterLabel>Colors</FilterLabel>
        <Dropdown>
          <Option value="">All</Option>
          <Option value="red">Red</Option>
          <Option value="blue">Blue</Option>
          <Option value="green">Green</Option>
        </Dropdown>
      </div>

      {/* Category Filter */}
      <div>
        <FilterLabel>Category</FilterLabel>
        <Dropdown>
          <Option value="">All</Option>
          <Option value="clothing">Clothing</Option>
          <Option value="shoes">Shoes</Option>
          <Option value="accessories">Accessories</Option>
        </Dropdown>
      </div>

      {/* Fabrics Filter */}
      <div>
        <FilterLabel>Fabrics</FilterLabel>
        <Dropdown>
          <Option value="">All</Option>
          <Option value="cotton">Cotton</Option>
          <Option value="silk">Silk</Option>
          <Option value="wool">Wool</Option>
        </Dropdown>
      </div>
    </FilterSectionContainer>
  );
};

export default FilterSection;
