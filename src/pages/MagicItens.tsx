import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { MagicItensSection } from '../components/MagicItensSection/MagicItensSection';

export function MagicItens() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"}>
        <Header />
        <MagicItensSection />
      </Box>
    </>
  );
}