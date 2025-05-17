import { Box, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

interface TiledImageListProps {
    images: {src: string;}[];
}

const TiledImageListProps: React.FC<TiledImageListProps> = ({images}) => {
  
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
      const { isOpen, onOpen, onClose } = useDisclosure();
    
      const columnStyle = useBreakpointValue({
        base: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      });
  
    return (
    <>
    <Box
            css={{
              columnCount: columnStyle,
              columnGap: "4px",
              
            }}
          >
            {images.map((img, i) => (
              <Box
                key={i}
                sx={{
                  breakInside: "avoid",
                  WebkitColumnBreakInside: "avoid",
                  pageBreakInside: "avoid",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSelectedImg(img.src);
                  onOpen();
                }}
              >
                <Image
                  src={img.src}
                  alt={`Image ${i}`}
                  width="100%"
                  display="block"
                  _hover={{ opacity: 0.9 }}
                  pb="4px"
                />
              </Box>
            ))}
          </Box>
    
          <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
            <ModalOverlay />
            <ModalContent bg="transparent" boxShadow="none">
              <ModalCloseButton
                color="white"
                bg="rgba(0,0,0,0.6)"
                _hover={{ bg: "rgba(0,0,0,0.8)" }}
                size="lg"
                top="10px"
                right="10px"
                zIndex={10}
                borderRadius="full"
              />
              <ModalBody p={0}>
                {selectedImg && (
                  <Image
                    src={selectedImg}
                    alt="Selected"
                    width="100%"
                    maxHeight="90vh"
                    objectFit="contain"
                  />
                )}
              </ModalBody>
            </ModalContent>
          </Modal></>
  );
};

export default TiledImageListProps;