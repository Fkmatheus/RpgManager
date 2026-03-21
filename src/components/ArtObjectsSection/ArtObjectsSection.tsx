import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Footer } from "../Footer/Footer";
import { FaDiceD20 } from 'react-icons/fa';
import { DefaultTable } from '../DefaultTable/DefaultTable';

const objects_25po = [
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

export function ArtObjectsSection() {
  return (
    <>
      <Flex
        height={"300vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        flexDirection={"column"}
        marginLeft={"3%"}
      >
        <Box
          marginTop={"5%"}
          marginLeft={"10%"}
          width={"85%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box backgroundColor={"#161616"} fontFamily={'Cinzel'} overflowY="auto" css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none', 
            'scrollbar-width': 'none', 
          }} width={"48%"} height={"62vh"} border={"solid 1px black"}>
            <Box display={"flex"} flexDirection={"row"} fontSize={20} alignItems={"center"} textAlign={"center"} fontWeight={"bold"}  color={"white"} width={"100%"} height={"6vh"} backgroundColor={"#111111"} justifyContent={"space-between"}>
              <Text marginLeft={3}>Objetos de arte [25po]</Text>
              <Button marginRight={3} p={0} minW="auto" h="auto" _hover={{ color: "tomato" }} backgroundColor={"#111111"} color={"white"} variant={"ghost"}><FaDiceD20 size={25} /></Button>
            </Box>
            <DefaultTable dice='d10' type='Objetos' data={objects_25po}/>
          </Box>
          <Box width={"48%"} height={"62vh"} border={"solid 1px black"}>
            <Box display={"flex"} flexDirection={"row"} fontSize={20} alignItems={"center"} textAlign={"center"} fontWeight={"bold"} fontFamily={'Cinzel'} color={"white"} width={"100%"} height={"6vh"} backgroundColor={"#111111"} justifyContent={"space-between"}>
              <Text marginLeft={3}>Objetos de arte [250po]</Text>
              <Button marginRight={3} p={0} minW="auto" h="auto" _hover={{ color: "tomato" }} backgroundColor={"#111111"} color={"white"} variant={"ghost"}><FaDiceD20 size={25} /></Button>
            </Box>
          </Box>
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
          <Box width={"48%"} height={"62vh"} border={"solid 1px black"}>
            <Box display={"flex"} flexDirection={"row"} fontSize={20} alignItems={"center"} textAlign={"center"} fontWeight={"bold"} fontFamily={'Cinzel'} color={"white"} width={"100%"} height={"6vh"} backgroundColor={"#111111"} justifyContent={"space-between"}>
              <Text marginLeft={3}>Objetos de arte [750po]</Text>
              <Button marginRight={3} p={0} minW="auto" h="auto" _hover={{ color: "tomato" }} backgroundColor={"#111111"} color={"white"} variant={"ghost"}><FaDiceD20 size={25} /></Button>
            </Box>
          </Box>
          <Box width={"48%"} height={"62vh"} border={"solid 1px black"}>
            <Box display={"flex"} flexDirection={"row"} fontSize={20} alignItems={"center"} textAlign={"center"} fontWeight={"bold"} fontFamily={'Cinzel'} color={"white"} width={"100%"} height={"6vh"} backgroundColor={"#111111"} justifyContent={"space-between"}>
              <Text marginLeft={3}>Objetos de arte [2500po]</Text>
              <Button marginRight={3} p={0} minW="auto" h="auto" _hover={{ color: "tomato" }} backgroundColor={"#111111"} color={"white"} variant={"ghost"}><FaDiceD20 size={25} /></Button>
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={"5%"}
          marginLeft={"10%"}
          width={"85%"}
          height={"70vh"}
          border={"solid 1px black"}> <Box display={"flex"} flexDirection={"row"} fontSize={20} alignItems={"center"} textAlign={"center"} fontWeight={"bold"} fontFamily={'Cinzel'} color={"white"} width={"100%"} height={"6vh"} backgroundColor={"#111111"} justifyContent={"space-between"}>
            <Text marginLeft={3}>Objetos de arte [7500po]</Text>
            <Button marginRight={3} p={0} minW="auto" h="auto" _hover={{ color: "tomato" }} backgroundColor={"#111111"} color={"white"} variant={"ghost"}><FaDiceD20 size={25} /></Button>
          </Box></Box>
        <Footer />
      </Flex>
    </>
  );
}
