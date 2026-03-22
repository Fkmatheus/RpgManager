import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from "@chakra-ui/react";

interface TableItem {
  id: number;
  d10: number;
  name: string;
}

interface DefaultTableProps {
    dice: string;
    type: string;
    data: TableItem[];
    fontSize?: number;
}

export function DefaultTable({dice, type, data, fontSize}: DefaultTableProps) {
  return (
    <TableContainer>
      <Table size="sm" variant="unstyled" color={"white"} backgroundColor={"#161616"}>
        <Thead>
          <Tr>
            <Th width={"20px"}  textAlign={"center"} borderRight={"solid black 1px"}>{dice}</Th>
            <Th>{type}</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((item) => (
            <Tr key={item.id} _hover={{backgroundColor: "#272727", fontWeight: "bold", color: "tomato"}}>
              <Td fontSize={fontSize ? fontSize : 13} fontWeight={"bold"} textAlign={"center"} borderRight={"solid black 1px"}>{item.d10}</Td>
              <Td fontSize={fontSize ? fontSize : 13}>{item.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

