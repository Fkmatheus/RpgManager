import { Box, Flex } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";

export function ArtObjectsSection() {
  return (
    <>
      <Flex
        height={"200vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        flexDirection={"column"}
        marginLeft={"3%"}
      >
        <Box
          marginTop={"5%"}
          marginLeft={"10%"}
          width={"85%"}
          height={"60vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box width={"48%"} height={"60vh"} border={"solid 1px black"}></Box>
          <Box width={"48%"} height={"60vh"} border={"solid 1px black"}></Box>
        </Box>
        <Box
          marginTop={"5%"}
          marginLeft={"10%"}
          width={"85%"}
          height={"60vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box width={"48%"} height={"60vh"} border={"solid 1px black"}></Box>
          <Box width={"48%"} height={"60vh"} border={"solid 1px black"}></Box>
        </Box>
        <Box>
          <Box></Box>
        </Box>
        <Footer/>
      </Flex>
    </>
  );
}
