import { Flex, Text, Box, Image } from '@chakra-ui/react';
import iconFooter from "../../img/footerlogo.png";
import roll20Icon from "../../img/roll20.png";

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
                        <Text _hover={{ transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Objetos de arte</Text>
                        <Text _hover={{ transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Gemas</Text>
                        <Text _hover={{ transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Itens mágicos</Text>
                        <Text _hover={{ transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Lista de magias</Text>
                        <Text _hover={{ transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Livros</Text>
                        <Text _hover={{ transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Pilha de tesouro</Text>
                    </Box>
                    <Box color={"white"} fontFamily={'Cinzel'} width={"50%"} height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                        <Text fontWeight={"bold"} marginBottom={5}>CONTATO</Text>
                        <Text _hover={{ transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>E-Mail</Text>
                        <Text _hover={{ transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Linkedin</Text>
                        <Text _hover={{ transform: "scale(1.2)", fontWeight: "bold", cursor: "pointer"}}>Discord</Text>
                    </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Image src={roll20Icon} width={"300px"}></Image>
                </Box>
            </Flex>
        </>
    )
}