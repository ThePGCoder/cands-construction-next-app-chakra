"use client";

import CustomButton from "@/lib/components/CustomButton";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import NewActivityModal from "./components/NewActivityModal";
import CustomCard from "@/lib/components/CustomCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";


interface Activity {
  worksType?: string;
  quality?: string;
  squareMeters?: number;
  linealMeters?: number;
  cost: number;
}

interface EstimateMyJobProps {}

const EstimateMyJob: React.FC<EstimateMyJobProps> = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleAddActivity = (newActivity: Activity) => {
    setActivities([...activities, newActivity]);
  };

  const handleDeleteActivity = (indexToDelete: number) => {
    setActivities(activities.filter((_, index) => index !== indexToDelete));
  };

  const grandTotal = activities.reduce(
    (sum, activity) => sum + activity.cost,
    0
  );
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  
    useEffect(() => {
      changeActiveRoute("Estimate My Job");
    }, []);

  return (
    <VStack pt={10} gap={5} px={12} pb={100}>
      <Heading size="md">Estimate My Job</Heading>
      <Box>Begin by entering some tasks one at a time, renovations can be made up of many tasks.</Box>
      <Flex>
        Tasks:&nbsp;
        {activities.length}
      </Flex>
      <NewActivityModal onActivityAdded={handleAddActivity} />

      <Stack>
        {activities.length > 0 && (
          <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 3 }} gap={4}>
            {activities.map((activity, index) => (
              <Box key={index} minW={300} position="relative">
                <CustomCard>
                  <Flex justify="space-between" align="flex-start">
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="bold">Task {index + 1}</Text>
                      <Text>Works Type: {activity.worksType || "N/A"}</Text>
                      <Text>Quality: {activity.quality || "N/A"}</Text>
                      {activity.squareMeters !== undefined && (
                        <Text>Square Meters: {activity.squareMeters} m²</Text>
                      )}
                      {activity.linealMeters !== undefined && (
                        <Text>Lineal Meters: {activity.linealMeters} m</Text>
                      )}
                      <Text fontWeight="bold">
                        Cost: ${activity.cost.toFixed(2)}
                      </Text>
                    </VStack>
                    <IconButton
                      icon={<Box color="red.500" _dark={{color: "red.300"}}><Icon icon="mdi:trash" height={20} /></Box>}
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteActivity(index)}
                      aria-label="Delete Activity"
                      position="absolute" // Use absolute positioning
                      bottom="0.5rem"
                      right="0.5rem"
                    />
                  </Flex>
                </CustomCard>
              </Box>
            ))}
          </SimpleGrid>
        )}
        <Box pt={6}>
          <Divider />
          <Flex justifyContent="space-between" mt="1px" p={4} fontWeight="bold">
            <Box>Total:</Box> ${grandTotal.toFixed(2)}
          </Flex>
          <Divider />
        </Box>
      </Stack>
    </VStack>
  );
};

export default EstimateMyJob;

