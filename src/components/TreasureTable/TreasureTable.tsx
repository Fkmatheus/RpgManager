import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react"
import { FONT_SIZE_TABLE } from "../../helpers/globalFont";
import { TreasureModal } from "../TreasureModal/TreasureModal";

// interface DefaultTableProps {
//   dice: string;
//   type: string;
//   data: TableItemDefault[];
//   tableName: string
//   fontSize?: number;
// }

interface TreasureTableProps {
  data: any[];
  type: string | undefined;
  price?: number;
}


export function TreasureTable({ data, type, price }: TreasureTableProps) {

  const [itemName, setItemName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  async function handleOpenModal(name: any) {
    setItemName(name);
    onOpen();
  }

  return (
    <>
      <TableContainer>
        <Table size="sm" variant="unstyled" color={"white"} backgroundColor={"#161616"} borderRadius={"10px"}>
          <Thead>
            <Tr>

              <Th textAlign={"center"} width={"1vh"} color={"tomato"} fontSize={FONT_SIZE_TABLE}>{"Qt"}</Th>
              <Th color={"tomato"} fontSize={FONT_SIZE_TABLE}>{"Item"}</Th>
              {(type == 'gem' || type == 'art') && <Th color={"tomato"} fontSize={FONT_SIZE_TABLE}>{"Preço"}</Th>}


            </Tr>
          </Thead>

          <Tbody>
            {data.map((item) => (
              <Tr key={item.id} onClick={() => handleOpenModal(item.name)} cursor={"pointer"} _hover={{ backgroundColor: "#272727", fontWeight: "bold", color: "tomato" }}>
                <Td fontSize={FONT_SIZE_TABLE} fontWeight={"bold"} textAlign={"center"} borderRight={"solid black 1px"}>{item.quantity}</Td>
                <Td fontSize={FONT_SIZE_TABLE} whiteSpace="normal" maxW="200px">{item.name}</Td>
                {(type == 'gem' || type == 'art') && <Td gap={1} display={"flex"} fontSize={FONT_SIZE_TABLE} whiteSpace="normal" maxW="200px"><Text>{price}</Text><span>PO</span></Td>}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer >

      {/* <DefaultModal tableName={tableName} id={itemId} isOpen={isOpen} itemName={itemName} onClose={onClose} /> */}
      <TreasureModal name={itemName} type={type} isOpen={isOpen} onClose={onClose}  />
    </>
  );
}

