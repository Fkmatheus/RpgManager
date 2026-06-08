import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { FONT_SIZE_TABLE, FONT_SIZE_TEXT } from "../../helpers/globalFont";
import { Footer } from "../Footer/Footer";
import { FaCoins } from "react-icons/fa";

export function TreasureSection() {
  return (
    <Flex height={"250vh"}
      width={"100%"}
      backgroundColor={"gray.900"}
      flexDirection={"column"}
      marginLeft={"3%"}
      fontFamily={"Cinzel"}>

      <Box marginTop={"1%"} marginLeft={"5%"} backgroundColor={"#0e0d0d"} width={"90%"} height={"95vh"} borderRadius={"20px"}>
        
        <Box>
          <Box width={"25%"} padding={"15px"}>
            <Select  backgroundColor={"#131313"} color={"white"} borderColor={"#202020"}>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TEXT }} value="">Selecione um Nível</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TEXT }} value="1_4">Níveis 01-04</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TEXT }} value="5_10">Níveis 05-10</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TEXT }} value="11_16">Níveis 11-16</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TEXT }} value="17_20">Níveis 17-20</option>
            </Select>
          </Box>
        </Box>

        <Box width={"96%"} marginLeft={"2%"} backgroundColor={"#131313"} height={"85%"} borderRadius={"20px"} border={"solid 1px #202020"} borderTop={"solid 2px tomato"}>

        <Box padding={"10px"} display={"flex"} flexDirection={"column"} marginTop={3} marginLeft={"2%"} width={"96%"} background={"blue"} height={"15vh"} justifyContent={"left"} alignItems={"left"} textAlign={"left"}>
          <Text display="flex" alignItems="center" gap={2} fontSize={FONT_SIZE_TABLE}><FaCoins color="gray" />Moedas</Text>
          <Box>
            <Box></Box>
            <Box></Box>
          </Box>
        </Box>

        <Box marginTop={3} marginLeft={"2%"} width={"96%"} background={"red"} height={"59vh"}>
          <Box><Text></Text></Box>
          <Box></Box>
        </Box>


        </Box>




      </Box>

      <Footer/>

    </Flex>
  )
}