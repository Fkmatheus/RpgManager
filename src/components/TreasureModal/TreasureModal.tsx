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
import type { artObj } from "../../types/ArtObj";
import type { magicItens } from "../../types/MagicItens";
import { SearchAllService } from "../../services/searchAllService";

interface TreasureModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  type: string | undefined;

}

export function TreasureModal({ name, isOpen, onClose, type }: TreasureModalProps) {
  const [result, setResult] = useState<Gem | artObj | magicItens | null>(null);
  const imagePath = `/img/${type == 'gem' ? 'Gemas' : type == 'art' ? 'ObjetosDeArte' : 'ItensMagicos'}/${result?.title}.png`;
  console.log(imagePath);
  useEffect(() => {
    async function searchEtc() {

      switch (type) {
        case "item":
          const dataItem = await SearchAllService.findItemByName(name);
          setResult(dataItem);
          break

        case "gem":
          const dataGem = await SearchAllService.findGemByName(name);
          setResult(dataGem);
          break

        case "art":
          const dataArt = await SearchAllService.findObjByName(name);
          setResult(dataArt);
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
          {name}
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
