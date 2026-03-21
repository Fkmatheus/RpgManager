import { Box, Flex, Text } from '@chakra-ui/react';
import { Footer } from "../Footer/Footer";

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
          height={"60vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box width={"48%"} height={"60vh"} border={"solid 1px black"}>
            <Box display={"flex"} flexDirection={"row"} fontSize={20} alignItems={"center"} textAlign={"center"} fontWeight={"bold"} fontFamily={'Cinzel'} color={"white"} width={"100%"} height={"6vh"} backgroundColor={"#111111"} justifyContent={"space-between"}>
               <Text marginLeft={3}>Objetos de arte [25po]</Text>
               <Text>TESTE 2</Text>
            </Box>
          </Box>
          <Box width={"48%"} height={"60vh"} border={"solid 1px black"}></Box>
        </Box>
        <Box
          marginTop={"5%"}
          marginLeft={"10%"}
          width={"85%"}
          height={"60vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box width={"48%"} height={"60vh"} border={"solid 1px black"}></Box>
          <Box width={"48%"} height={"60vh"} border={"solid 1px black"}></Box>
        </Box>
        <Box
          marginTop={"5%"}
          marginLeft={"10%"}
          width={"85%"}
          height={"70vh"}
          border={"solid 1px black"}>


        </Box>
        <Footer />
      </Flex>
    </>
  );
}
