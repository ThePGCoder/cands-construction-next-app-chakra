import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,

  Text
} from "@chakra-ui/react";
import React from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  imageDescription: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image, imageDescription }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={{base: "95%", sm: "85%", md: "65%"}}>
          <ModalHeader/>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} />
            <Text textAlign="center" fontSize="xs">{imageDescription}</Text>
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageModal;
