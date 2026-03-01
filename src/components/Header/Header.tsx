import { background, Box, Flex, HStack, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../img/logo.png";

export function Header() {
	return (
		<>
			<Flex background={"tomato"} flexDirection={"row"} justifyContent={"space-between"}>

				<Flex flexDirection={"row"} alignItems={"center"}>
					<Image src={logo} width={100} />
					<Text fontSize={20} textColor={"white"} fontWeight={"bold"}>D&D Manager</Text>
				</Flex>

				<HStack spacing={6} fontSize={20} padding={10} textColor={"black"}>
					<Link as={RouterLink} _hover={{ textColor: "white", fontWeight: "bold"}} to="/">Home</Link>
					<Link as={RouterLink} _hover={{ textColor: "white", fontWeight: "bold"}} to="/test">Magias</Link>
					<Link as={RouterLink} _hover={{ textColor: "white", fontWeight: "bold"}} to="/test">Tesouros</Link>
					<Link as={RouterLink} _hover={{ textColor: "white", fontWeight: "bold"}} to="/test">Raças</Link>
					<Link as={RouterLink} _hover={{ textColor: "white", fontWeight: "bold"}} to="/test">Classes</Link>
					<Link as={RouterLink} _hover={{ textColor: "white", fontWeight: "bold"}} to="/test">Livros</Link>
				</HStack>

			</Flex>
		</>
	)
}