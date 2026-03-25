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

import imgPocaoGigante from "../../img/pocaoGigante.png";

interface DefaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
}

export function DefaultModal({ isOpen, onClose, itemName }: DefaultModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent fontFamily={"Cinzel"}>
        <ModalHeader color={"white"} backgroundColor={"#111111"}>
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
              width={"46%"}
              border={"solid 1px black"}
              bgImage={`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${imgPocaoGigante})`}
              bgSize={"cover"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
            ></Box>
            <Box
              width={"46%"}
              height={"40vh"}
              overflowY="auto"
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {" "}
              <Text>
                Quando bebe esta poção, seu valor de Força muda por 1 hora. O
                tipo de gigante determinar o valor (veja na tabela abaixo). A
                poção não produz efeito em você caso sua Força seja igual ou
                maior que o valor dela. O líquido transparente dessa poção tem
                um pedaço de unha de um gigante do tipo apropriado flutuando
                nele. A poção de força do gigante do gelo e a poção de força do
                gigante de pedra têm o mesmo efeito.
              </Text>{" "}
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
