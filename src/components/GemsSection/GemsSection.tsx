import { Box, Flex } from "@chakra-ui/react";
import { ItemTableCard } from "../ItemTableCard/ItemTableCard";
import { Footer } from "../Footer/Footer";

const gems_10po = [
  { id: 1, dice: 1, name: "Azurita" },
  { id: 2, dice: 2, name: "Ágata malhada" },
  { id: 3, dice: 3, name: "Quartzo azul" },
  { id: 4, dice: 4, name: "Ágata ocular" },
  { id: 5, dice: 5, name: "Hematita" },
  { id: 6, dice: 6, name: "Lápis lazúli" },
  { id: 7, dice: 7, name: "Malaquita" },
  { id: 8, dice: 8, name: "Ágata musgo" },
  { id: 9, dice: 9, name: "Obsidiana" },
  { id: 10, dice: 10, name: "Rodocrosita" },
  { id: 11, dice: 11, name: "Olho de tigre" },
  { id: 12, dice: 12, name: "Turquesa" },
];

const gems_50po = [
  { id: 1, dice: 1, name: "Pedra de sangue" },
  { id: 2, dice: 2, name: "Cornalina" },
  { id: 3, dice: 3, name: "Calcedônia" },
  { id: 4, dice: 4, name: "Crisoprásio" },
  { id: 5, dice: 5, name: "Citrina" },
  { id: 6, dice: 6, name: "Jaspe" },
  { id: 7, dice: 7, name: "Pedra lunar" },
  { id: 8, dice: 8, name: "Ônix" },
  { id: 9, dice: 9, name: "Quartzo" },
  { id: 10, dice: 10, name: "Sardônica" },
  { id: 11, dice: 11, name: "Quartzo rosa estrela" },
  { id: 12, dice: 12, name: "Zircônio" },
];

const gems_100po = [
  { id: 1, dice: 1, name: "Âmbar" },
  { id: 2, dice: 2, name: "Ametista" },
  { id: 3, dice: 3, name: "Crisoberilo" },
  { id: 4, dice: 4, name: "Coral" },
  { id: 5, dice: 5, name: "Granada" },
  { id: 6, dice: 6, name: "Jade" },
  { id: 7, dice: 7, name: "Jato" },
  { id: 8, dice: 8, name: "Pérola" },
  { id: 9, dice: 9, name: "Espinela" },
  { id: 10, dice: 10, name: "Turmalina" },
];

const gems_500po = [
  { id: 1, dice: 1, name: "Alexandrita" },
  { id: 2, dice: 2, name: "Água-marinha" },
  { id: 3, dice: 3, name: "Pérola negra" },
  { id: 4, dice: 4, name: "Espinela azul" },
  { id: 5, dice: 5, name: "Peridoto" },
  { id: 6, dice: 6, name: "Topázio" },
];

const gems_1000po = [
  { id: 1, dice: 1, name: "Opala negra" },
  { id: 2, dice: 2, name: "Safira azul" },
  { id: 3, dice: 3, name: "Esmeralda" },
  { id: 4, dice: 4, name: "Opala de fogo" },
  { id: 5, dice: 5, name: "Opala" },
  { id: 6, dice: 6, name: "Rubi estrela" },
  { id: 7, dice: 7, name: "Safira estrela" },
  { id: 8, dice: 8, name: "Safira amarela" },
];

const gems_5000po = [
  { id: 1, dice: 1, name: "Safira negra" },
  { id: 2, dice: 2, name: "Diamante" },
  { id: 3, dice: 3, name: "Jacinto" },
  { id: 4, dice: 4, name: "Rubi" },
];

export function GemsSection() {
  return (
    <>
      <Flex height={"285vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        flexDirection={"column"}
        marginLeft={"3%"}
        fontFamily={'Cinzel'}>

        <Box
          marginTop={"5%"}
          marginLeft={"10%"}
          width={"85%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard tableName='Gemas [10po]' data={gems_10po} type='Gemas' dice="D12" />
          <ItemTableCard tableName='Gemas [50po]' data={gems_50po} type='Gemas' dice="D12" />

        </Box>

        <Box
          marginTop={"5%"}
          marginLeft={"10%"}
          width={"85%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard tableName='Gemas [100po]' data={gems_100po} type='Gemas' dice="D10" />
          <ItemTableCard tableName='Gemas [1000po]' data={gems_1000po} type='Gemas' dice="D6" />

        </Box>

        <Box
          marginTop={"5%"}
          marginLeft={"10%"}
          width={"85%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard tableName='Gemas [500po]' data={gems_500po} type='Gemas' dice="D8" height="46vh" />
          <ItemTableCard tableName='Gemas [5000po]' data={gems_5000po} type='Gemas' dice="D4" height="46vh" />

        </Box>
      <Footer/>
      </Flex>
    </>
  )
}