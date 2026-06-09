import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react"
import { FONT_SIZE_TABLE } from "../../helpers/globalFont";

// interface DefaultTableProps {
//   dice: string;
//   type: string;
//   data: TableItemDefault[];
//   tableName: string
//   fontSize?: number;
// }

interface TreasureTableProps {
  data: any[];
  type?: string;
  price?: number;
}

export function TreasureTable({ data, type, price}: TreasureTableProps) {
  return (
    <>
      <TableContainer>
        <Table size="sm" variant="unstyled" color={"white"} backgroundColor={"#161616"} borderRadius={"10px"}>
          <Thead>
            <Tr>

              <Th textAlign={"center"} width={"1vh"} color={"tomato"} fontSize={FONT_SIZE_TABLE}>{"Qt"}</Th>
              <Th color={"tomato"} fontSize={FONT_SIZE_TABLE}>{"Item"}</Th>
              {type == 'objgem' && <Th color={"tomato"} fontSize={FONT_SIZE_TABLE}>{"Preço"}</Th>}


            </Tr>
          </Thead>

          <Tbody>
            {data.map((item) => (
              <Tr key={item.id} onClick={() => {}} cursor={"pointer"} _hover={{ backgroundColor: "#272727", fontWeight: "bold", color: "tomato" }}>
                <Td fontSize={FONT_SIZE_TABLE} fontWeight={"bold"} textAlign={"center"} borderRight={"solid black 1px"}>{item.quantity}</Td>
                <Td fontSize={FONT_SIZE_TABLE} whiteSpace="normal" maxW="200px">{item.name}</Td>
                {type == 'objgem' && <Td gap={1} display={"flex"} fontSize={FONT_SIZE_TABLE} whiteSpace="normal" maxW="200px"><Text>{price}</Text><span>PO</span></Td>}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer >

      {/* <DefaultModal tableName={tableName} id={itemId} isOpen={isOpen} itemName={itemName} onClose={onClose} /> */}
    </>
  );
}

