import iconFooter from "../../img/footerlogo.png";
import roll20Icon from "../../img/roll20.png";
import { Flex, Text, Box, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";



export function Footer() {
    return (
        <>
            <Flex width={"98%"} height={'60vh'} backgroundColor={"#111111"} marginTop={"10%"} marginLeft={"2%"}>
                <Box width={"30%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Image src={iconFooter} width={"400px"}></Image>
                </Box>
                <Box width={"40%"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"row"}>
                    <Box color={"white"} fontFamily={'Cinzel'} width={"50%"} height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                        <Text fontWeight={"bold"} marginBottom={5}>PÁGINAS</Text>
                        <Link as={RouterLink} to={"/ObjetosDeArte"} _hover={{ color: "tomato", transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Objetos de arte</Link>
                        <Link as={RouterLink} to={"/Gemas"} _hover={{ color: "tomato", transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Gemas</Link>
                        <Link as={RouterLink} to={"/ItensMagicos"} _hover={{ color: "tomato", transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Itens mágicos</Link>
                        <Link as={RouterLink} to={"/treasure"} _hover={{ color: "tomato", transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Pilha de tesouro</Link>
                    </Box>
                    <Box color={"white"} fontFamily={'Cinzel'} width={"50%"} height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                        <Text fontWeight={"bold"} marginBottom={5}>CONTATO</Text>
                        <Link as={RouterLink} to={"https://www.linkedin.com/in/matheus-santos-aa31a823a/"} _hover={{ color: "tomato", transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Linkedin</Link>
                        <Link as={RouterLink} to={"https://github.com/Fkmatheus"} _hover={{ color: "tomato", transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>GitHub</Link>
                    </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Image src={roll20Icon} width={"300px"}></Image>
                </Box>
            </Flex>
        </>
    )
}