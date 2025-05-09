import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';

interface WorkingHoursProps {
}

const WorkingHours: React.FC<WorkingHoursProps> = () => {
    return (
        <>

        <Heading size="md">Our Hours:</Heading>
            <SimpleGrid columns={2}>
                <Box fontWeight="bold">Monday</Box><Box>7:30am to 5:00pm</Box>
                <Box fontWeight="bold">Tuesday</Box><Box>7:30am to 5:00pm</Box>
                <Box fontWeight="bold">Wednesday</Box><Box>7:30am to 5:00pm</Box>
                <Box fontWeight="bold">Thursday</Box><Box>7:30am to 5:00pm</Box>
                <Box fontWeight="bold">Friday</Box><Box>7:30am to 4:00pm</Box>
            </SimpleGrid>
        </>
    );
};

export default WorkingHours;