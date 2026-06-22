import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { SpellsSection } from "../components/SpellsSection/SpellsSection";

export function MagicSpells() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"}>
        <Header />
        <SpellsSection />
      </Box>
    </>
  );
}
