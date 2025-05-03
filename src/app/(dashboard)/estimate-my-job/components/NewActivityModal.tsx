"use client";

import CustomButton from "@/lib/components/CustomButton";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useEffect } from "react";

interface NewActivityModalProps {
  onActivityAdded: (activity: {
    worksType?: string;
    quality?: string;
    squareMeters?: number;
    linealMeters?: number;
    cost: number;
  }) => void;
}

const WORKS_TYPES = [
  "New Build",
  "Plastering and Painting",
  "Addition",
  "Deck",
  "Fence",
  "Shed / Outbuilding",
  "Retaining Wall",
  "Kitchen",
  "Bathroom",
  "Floor Coverings",
  "Beams",
];

const QUALITY_OPTIONS = [
  { value: "Basic", label: "Basic" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Architectural", label: "Architectural" },
];

const BASE_COSTS: Record<string, number> = {
  "New Build": 2500,
  "Plastering and Painting": 100,
  "Addition": 3000,
  "Deck": 500,
  "Fence": 150,
  "Shed / Outbuilding": 2500,
  "Retaining Wall": 800,
  "Kitchen": 5000,
  "Bathroom": 4000,
  "Floor Coverings": 300,
  "Beams": 1000,
  "Tiling": 100
};

const QualityExplanations = () => (
  <Box mt={4} fontSize="sm">
    <Text fontWeight="bold" mb={1}>
      Quality Definitions:
    </Text>
    <Text>
      Basic: Standard, cost-effective materials
      and finishes. Meets minimum building code requirements.
    </Text>
    <Text>
      Intermediate: Mid-range quality materials
      and finishes. Improved durability and aesthetics.
    </Text>
    <Text>
      Architectural: High-end, premium materials
      and finishes. Focus on design, quality, and longevity.
    </Text>
  </Box>
);

const NewActivityModal: React.FC<NewActivityModalProps> = ({
  onActivityAdded,
}) => {
  const modal = useDisclosure();
  const [worksType, setWorksType] = useState<string | undefined>(undefined);
  const [quality, setQuality] = useState<string>("Basic");
  const [squareMeters, setSquareMeters] = useState<number | undefined>(undefined);
  const [linealMeters, setLinealMeters] = useState<number | undefined>(undefined);
  const [calculationResult, setCalculationResult] = useState<number | null>(null);
  const isLinealMetersEnabled = worksType === "Fence" || worksType === "Beams";
  const isSquareMetersEnabled =
    worksType !== "Fence" &&
    worksType !== "Beams" &&
    worksType !== "Kitchen" &&
    worksType !== "Bathroom";
  const [isCalculateDisabled, setIsCalculateDisabled] = useState(true);

  const handleCalculate = () => {
    let baseCostPerSquareMeter = BASE_COSTS[worksType!] || 0;

    if (worksType === "Kitchen" || worksType === "Bathroom") {
      setSquareMeters(undefined);
      setLinealMeters(undefined);
    } else if (worksType === "Beams") {
      setSquareMeters(undefined);
    }

    let qualityMultiplier = 1;
    if (quality === "Intermediate") {
      qualityMultiplier = 2;
    } else if (quality === "Architectural") {
      qualityMultiplier = 3;
    }

    let totalCost = 0;
    if (isSquareMetersEnabled && squareMeters !== undefined) {
      totalCost += squareMeters * baseCostPerSquareMeter * qualityMultiplier;
    }
    if (isLinealMetersEnabled && linealMeters !== undefined) {
      totalCost += linealMeters * baseCostPerSquareMeter * qualityMultiplier;
    }

    setCalculationResult(totalCost);
  };

  const handleSubmitActivity = () => {
    if (calculationResult !== null) {
      onActivityAdded({
        worksType,
        quality,
        squareMeters,
        linealMeters,
        cost: calculationResult,
      });
      modal.onClose();
      resetForm();
    } else {
      // Optionally provide feedback to the user if calculation hasn't been done
      alert("Please calculate the cost before submitting.");
    }
  };

  const closeModal = () => {
    modal.onClose();
    resetForm();
  };

  const resetForm = () => {
    setWorksType(undefined);
    setQuality("Basic");
    setSquareMeters(undefined);
    setLinealMeters(undefined);
    setCalculationResult(null);
  };

  useEffect(() => {
    setLinealMeters(undefined);
    setSquareMeters(undefined);
    setCalculationResult(null);
  }, [worksType]);

  useEffect(() => {
    const isSquareMetersValid =
      !isSquareMetersEnabled || (squareMeters !== undefined && squareMeters > 0);
    const isLinealMetersValid =
      !isLinealMetersEnabled || (linealMeters !== undefined && linealMeters > 0);

    setIsCalculateDisabled(
      !worksType ||
        !quality ||
        !isSquareMetersValid ||
        !isLinealMetersValid
    );
  }, [
    worksType,
    quality,
    squareMeters,
    linealMeters,
    isSquareMetersEnabled,
    isLinealMetersEnabled,
  ]);

  const handleSquareMetersChange = (valueString: string, valueNumber?: number) => {
    const newValue =
      valueNumber === undefined ? undefined : Math.max(0, valueNumber); // Ensure not negative
    setSquareMeters(newValue);
  };

  const handleLinealMetersChange = (valueString: string, valueNumber?: number) => {
    const newValue =
      valueNumber === undefined ? undefined : Math.max(0, valueNumber); // Ensure not negative
    setLinealMeters(newValue);
  };

  return (
    <>
      <Box position="fixed" bottom={20} right={5}>
        <CustomButton onClick={modal.onOpen}>+ Add A Task</CustomButton>
      </Box>
      <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add A Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={4}>
              <FormControl isRequired>
                <FormLabel>Works Type</FormLabel>
                <Select
                  placeholder="Select option"
                  value={worksType}
                  onChange={(e) => setWorksType(e.target.value)}
                >
                  {WORKS_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Quality</FormLabel>
                <Select
                  placeholder="Select option"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                >
                  {QUALITY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired isDisabled={!isSquareMetersEnabled}>
                <FormLabel>Square Meters (m²)</FormLabel>
                <NumberInput
                  value={squareMeters}
                  min={0}
                  onChange={(valueString, valueNumber) =>
                    setSquareMeters(valueNumber)
                  }
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isRequired isDisabled={!isLinealMetersEnabled}>
                <FormLabel>Lineal Meters (m)</FormLabel>
                <NumberInput
                  value={linealMeters}
                  min={0}
                  onChange={(valueString, valueNumber) =>
                    setLinealMeters(valueNumber)
                  }
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Stack>
            
            <QualityExplanations />
            <Stack pt={5}>
              <Divider/>
              
                
                <Text fontWeight="bold">Estimated Cost: </Text>
  
                {calculationResult !== null && (
                  <Box>${calculationResult.toFixed(2)}</Box>
                )}
              <Divider/>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Stack w="full">
              <Flex>
                <CustomButton
                  w="full"
                  onClick={closeModal}
                  leftIcon={<Icon icon="mdi:close" height={20} />}
                >
                  Cancel
                </CustomButton>
                <Box w={10} />
                <CustomButton
                  w="full"
                  leftIcon={
                    <Icon icon="flat-color-icons:calculator" height={20} />
                  }
                  onClick={handleCalculate}
                  isDisabled={isCalculateDisabled}
                >
                  Calculate
                </CustomButton>
              </Flex>
              <Box h={1} />
              <CustomButton
                onClick={handleSubmitActivity}
                isDisabled={calculationResult === null}
                w="100%"
                leftIcon={<Icon icon="mdi:plus" height={20} />}
              >
                Add Task
              </CustomButton>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewActivityModal;

