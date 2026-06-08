import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { TreasureSection } from "../components/TreasureSection/TreasureSection";

export function Treasure() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"}>
        <Header />
        <TreasureSection />
      </Box>
    </>
  );
}
