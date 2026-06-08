import { Box, Flex, Text } from "@chakra-ui/react";
import logoArtTesouro from "../../img/art.png";
import logoArtMagicos from "../../img/art2.png";
import logoArtGemas from "../../img/art3.png";
import logoPilhaTesouro from "../../img/art6.png"
import { Footer } from '../Footer/Footer';
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FONT_SIZE_MEDIUM_TEXT, FONT_SIZE_SUBTITLE, FONT_SIZE_TABLE, FONT_SIZE_TEXT, FONT_SIZE_TITLE } from "../../helpers/globalFont";

export function HomeSection() {
  return (
    <>
      <Flex
        height={"260vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        flexDirection={"column"}
        marginLeft={"3%"}
      >
        <Flex width={"98%"} justifyContent={"center"} flexDirection={"column"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"center"}
          >
            <Box
              as={RouterLink}
              to="/ObjetosDeArte"
              _hover={{
                transform: "scale(1.03)",
                opacity: "0.7",
                cursor: "pointer",
              }}
              marginTop={3}
              marginLeft={"7%"}
              border={"solid 1px black"}
              borderRadius={"20px"}
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
                fontSize={FONT_SIZE_TITLE}
                color={"white"}
              >
                Objetos de arte
              </Text>
              <Text
                marginTop={"2.5%"}
                textAlign={"left"}
                marginLeft={5}
                fontFamily={"Cinzel"}
                fontSize={FONT_SIZE_MEDIUM_TEXT}
                color={"gray.200"}
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
                as={RouterLink}
                to="/ItensMagicos"
                _hover={{
                  transform: "scale(1.05)",
                  opacity: "0.7",
                  cursor: "pointer",
                }}
                border={"solid 1px black"}
                borderRadius={"20px"}
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
                  fontSize={FONT_SIZE_SUBTITLE}
                  color={"white"}
                >
                  Itens mágicos
                </Text>
                <Text
                  marginTop={"1.5%"}
                  textAlign={"left"}
                  marginLeft={5}
                  fontFamily={"Cinzel"}
                  fontSize={FONT_SIZE_TEXT}
                  color={"gray.200"}
                >
                  Role seus diferentes tipos possiveis de itens mágicos, dê
                  aquele upgrade super importante em seu personagem e deixe seu
                  mestre de cabelos arrepiados.
                </Text>
              </Box>
              <Box
                as={RouterLink}
                to="/Gemas"
                _hover={{
                  transform: "scale(1.05)",
                  opacity: "0.7",
                  cursor: "pointer",
                }}
                border={"solid 1px black"}
                borderRadius={"20px"}
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
                  fontSize={FONT_SIZE_SUBTITLE}
                  color={"white"}
                >
                  Gemas
                </Text>
                <Text
                  marginTop={"2.5%"}
                  textAlign={"left"}
                  marginLeft={5}
                  fontFamily={"Cinzel"}
                  fontSize={FONT_SIZE_TEXT}
                  color={"gray.200"}

                >
                  Role seus diferentes tipos possiveis de Gemas, consiga muito
                  ouro vendendo ou simplesmente utilize elas e fique radiante!.
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>

        {/* <Box display={"flex"} flexDirection={"row"} width={"88.5%"} height={"60vh"} marginTop={"5%"} marginLeft={"6.5%"} fontFamily={"Cinzel"}>
          <Box backgroundColor={"#111111"} width={"35%"} height={"60vh"} margin={5} color={"white"} border={"solid 1px #202020"} borderRadius={"20px"} padding={"25px"} borderTop={"solid 2px tomato"}>
            <Text marginBottom={3} fontSize={FONT_SIZE_TITLE}>💰</Text>
            <Text fontSize={FONT_SIZE_MEDIUM_TEXT} marginBottom={3}>Gerador de Tesouro</Text>
            <Text fontSize={FONT_SIZE_TEXT} marginBottom={5}>Gere recompensas na hora: moedas, gemas, objetos de arte e itens mágicos, escalados pela faixa de nível do grupo.</Text>
            <Box marginLeft={5} marginBottom={5} fontSize={FONT_SIZE_TEXT} sx={{
              "li::marker": {
                color: "tomato",
              },
            }}>
              <li>Tesouro de covil</li>
              <li>4 faixas de nível</li>
              <li>Objetos, gemas e itens nomeados</li>
            </Box>
            <Text color={"gold"} fontSize={FONT_SIZE_TEXT}>Gerar tesouro <span>→</span></Text>
          </Box>

          <Box backgroundColor={"#111111"} width={"35%"} height={"60vh"} margin={5} color={"white"} border={"solid 1px #202020"} borderRadius={"20px"} padding={"25px"} borderTop={"solid 2px tomato"}>
            <Text marginBottom={3} fontSize={FONT_SIZE_TITLE}>💰</Text>
            <Text fontSize={FONT_SIZE_MEDIUM_TEXT} marginBottom={3}>Gerador de Tesouro</Text>
            <Text fontSize={FONT_SIZE_TEXT} marginBottom={5}>Gere recompensas na hora: moedas, gemas, objetos de arte e itens mágicos, escalados pela faixa de nível do grupo.</Text>
            <Box marginLeft={5} marginBottom={5} fontSize={FONT_SIZE_TEXT} sx={{
              "li::marker": {
                color: "tomato",
              },
            }}>
              <li>Tesouro de covil</li>
              <li>4 faixas de nível</li>
              <li>Objetos, gemas e itens nomeados</li>
            </Box>
            <Text fontSize={FONT_SIZE_TEXT}>Gerar tesouro <span>→</span></Text>
          </Box>

          <Box backgroundColor={"#111111"} width={"35%"} height={"60vh"} margin={5} color={"white"} border={"solid 1px #202020"} borderRadius={"20px"} padding={"25px"} borderTop={"solid 2px tomato"}>
            <Text marginBottom={3} fontSize={FONT_SIZE_TITLE}>💰</Text>
            <Text fontSize={FONT_SIZE_MEDIUM_TEXT} marginBottom={3}>Gerador de Tesouro</Text>
            <Text fontSize={FONT_SIZE_TEXT} marginBottom={5}>Gere recompensas na hora: moedas, gemas, objetos de arte e itens mágicos, escalados pela faixa de nível do grupo.</Text>
            <Box marginLeft={5} marginBottom={5} fontSize={FONT_SIZE_TEXT} sx={{
              "li::marker": {
                color: "tomato",
              },
            }}>
              <li>Tesouro de covil</li>
              <li>4 faixas de nível</li>
              <li>Objetos, gemas e itens nomeados</li>
            </Box>
            <Text fontSize={FONT_SIZE_TEXT}>Gerar tesouro <span>→</span></Text>
          </Box>
        </Box> */}


        <Box
          position="relative"
          display="flex"
          flexDirection="row"
          width="98%"
          height="85vh"
          marginTop="5%"
          marginLeft={"2%"}
          fontFamily="Cinzel"
          overflow="hidden"
        >
          {/* Vídeo de fundo */}
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src="/videos/background3.mp4" type="video/mp4" />
          </video>

          {/* Overlay escuro opcional */}
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="black"
            opacity={0.3}
            zIndex={1}
          />

          {/* Conteúdo */}
          <Box
            position="relative"
            zIndex={2}
            display="flex"
            flexDirection="row"
            width="100%"
            marginTop={"5%"}
          >
            <Box backgroundColor={"#111111"} width={"35%"} height={"60vh"} margin={5} color={"white"} border={"solid 1px #202020"} borderRadius={"20px"} padding={"25px"} borderTop={"solid 2px tomato"} _hover={{
              transform: "translateY(-4px) scale(1.01)",
              boxShadow: "0 0 20px rgba(255,99,71,0.25)",
              borderColor: "tomato",
            }}>
              <Text marginBottom={3} fontSize={FONT_SIZE_TITLE}>💰</Text>
              <Text fontWeight="bold" textShadow="0 0 12px rgba(255,99,71,0.7)" fontSize={FONT_SIZE_MEDIUM_TEXT} marginBottom={3}>Gerador de Tesouro</Text>
              <Text fontSize={FONT_SIZE_TEXT} marginBottom={5}>Gere recompensas na hora: moedas, gemas, objetos de arte e itens mágicos, escalados pela faixa de nível do grupo.</Text>
              <Box marginLeft={5} marginBottom={5} fontSize={FONT_SIZE_TEXT} sx={{
                "li::marker": {
                  color: "tomato",
                },
              }}>
                <li>Tesouro de covil</li>
                <li>4 faixas de nível</li>
                <li>Objetos, gemas e itens nomeados</li>
              </Box>
              <Link as={RouterLink}
                to="/treasure" _hover={{ fontWeight: "bold", color: "gold", textShadow: "0 0 12px rgba(192, 250, 32, 0.7)", cursor: "pointer" }} color={"gold"} fontSize={FONT_SIZE_TEXT}>Gerar tesouro <span>→</span></Link>
            </Box>

            <Box backgroundColor={"#111111"} width={"35%"} height={"60vh"} margin={5} color={"white"} border={"solid 1px #202020"} borderRadius={"20px"} padding={"25px"} borderTop={"solid 2px tomato"} _hover={{
              transform: "translateY(-4px) scale(1.01)",
              boxShadow: "0 0 20px rgba(255,99,71,0.25)",
              borderColor: "tomato",
            }}>
              <Text marginBottom={3} fontSize={FONT_SIZE_TITLE}>📖</Text>
              <Text fontWeight="bold" textShadow="0 0 12px rgba(255,99,71,0.7)" fontSize={FONT_SIZE_MEDIUM_TEXT} marginBottom={3}>Lista de Magias</Text>
              <Text fontSize={FONT_SIZE_TEXT} marginBottom={5}>Liste as mágias do sistema, com filtros personalizados e separação por classes.</Text>
              <Box marginLeft={5} marginBottom={5} fontSize={FONT_SIZE_TEXT} sx={{
                "li::marker": {
                  color: "tomato",
                },
              }}>
                <li>Filtros personalizados</li>
                <li>Separação por escolas e classes</li>
                <li>Criação e edição</li>
              </Box>
              <Text fontSize={FONT_SIZE_TEXT}>Em desenvolvimento <span></span></Text>
            </Box>

            <Box backgroundColor={"#111111"} width={"35%"} height={"60vh"} margin={5} color={"white"} border={"solid 1px #202020"} borderRadius={"20px"} padding={"25px"} borderTop={"solid 2px tomato"} _hover={{
              transform: "translateY(-4px) scale(1.01)",
              boxShadow: "0 0 20px rgba(255,99,71,0.25)",
              borderColor: "tomato",
            }}>
              <Text marginBottom={3} fontSize={FONT_SIZE_TITLE}>⚔️</Text>
              <Text fontWeight="bold" textShadow="0 0 12px rgba(255,99,71,0.7)" fontSize={FONT_SIZE_MEDIUM_TEXT} marginBottom={3}>Lista de itens</Text>
              <Text fontSize={FONT_SIZE_TEXT} marginBottom={5}>Liste todos os itens mágicos do sistema, com filtros e tags personalizados.</Text>
              <Box marginLeft={5} marginBottom={5} fontSize={FONT_SIZE_TEXT} sx={{
                "li::marker": {
                  color: "tomato",
                },
              }}>
                <li>Filtros diversos</li>
                <li>Categorias diversas</li>
                <li>Itens com imagens representativas</li>
              </Box>
              <Text fontSize={FONT_SIZE_TEXT}>Em desenvolvimento <span></span></Text>
            </Box>
          </Box>
        </Box>

        <Footer />
      </Flex>
    </>
  );
}
