import { Box, Link, VStack } from '@chakra-ui/react';

import React from 'react';

interface ContactDetails {
}

const ContactDetails: React.FC<ContactDetails> = () => {
  return (
    <VStack pb={10}>
        <Box>
      Phil Collings{" "}
      <Link href="tel:0221769172" color="blue.500">
        022 176 9172
      </Link>
    </Box>
    
    <Box>
      Kent Schutte{" "}
      <Link href="tel:0274674672" color="blue.500">
        027 467 4672
      </Link>
    </Box>
    <Box>
      Email:{" "}
      <Link href="mailto:admin@cands.co.nz" color="blue.500">
        admin@cands.co.nz
      </Link>
    </Box>
    </VStack>
  );
};

export default ContactDetails;