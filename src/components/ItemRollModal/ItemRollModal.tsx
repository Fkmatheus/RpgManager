import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Text, Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import type { Gem } from "../../types/Gem";
import { GemsService } from "../../services/gemsService";
import { FaDiceD20 } from 'react-icons/fa';

interface ItemRollModal {
  isOpen: boolean;
  onClose: () => void;
  tableName: string;
  loading: boolean;
  intDice: number;
}

export function ItemRollModal({ intDice, isOpen, onClose, tableName, loading }: ItemRollModal) {
  const [result, setResult] = useState<Gem | null>(null);
  const [diceRoll, setDiceRoll] = useState<number>(1);
  const imagePath = `/img/${tableName}/${result?.id}.png`;
  console.log(imagePath);

  useEffect(() => {
    async function loadRoll() {
      const roll = Math.floor(Math.random() * intDice) + 1;
      setDiceRoll(roll);

      switch (tableName) {
        case "Gemas [10po]":
          const data = await GemsService.roll10(roll);
          setResult(data);
          break

        case "Gemas [50po]":
          const data50 = await GemsService.roll50(roll);
          setResult(data50);
          break

        case "Gemas [100po]":
          const data100 = await GemsService.roll100(roll);
          setResult(data100);
          break

        case "Gemas [500po]":
          const data500 = await GemsService.roll500(roll);
          setResult(data500);
          break

        case "Gemas [1000po]":
          const data1000 = await GemsService.roll1000(roll);
          setResult(data1000);
          break

        case "Gemas [5000po]":
          const data5000 = await GemsService.roll5000(roll);
          setResult(data5000);
          break
      }

    }

    if (isOpen) {
      loadRoll();
    }
  }, [isOpen]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontFamily={"Cinzel"}
          color={"white"}
          backgroundColor={"#111111"}
        >
          {tableName}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody fontFamily={"Cinzel"} fontSize={14} backgroundColor={"#161616"} color={"gray.300"}>
          {loading ? (
            <Spinner
              size="xl"
              thickness="6px"
              speed="0.7s"
              color="tomato"
              emptyColor="white"
            />
          ) : (
            <>
              <Box display={"flex"} flexDirection={'row'} gap={5}>
                <Flex
                  width="50%"
                  justify="center"
                  align="center"
                >
                  <img width={"400px"} src={imagePath} alt={result?.title} />
                </Flex>
                <Flex flexDirection={'column'} gap={5} width={"50%"} overflowY="auto" sx={{
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}>
                  <Box color={"gray.200"} fontSize={18} fontStyle={'bold'}>
                    <Text
                      fontSize="24px"
                      fontWeight="bold"
                      color="tomato"
                      letterSpacing="1px"
                    >
                      {result?.title}
                    </Text>
                  </Box>
                  <Box>
                    <Box>
                      <Text>{result?.description}</Text>
                    </Box>

                    <Box
                      position="relative"
                      width="120px"
                      height="120px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      marginLeft={300}
                    >
                      <FaDiceD20
                        size={60}
                        color="#2d2d2d"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                        }}
                      />

                      <Text
                        fontSize="32px"
                        fontWeight="bold"
                        color="tomato"
                        zIndex={2}
                        textShadow="0 0 12px rgba(255,99,71,0.7)"
                      >
                        {diceRoll}
                      </Text>
                    </Box>

                  </Box>
                </Flex>
              </Box>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
