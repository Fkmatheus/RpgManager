import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";
import { FONT_SIZE_MEDIUM_TEXT, FONT_SIZE_TABLE, FONT_SIZE_TEXT } from "../../helpers/globalFont";
import { MdFilterList } from "react-icons/md";
import { GiScrollUnfurled } from "react-icons/gi";

export function SpellsSection() {
  return (
    <Flex height={"200vh"}
      width={"100%"}
      backgroundColor={"gray.900"}
      flexDirection={"column"}
      marginLeft={"3%"}
      fontFamily={'Cinzel'}>


      <Box marginLeft={"5%"} borderRadius={"20px"} marginTop={"2.5%"} minHeight={"110vh"} width={"92%"} backgroundColor={"#161616"}>
        <Box gap={"20px"} padding={"20px"} display={"flex"} flexDirection={"row"} borderRadius={"20px"} border={"1px solid #202020"} marginTop={"2.5%"} marginLeft={"4%"} height={"20vh"} width={"92%"} backgroundColor={"#111111"}>

          <Box display={"flex"} flexDirection={"column"} gap={"10px"} width={"20%"}>
            <Text color={"white"} fontSize={FONT_SIZE_TEXT}>Classe</Text>
            <Select borderColor={"#202020"} fontSize={FONT_SIZE_TABLE} color={"white"}>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Selecione uma classe</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="bard">Bardo</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="wizard">Bruxo</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="cleric">Clérigo</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="druid">Druida</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="sorcerer">Feiticeiro</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="mage">Mago</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="paladin">Paladino</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="ranger">Patrulheiro</option>
            </Select>
          </Box>
          
          <Box display={"flex"} flexDirection={"column"} gap={"10px"} width={"20%"}>
            <Text color={"white"} fontSize={FONT_SIZE_TEXT}>Escola</Text>
            <Select borderColor={"#202020"} fontSize={FONT_SIZE_TABLE} color={"white"}>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }}  value="">Selecione uma Escola</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Adivinhação</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Abjuração</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Encantamento</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Necromancia</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Ilusão</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Conjuração</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Evocação</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Transmutação</option>

            </Select>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={"10px"} width={"20%"}>
            <Text color={"white"} fontSize={FONT_SIZE_TEXT}>Nível</Text>
            <Select borderColor={"#202020"} fontSize={FONT_SIZE_TABLE} color={"white"}>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Selecione um Nível</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="1">1º</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="2">2º</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="3">3º</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="4">4º</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="5">5º</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="6">6º</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="7">7º</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="8">8º</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="9">9º</option>

            </Select>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={"10px"} width={"20%"}>
            <Text color={"white"} fontSize={FONT_SIZE_TEXT}>Nome da mágia</Text>
            <Input borderColor={"#202020"}></Input>
          </Box>

          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"20%"}>
            <GiScrollUnfurled color="white" size={60} />
          </Box>


        </Box>

        <Box display={"flex"} borderTop={"2px solid tomato"} marginLeft={"4%"} borderRadius={"20px"} marginTop={"2.5%"} minHeight={"80vh"} width={"92%"} backgroundColor={"#111111"}>
          <Box>
            <img src="/img/teste.png" alt="" width={"100%"} />
          </Box>
          <Box>
            <img src="/img/teste2.png" alt="" width={"100%"} />
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}