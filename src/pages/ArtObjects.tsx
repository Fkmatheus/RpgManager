import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { ArtObjectsSection } from "../components/ArtObjectsSection/ArtObjectsSection";

export function ArtObjects() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"}>
        <Header />
        <ArtObjectsSection/>
      </Box>
    </>
  );
}
