import { Box, Button, Flex, Select, Text, useToast } from "@chakra-ui/react";
import { FONT_SIZE_MEDIUM_TEXT, FONT_SIZE_SUBTITLE, FONT_SIZE_TABLE, FONT_SIZE_TEXT } from "../../helpers/globalFont";
import { Footer } from "../Footer/Footer";
import { FaCoins, FaDiceD20, FaGem, FaMagic } from "react-icons/fa";
import { TreasureTable } from "../TreasureTable/TreasureTable";
import { useState } from "react";
import { } from "../../services/magicItensService";
import { TreasureService } from "../../services/TreasureService";


export function TreasureSection() {
  interface TreasureResponse {
    gems: { name: string; quantity: number }[];
    arts: { name: string; quantity: number }[];
    itens: { name: string; quantity: number }[];
    po: number;
    pl: number;
    gemsPrice: number;
    artsPrice: number;
  }

  const toast = useToast();
  const [level, setLevel] = useState("");
  const [treasure, setTreasure] = useState<TreasureResponse | null>(null);
  
  async function handleRollTreasure() {
    if (!level) return;

    try {

      const dice = Math.floor(Math.random() * 100) + 1;
      
      const result = await TreasureService.getLoot(
        level,
        dice
      );

      setTreasure(result);
      
      toast({
        title: `Você tirou ${dice} no dado`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <Flex height={"170vh"}
      width={"100%"}
      backgroundColor={"gray.900"}
      flexDirection={"column"}
      marginLeft={"3%"}
      fontFamily={"Cinzel"}>

      <Box marginTop={"1%"} marginLeft={"5%"} backgroundColor={"#161616"} width={"90%"} height={"95vh"} borderRadius={"20px"}>

        <Box>
          <Box display={"flex"} width={"25%"} padding={"15px"} gap={"10%"}>
            <Select value={level}
              onChange={(e) => setLevel(e.target.value)} fontSize={FONT_SIZE_TABLE} backgroundColor={"#131313"} color={"white"} borderColor={"#202020"}>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Selecione um Nível</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="0-4">Níveis 01-04</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="5-10">Níveis 05-10</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="11-16">Níveis 11-16</option>
              <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="17">Níveis 17-20</option>
            </Select>
            <Button onClick={handleRollTreasure} marginRight={3} p={0} minW="auto" h="auto" _hover={{ color: "tomato" }} backgroundColor={"#161616"} color={"white"} variant={"ghost"}><FaDiceD20 size={35} /></Button>
          </Box>

        </Box>

        <Box width={"96%"} marginLeft={"2%"} backgroundColor={"#131313"} height={"85%"} borderRadius={"20px"} border={"solid 1px #202020"} borderTop={"solid 2px tomato"}>

          <Box padding={"10px"} display={"flex"} flexDirection={"row"} marginTop={3} marginLeft={"2%"} width={"96%"} height={"15vh"} justifyContent={"space-between"}>
            <Box>
              <Text color={"white"} display="flex" alignItems="center" gap={2} fontSize={FONT_SIZE_TEXT}><FaCoins color="gray" />Moedas</Text>
              <Box marginTop={3} display={"flex"} justifyContent={"row"} gap={"20px"}>
                <Box sx={{
                  "li::marker": {
                    color: "gold",
                  },
                }} padding={"10px 20px"} border={"solid 2px #202020"} borderRadius={"10px"} display={"flex"} textAlign={"center"} alignItems={"center"} justifyContent={"center"} fontSize={FONT_SIZE_MEDIUM_TEXT} color={'white'} gap={1}><li style={{ marginLeft: "15px" }}>{treasure?.po}</li>PO</Box>
                <Box sx={{
                  "li::marker": {
                    color: "silver",
                  },
                }} padding={"10px 20px"} border={"solid 2px #202020"} borderRadius={"10px"} display={"flex"} textAlign={"center"} alignItems={"center"} justifyContent={"center"} fontSize={FONT_SIZE_MEDIUM_TEXT} color={'white'} gap={1}><li style={{ marginLeft: "15px" }}>{treasure?.pl}</li>PL</Box>
              </Box>
            </Box>

            <Box marginTop={3} display={"flex"} flexDirection={"row"} textAlign={"center"}>
              <Box>
                <Text fontWeight="bold" textShadow="0 0 12px rgba(255,99,71,0.7)" color={"white"} fontSize={FONT_SIZE_SUBTITLE}>Tesouro de covil</Text>
                <Text color={"white"} fontSize={FONT_SIZE_TEXT}>{level != "" ? "Níveis" : ""} <span>{level}</span></Text>

              </Box>

            </Box>

          </Box>

          <Box gap={"25px"} display={"flex"} flexDirection={"row"} marginTop={"3%"} marginLeft={"2%"} width={"96%"} height={"59vh"}>
            <Box overflowY="auto" css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',

            }} border={"solid 2px #202020"} padding={"20px"} width={"49%"} height={"50vh"} borderRadius={"20px"} _hover={{
              transform: "translateY(-4px) scale(1.01)",
              borderTop: "solid 2px tomato"
            }}>
              <Box marginBottom={2} display={"flex"} justifyContent={"left"} alignItems={"center"} gap={2}>
                <FaGem color="gray" size={20} />
                <Text fontWeight="bold" textShadow="0 0 12px rgba(255,99,71,0.7)" color={"white"} fontSize={FONT_SIZE_MEDIUM_TEXT}>Objetos de valor</Text>
              </Box>
              {treasure && <TreasureTable price={treasure.gemsPrice > 0 ? treasure.gemsPrice : treasure.artsPrice} type={treasure.gems.length > 0 ? "gem" : "art"} data={treasure.gems.length > 0 ? treasure.gems : treasure.arts} />}
            </Box>
            <Box overflowY="auto" css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',

            }} border={"solid 2px #202020"} padding={"20px"} width={"49%"} height={"50vh"} borderRadius={"20px"} _hover={{
              transform: "translateY(-4px) scale(1.01)",
              borderTop: "solid 2px tomato"
            }}>
              <Box marginBottom={2} display={"flex"} justifyContent={"left"} alignItems={"center"} gap={2}>
                <FaMagic color="gray" size={20} />
                <Text fontWeight="bold" textShadow="0 0 12px rgba(255,99,71,0.7)" color={"white"} fontSize={FONT_SIZE_MEDIUM_TEXT}>Itens mágicos</Text>
              </Box>
              {treasure && <TreasureTable data={treasure.itens} type="item" />}

            </Box>
          </Box>


        </Box>




      </Box>

      <Footer />

    </Flex>
  )
}