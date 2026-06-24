import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { CreateSpellSection } from "../components/CreateSpellSection/CreateSpellSection";

export function CreateSpell() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"}>
        <Header />
        <CreateSpellSection />
      </Box>
    </>
  );
}
