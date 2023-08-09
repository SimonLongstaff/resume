import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

interface ImageGalleryProps {
    images: string[];
}

const ImageGalleryContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
`;

const GalleryImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: opacity 0.5s ease-in-out;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
`;

const Dot = styled.span.attrs<{ isActive: boolean }>((props) => ({
    isActive: props.isActive,
}))`
  width: 10px;
  height: 10px;
  background-color: ${({isActive}) => (isActive ? '#008cff' : '#ccc')};
  border-radius: 50%;
  display: inline-block;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  max-height: 90%;
  text-align: center;
`;

const ModalArrows = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ArrowButton = styled.button`
  background: rgb(31 41 55);
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: white;
  padding: 10px;
  transition: color 0.3s ease-in-out;
  outline: none;

  &:hover {
    rgb(26 32 44);
  }
`;

const CloseButton = styled.button`
  margin-top: auto;
  background: rgba(150, 0, 0, 1);
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;
  padding: 10px;
  transition: color 0.3s ease-in-out;
  outline: none;

  &:hover {
    background: rgba(170, 0, 0, 1);
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: calc(100% - 80px); /* Account for space taken by arrows and close button */
  object-fit: contain;
`;

const ImageGallery: React.FC<ImageGalleryProps> = ({images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!showModal) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000); // Change image every 5 seconds
        }

        return () => {
            clearInterval(interval);
        };
    }, [images, showModal]);

    const handleImageClick = () => {
        setShowModal(true);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <ImageGalleryContainer onClick={handleImageClick}>
                <GalleryImage src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`}/>
                <DotsContainer>
                    {images.map((_, index) => (
                        <Dot key={index} isActive={index === currentImageIndex}/>
                    ))}
                </DotsContainer>
            </ImageGalleryContainer>

            {showModal && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalArrows>
                            <ArrowButton onClick={handlePrevImage}>&larr;</ArrowButton>
                            <ArrowButton onClick={handleNextImage}>&rarr;</ArrowButton>
                        </ModalArrows>
                        <ModalImage src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`}/>
                        <CloseButton onClick={handleCloseModal}>Close</CloseButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};

export default ImageGallery;
