import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import type { Gem } from "../../types/Gem";
import { useState, useEffect } from "react";
import { GemsService } from "../../services/gemsService";
import type { artObj } from "../../types/ArtObj";
import { ObjArtService } from "../../services/artObjService";
import { MagicItensService } from "../../services/magicItensService";

interface DefaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  tableName: string;
  id: number | undefined;
}

export function DefaultModal({ id, isOpen, onClose, itemName, tableName }: DefaultModalProps) {
  const [result, setResult] = useState<Gem | artObj | null>(null);
  const imagePath = `/img/${tableName}/${result?.id}.png`;

  useEffect(() => {
    async function searchEtc() {

      switch (tableName) {
        case "Gemas [10po]":
          const data = await GemsService.search10(id);
          setResult(data);
          break

        case "Gemas [50po]":
          const data50 = await GemsService.search50(id);
          setResult(data50);
          break

        case "Gemas [100po]":
          const data100 = await GemsService.search100(id);
          setResult(data100);
          break

        case "Gemas [500po]":
          const data500 = await GemsService.search500(id);
          setResult(data500);
          break

        case "Gemas [1000po]":
          const data1000 = await GemsService.search1000(id);
          setResult(data1000);
          break

        case "Gemas [5000po]":
          const data5000 = await GemsService.search5000(id);
          setResult(data5000);
          break

        case "Objetos de arte [25po]":
          const dataArt25 = await ObjArtService.search25(id);
          setResult(dataArt25);
          break

        case "Objetos de arte [250po]":
          const dataArt250 = await ObjArtService.search250(id);
          setResult(dataArt250);
          break

        case "Objetos de arte [750po]":
          const dataArt750 = await ObjArtService.search750(id);
          setResult(dataArt750);
          break

        case "Objetos de arte [2500po]":
          const dataArt2500 = await ObjArtService.search2500(id);
          setResult(dataArt2500);
          break

        case "Objetos de arte [7500po]":
          const dataArt7500 = await ObjArtService.search7500(id);
          setResult(dataArt7500);
          break

        case "Tabela de item mágico A":
          const dataMagicA = await MagicItensService.searchA(id);
          setResult(dataMagicA);
          break

        case "Tabela de item mágico B":
          const dataMagicB = await MagicItensService.searchB(id);
          setResult(dataMagicB);
          break

        case "Tabela de item mágico C":
          const dataMagicC = await MagicItensService.searchC(id);
          setResult(dataMagicC);
          break

        case "Tabela de item mágico D":
          const dataMagicD = await MagicItensService.searchD(id);
          setResult(dataMagicD);
          break

        case "Tabela de item mágico E":
          const dataMagicE = await MagicItensService.searchE(id);
          setResult(dataMagicE);
          break

        case "Tabela de item mágico F":
          const dataMagicF = await MagicItensService.searchF(id);
          setResult(dataMagicF);
          break

        case "Tabela de item mágico G":
          const dataMagicG = await MagicItensService.searchG(id);
          setResult(dataMagicG);
          break

        case "Tabela de item mágico H":
          const dataMagicH = await MagicItensService.searchH(id);
          setResult(dataMagicH);
          break

        case "Tabela de item mágico I":
          const dataMagicI = await MagicItensService.searchI(id);
          setResult(dataMagicI);
          break
      }

    }

    if (isOpen) {
      searchEtc();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent fontFamily={"Cinzel"}>
        <ModalHeader backgroundColor={"#111111"} fontSize="20px"
          fontWeight="bold"
          color="white"
          letterSpacing="1px">
          {itemName}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody
          fontSize={14}
          fontFamily={"Cinzel"}
          backgroundColor={"#161616"}
          color={"gray.300"}
        >
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
          // justifyContent={"space-between"}
          >
            <Box>
              <img width={"550px"} src={imagePath} alt={result?.title} />
            </Box>
            <Box
              width={"100%"}
              height={"100%"}
              overflowY="auto"
              maxH="140px"
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              marginTop={5}
            >
              <Text letterSpacing="1px">
                {result?.description}
              </Text>
            </Box>
          </Box>
        </ModalBody>

        <ModalFooter backgroundColor={"#161616"}>
          <Button
            _hover={{ fontWeight: "bold", color: "tomato" }}
            variant="ghost"
            mr={3}
            onClick={onClose}
            fontWeight={"bold"}
            color={"white"}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
