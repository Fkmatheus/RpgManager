import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import icon from "../../img/icon.png";
import { FaBook, FaHome, FaMagic } from "react-icons/fa";
import { GiOpenTreasureChest } from "react-icons/gi";


export function Header() {
	return (
		<>
			<Flex position="fixed" fontFamily={'Cinzel'} width={"5%"} height={"100vh"} background={"#111111"} flexDirection={"column"} borderRight={"solid black 1px"} >

				<Flex marginTop={5} flexDirection={"row"} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
					<Text fontSize={25} textColor={"white"} fontWeight={"bold"}></Text>
				</Flex>

				<Flex cursor={"pointer"} gap={0} fontSize={22} padding={0} textColor={"black"} flexDirection={"column"} alignItems={"center"}>
					<Box>
						<Box color={"gray"} marginTop={"20%"} height={"12vh"} width={"100%"} textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"} _hover={{ textColor: "tomato", fontWeight: "bold" }}>
							<Link _hover={{ textDecoration: "none" }} as={RouterLink} to="/"><FaHome size={40} /></Link>
						</Box>
						<Box color={"gray"} height={"12vh"} width={"100%"} textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"} _hover={{ textColor: "tomato", fontWeight: "bold" }}>
							<Link as={RouterLink} _hover={{ textDecoration: "none" }} to="/"><GiOpenTreasureChest size={40} /></Link>
						</Box>
						<Box color={"gray"} height={"12vh"} width={"100%"} textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"} _hover={{ textColor: "tomato", fontWeight: "bold" }}>
							<Link as={RouterLink} _hover={{ textDecoration: "none" }} to="/"><FaMagic size={40} /></Link>
						</Box>
						<Box color={"gray"} height={"12vh"} width={"100%"} textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"} _hover={{ textColor: "tomato", fontWeight: "bold" }}>
							<Link as={RouterLink} _hover={{ textDecoration: "none" }} to="/"><FaBook size={40} /></Link>
						</Box>
					</Box>
					<Box marginTop={"300%"}>
						<Image src={icon}></Image>
					</Box>
				</Flex>

			</Flex>
		</>
	)
}