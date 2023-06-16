import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const images = [
  {
    id: 1,
    src: 'https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMKJSLMA0609_2227e775-4b6c-4f9e-862b-ef825a64e320_900x.jpg?v=1638334658',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: 'https://cdn.shopify.com/s/files/1/0606/5864/7273/products/MicrosoftTeams-image_1080x.jpg?v=1681293460',
    alt: 'Image 2',
  },
  {
    id: 3,
    src: 'https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMKJSLMA0609_2227e775-4b6c-4f9e-862b-ef825a64e320_900x.jpg?v=1638334658',
    alt: 'Image 3',
  },
  {
    id: 4,
    src: 'https://cdn.shopify.com/s/files/1/0606/5864/7273/products/MicrosoftTeams-image_1080x.jpg?v=1681293460',
    alt: 'Image 4',
  },
  // Add more image objects as needed
];


const CarouselContainer = styled.div`
  margin-top: 2rem;
  position: relative;
  display: flex;
  overflow: hidden;
  width: 80%;
  height: 15rem;
  display: flex;
  gap: 1rem;
`;

const CarouselSlide = styled.img`
  width: 90%;
  height: 100%;
  object-fit: contain;
`;

const DotsContainer = styled.ul`
  position: absolute;
  bottom: 10px;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Dot = styled.li`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'black' : 'gray')};
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const ModalContent = styled.img`
  max-width: 90%;
  max-height: 90%;
`;


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const slideCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideCount]);

  const handleSlideClick = (src) => {
    setModalImage(images.find((image) => image.src === src).src);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <CarouselContainer>
        {images.concat(images).map((image) => (
          <CarouselSlide
            key={image.id}
            src={image.src}
            alt={`Slide ${image.id}`}
            onClick={() => handleSlideClick(image.src)}
            style={{
              transform: `translateX(-${currentSlide * (100 / slideCount)}%)`,
              transition: 'transform 1s ease-in-out',
            }}
          />
        ))}

        <DotsContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotsContainer>
      </CarouselContainer>

      {showModal && (
        <ModalContainer onClick={handleModalClose}>
          <ModalContent src={modalImage} alt="Enlarged Image" />
        </ModalContainer>
      )}
    </>
  );
};

export default Carousel;
