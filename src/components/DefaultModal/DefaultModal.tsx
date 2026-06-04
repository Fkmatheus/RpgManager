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

interface DefaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  id: number | undefined;
}

export function DefaultModal({id, isOpen, onClose, itemName }: DefaultModalProps) {
  const [result, setResult] = useState<Gem | null>(null);

  useEffect(() => {
      async function searchGem() {
        const data = await GemsService.search10(id);
        setResult(data);
      
      }
  
      if (isOpen) {
        searchGem();
      }
    }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent fontFamily={"Cinzel"}>
        <ModalHeader backgroundColor={"#111111"} fontSize="18px"
          fontWeight="bold"
          color="tomato"
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
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box
              width={"100%"}
              height={"100%"}
              overflowY="auto"
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              <Text>
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
