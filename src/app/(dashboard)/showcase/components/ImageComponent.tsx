import {
  Box,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import ImageModal from "./ImageModal";
import { Icon } from "@iconify/react";

interface ImageComponentProps {
  image: string;
  imageDescription: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  image,
  imageDescription,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Image src={image}/>
        <IconButton
          variant="ghost"
          onClick={onOpen}
          position="relative"
          bottom={10}
          right={0}
          aria-label={""}
          color="orange.500"
          _dark={{color: "orange.300"}}
        >
          <Icon icon="mdi:zoom-in" height={20} />
        </IconButton>
      </Box>

      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        image={image}
        imageDescription={imageDescription}
      />
    </>
  );
};

export default ImageComponent;
