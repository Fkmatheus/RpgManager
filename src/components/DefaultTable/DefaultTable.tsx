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
}

export function DefaultTable({dice, type, data}: DefaultTableProps) {
  return (
    <TableContainer>
      <Table size="sm" variant="unstyled" color={"white"} backgroundColor={"#161616"}>
        <Thead>
          <Tr>
            <Th borderRight={"solid black 1px"}>{dice}</Th>
            <Th>{type}</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td fontSize={13} textAlign={"center"} borderRight={"solid black 1px"}>{item.d10}</Td>
              <Td fontSize={13}>{item.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

const items = [
  { id: 1, d10: 1, name: "Anel de ouro cravejado com pedras de sangue"},
  { id: 2, d10: 2, name: "Estatueta esculpida em marfim"},
  { id: 3, d10: 3, name: "Bracelete de ouro largo"},
  { id: 4, d10: 4, name: "Gargantilha de prata com um pingente de pedra preciosa"},
  { id: 5, d10: 5, name: "Coroa de bronze"},
  { id: 6, d10: 6, name: "Robe de seda com adornos de ouro"},
  { id: 7, d10: 7, name: "Grande tapeçaria elegante"},
  { id: 8, d10: 8, name: "Caneca de bronze com jades incrustadas"},
  { id: 9, d10: 9, name: "Caixa de miniaturas de animais em turquesa"},
  { id: 10, d10: 10, name: "Gaiola de pássaro de ouro com filigrana de electro"},
  
];