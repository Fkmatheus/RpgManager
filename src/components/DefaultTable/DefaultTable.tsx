import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react"
import { DefaultModal } from "../DefaultModal/DefaultModal";

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

      <DefaultModal isOpen={isOpen} itemName={itemName} onClose={onClose}/>
    </>
  );
}

