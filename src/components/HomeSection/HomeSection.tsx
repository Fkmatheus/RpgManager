import { Box, Flex, Text } from "@chakra-ui/react";
import logoArtTesouro from "../../img/art.png";
import logoArtMagicos from "../../img/art2.png";
import logoArtGemas from "../../img/art3.png";

export function HomeSection() {
  return (
    <>
      <Flex
        height={"200vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        // justifyContent={"center"}
        flexDirection={"column"}
        marginLeft={"3%"}
      >
        <Flex width={"95%"} justifyContent={"center"} flexDirection={"column"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"center"}
          >
            <Box
              _hover={{
                transform: "scale(1.03)",
                opacity: "0.7",
                cursor: "pointer",
              }}
              marginTop={3}
              marginLeft={"7%"}
              border={"solid 1px black"}
              width={"60%"}
              height={"92vh"}
              bgImage={`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${logoArtTesouro})`}
              bgSize={"cover"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              textAlign={"center"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <Text
                fontWeight={"bold"}
                marginTop={"45%"}
                marginLeft={5}
                fontFamily={"Cinzel"}
                fontSize={40}
                color={"white"}
              >
                Objetos de arte
              </Text>
              <Text
                marginTop={"2.5%"}
                textAlign={"left"}
                marginLeft={5}
                fontFamily={"Cinzel"}
                fontSize={20}
                color={"gray.300"}
              >
                Role seus diferentes tipos possiveis de objetos de arte
                valiosos. As possibilidades são extremamente variadas, desde a
                um simples Jarro de prata até um colar de diamantes.
              </Text>
            </Box>
            <Box
              marginTop={3}
              marginLeft={5}
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              width={"40%"}
              height={"92vh"}
            >
              <Box
                _hover={{
                  transform: "scale(1.05)",
                  opacity: "0.7",
                  cursor: "pointer",
                }}
                border={"solid 1px black"}
                height={"45vh"}
                width={"100%"}
                bgImage={`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${logoArtMagicos})`}
                bgSize={"cover"}
                bgPosition={"center"}
                bgRepeat={"no-repeat"}
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                justifyContent={"center"}
              >
                <Text
                  fontWeight={"bold"}
                  marginTop={"30%"}
                  marginLeft={5}
                  fontFamily={"Cinzel"}
                  fontSize={30}
                  color={"white"}
                >
                  Itens mágicos
                </Text>
                <Text
                  marginTop={"2.5%"}
                  textAlign={"left"}
                  marginLeft={5}
                  fontFamily={"Cinzel"}
                  fontSize={15}
                  color={"gray.300"}
                >
                  Role seus diferentes tipos possiveis de itens mágicos, dê
                  aquele upgrade super importante em seu personagem e deixe seu
                  mestre de cabelos arrepiados.
                </Text>
              </Box>
              <Box
                _hover={{
                  transform: "scale(1.05)",
                  opacity: "0.7",
                  cursor: "pointer",
                }}
                border={"solid 1px black"}
                height={"45vh"}
                width={"100%"}
                bgImage={`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${logoArtGemas})`}
                bgSize={"cover"}
                bgPosition={"center"}
                bgRepeat={"no-repeat"}
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                justifyContent={"center"}
              >
                <Text
                  fontWeight={"bold"}
                  marginTop={"30%"}
                  marginLeft={5}
                  fontFamily={"Cinzel"}
                  fontSize={30}
                  color={"white"}
                >
                  Gemas
                </Text>
                <Text
                  marginTop={"2.5%"}
                  textAlign={"left"}
                  marginLeft={5}
                  fontFamily={"Cinzel"}
                  fontSize={15}
                  color={"gray.300"}
                >
                  Role seus diferentes tipos possiveis de Gemas, consiga muito
                  ouro vendendo ou simplesmente utilize elas e fique radiante!.
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box
          marginTop={10}
          marginLeft={"6.5%"}
          display={"flex"}
          flexDirection={"row"}
          width={"88.5%"}
          backgroundColor={"green"}
          height={"80vh"}
        >
          <Box backgroundColor={"yellow"} height={"100%"} width={"59%"}>
              
          </Box>
          <Box marginLeft={"2%"} backgroundColor={"blue"} height={"100%"} width={"39%"}></Box>
        </Box>
      </Flex>
    </>
  );
}
