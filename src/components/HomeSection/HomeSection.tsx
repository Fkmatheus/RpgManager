import { Box, Flex, Text } from "@chakra-ui/react";

export function HomeSection() {
  return (
    <>
      <Flex
        height={"100vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        justifyContent={"center"}
        marginLeft={"15%"}
      >
        <Flex width={"95%"} justifyContent={"center"}>
          <Box display={"flex"} flexDirection={"row"} width={"90%"} justifyContent={"center"}>
            <Box
              marginTop={3}
              border={"solid 1px black"}
              width={"60%"}
              height={"80vh"}
            ></Box>
            <Box
              marginTop={3}
              marginLeft={5}
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              width={"40%"}
              height={"80vh"}
            >
              <Box
                border={"solid 1px black"}
                height={"38vh"}
                width={"100%"}
              ></Box>
              <Box
                border={"solid 1px black"}
                height={"38vh"}
                width={"100%"}
              ></Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
