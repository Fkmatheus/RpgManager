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
import type { TableItemDefault } from "../../types/TableItemDefault"

interface DefaultTableProps {
  dice: string;
  type: string;
  data: TableItemDefault[];
  tableName: string
  fontSize?: number;
}

export function DefaultTable({tableName, dice, type, data, fontSize }: DefaultTableProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState<number|undefined>(undefined);

  function handleOpenModal(item: string, id: number) {
    setItemName(item);
    setItemId(id);
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
              <Tr key={item.id} onClick={() => handleOpenModal(item.title, item.id)} cursor={"pointer"} _hover={{ backgroundColor: "#272727", fontWeight: "bold", color: "tomato" }}>
                <Td fontSize={fontSize ? fontSize : 13} fontWeight={"bold"} textAlign={"center"} borderRight={"solid black 1px"}>{item.dice}</Td>
                <Td fontSize={fontSize ? fontSize : 13} whiteSpace="normal" maxW="200px">{item.title}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <DefaultModal tableName={tableName} id={itemId} isOpen={isOpen} itemName={itemName} onClose={onClose}/>
    </>
  );
}

