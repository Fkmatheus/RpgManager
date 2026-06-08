import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Text, Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import type { Gem } from "../../types/Gem";
import { GemsService } from "../../services/gemsService";
import { ObjArtService } from "../../services/artObjService";
import { FaDiceD20 } from 'react-icons/fa';
import { MagicItensService } from '../../services/magicItensService';

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

        case "Objetos de arte [25po]":
          const dataArt25 = await ObjArtService.roll25(roll);
          setResult(dataArt25);
          break

        case "Objetos de arte [250po]":
          const dataArt250 = await ObjArtService.roll250(roll);
          setResult(dataArt250);
          break

        case "Objetos de arte [750po]":
          const dataArt750 = await ObjArtService.roll750(roll);
          setResult(dataArt750);
          break

        case "Objetos de arte [2500po]":
          const dataArt2500 = await ObjArtService.roll2500(roll);
          setResult(dataArt2500);
          break

        case "Objetos de arte [7500po]":
          const dataArt7500 = await ObjArtService.roll7500(roll);
          setResult(dataArt7500);
          break

        case "Tabela de item mágico A":
          const dataMagicA = await MagicItensService.rollA(roll);
          setResult(dataMagicA);
          break

        case "Tabela de item mágico B":
          const dataMagicB = await MagicItensService.rollB(roll);
          setResult(dataMagicB);
          break

        case "Tabela de item mágico C":
          const dataMagicC = await MagicItensService.rollC(roll);
          setResult(dataMagicC);
          break

        case "Tabela de item mágico D":
          const dataMagicD = await MagicItensService.rollD(roll);
          setResult(dataMagicD);
          break

        case "Tabela de item mágico E":
          const dataMagicE = await MagicItensService.rollE(roll);
          setResult(dataMagicE);
          break

        case "Tabela de item mágico F":
          const dataMagicF = await MagicItensService.rollF(roll);
          setResult(dataMagicF);
          break

        case "Tabela de item mágico G":
          const dataMagicG = await MagicItensService.rollG(roll);
          setResult(dataMagicG);
          break

        case "Tabela de item mágico H":
          const dataMagicH = await MagicItensService.rollH(roll);
          setResult(dataMagicH);
          break

        case "Tabela de item mágico I":
          const dataMagicI = await MagicItensService.rollI(roll);
          setResult(dataMagicI);
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
                  <Box color={"gray.200"} fontSize={18}>
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
                    <Box
                      maxH="140px"
                      overflowY="auto"
                      css={{
                        "&::-webkit-scrollbar": {
                          display: "none",
                        },
                        "-ms-overflow-style": "none",
                        scrollbarWidth: "none",
                      }}
                      letterSpacing="1px"
                    >
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
