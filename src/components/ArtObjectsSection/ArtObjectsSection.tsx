import { Box, Flex } from '@chakra-ui/react';
import { Footer } from "../Footer/Footer";
import { ItemTableCard } from '../ItemTableCard/ItemTableCard';


const objects_25po = [
  { id: 1, dice: 1, name: "Jarro de prata" },
  { id: 2, dice: 2, name: "Estatueta esculpida em osso" },
  { id: 3, dice: 3, name: "Bracelete de ouro pequeno" },
  { id: 4, dice: 4, name: "Vestimenta de tecido dourado" },
  { id: 5, dice: 5, name: "Máscara de veludo negra costurada com fios de prata" },
  { id: 6, dice: 6, name: "Cálice de cobre com filigrana prateada" },
  { id: 7, dice: 7, name: "Par de dados de osso com gravuras" },
  { id: 8, dice: 8, name: "Pequeno espelho numa moldura de madeira pintada" },
  { id: 9, dice: 9, name: "Lenço de seda bordado" },
  { id: 10, dice: 10, name: "Broche de ouro com um retrato pintado dentro" },
];

const objects_250po = [
  { id: 1, dice: 1, name: "Anel de ouro cravejado com pedras de sangue" },
  { id: 2, dice: 2, name: "Estatueta esculpida em marfim" },
  { id: 3, dice: 3, name: "Bracelete de ouro largo" },
  { id: 4, dice: 4, name: "Gargantilha de prata com um pingente de pedra preciosa" },
  { id: 5, dice: 5, name: "Coroa de bronze" },
  { id: 6, dice: 6, name: "Robe de seda com adornos de ouro" },
  { id: 7, dice: 7, name: "Grande tapeçaria elegante" },
  { id: 8, dice: 8, name: "Caneca de bronze com jades incrustadas" },
  { id: 9, dice: 9, name: "Caixa de miniaturas de animais em turquesa" },
  { id: 10, dice: 10, name: "Gaiola de pássaro de ouro com filigrana de electro" },

];

const objects_750po = [
  { id: 1, dice: 1, name: "Cálice de prata cravejado com pedras da lua" },
  { id: 2, dice: 2, name: "Espada longa de lâmina prateada " },
  { id: 3, dice: 3, name: "Harpa de madeira exótica com marfim incrustado" },
  { id: 4, dice: 4, name: "Pequeno ídolo de ouro" },
  { id: 5, dice: 5, name: "Pente de ouro em formato de dragão" },
  { id: 6, dice: 6, name: "Rolha de garrafa gravada com folhas de ouro" },
  { id: 7, dice: 7, name: "Adaga de electro cerimonial" },
  { id: 8, dice: 8, name: "Broche de prata e ouro" },
  { id: 9, dice: 9, name: "Estatueta de obsidiana com detalhes e incrustações de ouro" },
  { id: 10, dice: 10, name: "Máscara de guerra de ouro pintada" },
];

const objects_2500po = [
  { id: 1, dice: 1, name: "Corrente de ouro elegante" },
  { id: 2, dice: 2, name: "Antiga pintura obra-prima" },
  { id: 3, dice: 3, name: "Manto de seda e veludo bordado" },
  { id: 4, dice: 4, name: "Bracelete de platina cravejado com uma safira" },
  { id: 5, dice: 5, name: "Luvas bordadas com lascas de joias" },
  { id: 6, dice: 6, name: "Peúga cheia de joias" },
  { id: 7, dice: 7, name: "Caixa de música de ouro" },
  { id: 8, dice: 8, name: "Argola de ouro cravejada com quatro águas-marinhas" },
  { id: 9, dice: 9, name: "Tapa-olho com um olho falso cravejado " },
  { id: 10, dice: 10, name: "Um colar de pequenas pérolas rosas" },
];

const objects_7500po = [
  { id: 1, dice: 1, name: "Coroa de ouro cheia de joias" },
  { id: 2, dice: 2, name: "Anel de platina cheio de joias" },
  { id: 3, dice: 3, name: "Pequena estatueta de ouro cravejada com rubis" },
  { id: 4, dice: 4, name: "Taça de ouro cravejada com esmeraldas" },
  { id: 5, dice: 5, name: "Caixa de joias de ouro com filigrana de platina" },
  { id: 6, dice: 6, name: "Sarcófago infantil de ouro pintado" },
  { id: 7, dice: 7, name: "Jogo de tabuleiro de jade com peças de ouro maciço" },
  { id: 8, dice: 8, name: "Chifre de marfim adornado com filigrana de ouro" },
];

export function ArtObjectsSection() {
  return (
    <>
      <Flex
        height={"285vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        flexDirection={"column"}
        marginLeft={"3%"}
        fontFamily={'Cinzel'}
      >
        <Box
          marginTop={"5%"}
          marginLeft={"5%"}
          width={"90%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard tableName='Objetos de arte [25po]' data={objects_25po} type='Objetos' />
          <ItemTableCard tableName='Objetos de arte [250po]' data={objects_250po} type='Objetos' />

        </Box>

        <Box
          marginTop={"5%"}
          marginLeft={"5%"}
          width={"90%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard tableName='Objetos de arte [750po]' data={objects_750po} type='Objetos' />
          <ItemTableCard tableName='Objetos de arte [2500po]' data={objects_2500po} type='Objetos' />

        </Box>

        <Box
          marginTop={"5%"}
          marginLeft={"5%"}
          width={"90%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
        >
          <ItemTableCard tableName='Objetos de arte [7500po]' data={objects_7500po} type='Objetos' dice='D8' />
        </Box>
        <Footer />
      </Flex>
    </>
  );
}
