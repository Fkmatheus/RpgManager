import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { GemsSection } from "../components/GemsSection/GemsSection";

export function Gems() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"}>
        <Header />
        <GemsSection />
      </Box>
    </>
  );
}
