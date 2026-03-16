import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../img/logo.png";


export function Header() {
	return (
		<>
			<Flex position="fixed" fontFamily={'Cinzel'} width={"17%"} height={"100vh"} background={"red.600"} flexDirection={"column"} borderRight={"solid black 1px"} >

				<Flex marginTop={5} flexDirection={"row"} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
					<Text fontSize={25} textColor={"white"} fontWeight={"bold"}>D&D Manager</Text>
				</Flex>

				<Flex cursor={"pointer"} gap={0} fontSize={22} padding={0} textColor={"black"} flexDirection={"column"} alignItems={"center"}>
					<Box  borderTop={"solid black 1px"} borderBottom={"solid black 1px"} marginTop={"20%"} height={"12vh"} width={"100%"} textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"} _hover={{ textColor: "white", fontWeight: "bold", backgroundColor: "red.700" }}>
						<Link _hover={{ textDecoration: "none" }} as={RouterLink} to="/">Home</Link>
					</Box>
					<Box borderBottom={"solid black 1px"} height={"12vh"} width={"100%"} textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"} _hover={{ textColor: "white", fontWeight: "bold", backgroundColor: "red.700" }}>
						<Link as={RouterLink} _hover={{ textDecoration: "none" }} to="/test">Magias</Link>
					</Box>
					<Box borderBottom={"solid black 1px"} height={"12vh"} width={"100%"} textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"} _hover={{ textColor: "white", fontWeight: "bold", backgroundColor: "red.700" }}>
						<Link as={RouterLink} _hover={{ textDecoration: "none" }} to="/test">Tesouros</Link>
					</Box>
					<Box>
						<Image marginTop={10} src={logo} width={250} />
					</Box>
				</Flex>

			</Flex>
		</>
	)
}