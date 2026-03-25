import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Text,
  Box
} from "@chakra-ui/react";
import { useState } from "react";
import imgPocaoGigante from "../../img/pocaoGigante.png";

interface TableItem {
  id: number;
  dice: number;
  name: string;
}

interface TableItemString {
  id: number;
  dice: string;
  name: string;
}

interface DefaultTableProps {
  dice: string;
  type: string;
  data: TableItem[] | TableItemString[];
  fontSize?: number;
}

export function DefaultTable({ dice, type, data, fontSize }: DefaultTableProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemName, setItemName] = useState("");

  function handleOpenModal(item: string) {
    setItemName(item);
    onOpen();
  }
  return (
    <>
      <TableContainer>
        <Table size="sm" variant="unstyled" color={"white"} backgroundColor={"#161616"}>
          <Thead>
            <Tr>
              <Th width={"20px"} textAlign={"center"} borderRight={"solid black 1px"}>{dice}</Th>
              <Th>{type}</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.map((item) => (
              <Tr key={item.id} onClick={() => handleOpenModal(item.name)} cursor={"pointer"} _hover={{ backgroundColor: "#272727", fontWeight: "bold", color: "tomato" }}>
                <Td fontSize={fontSize ? fontSize : 13} fontWeight={"bold"} textAlign={"center"} borderRight={"solid black 1px"}>{item.dice}</Td>
                <Td fontSize={fontSize ? fontSize : 13} whiteSpace="normal" maxW="200px">{item.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent fontFamily={'Cinzel'}>
          <ModalHeader color={"white"} backgroundColor={"#111111"}>{itemName}</ModalHeader>
          <ModalCloseButton />

          <ModalBody fontSize={14} fontFamily={'Cinzel'} backgroundColor={"#161616"} color={"gray.300"}>
            <Box width={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
              <Box width={"46%"} border={"solid 1px black"} bgImage={`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${imgPocaoGigante})`}
                bgSize={"cover"}
                bgPosition={"center"}
                bgRepeat={"no-repeat"}></Box>
              <Box width={"46%"} height={"40vh"} overflowY="auto"
                sx={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}> <Text>Quando bebe esta poção, seu valor de Força muda por 1
                  hora. O tipo de gigante determinar o valor (veja na tabela
                  abaixo). A poção não produz efeito em você caso sua Força
                  seja igual ou maior que o valor dela.
                  O líquido transparente dessa poção tem um pedaço de
                  unha de um gigante do tipo apropriado flutuando nele. A
                  poção de força do gigante do gelo e a poção de força do
                  gigante de pedra têm o mesmo efeito.</Text>  </Box>
            </Box>
          </ModalBody>

          <ModalFooter backgroundColor={"#161616"}>
            <Button _hover={{ fontWeight: "bold", color: "tomato" }} variant="ghost" mr={3} onClick={onClose} fontWeight={"bold"} color={"white"}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

