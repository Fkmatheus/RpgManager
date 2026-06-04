import { Box, Flex } from "@chakra-ui/react";
import { ItemTableCard } from "../ItemTableCard/ItemTableCard";
import { Footer } from "../Footer/Footer";
import { useEffect, useState } from "react";
import type { Gem } from "../../types/Gem";
import { GemsService } from "../../services/gemsService";

export function GemsSection() {
  const [gems10, setGems10] = useState<Gem[]>([]);
  const [gems50, setGems50] = useState<Gem[]>([]);
  const [gems100, setGems100] = useState<Gem[]>([]);
  const [gems500, setGems500] = useState<Gem[]>([]);
  const [gems1000, setGems1000] = useState<Gem[]>([]);
  const [gems5000, setGems5000] = useState<Gem[]>([]);

  useEffect(() => {
    async function loadGems() {
      const data10 = await GemsService.getAll10Po();
      setGems10(data10);

      const data50 = await GemsService.getAll50Po();
      setGems50(data50);

      const data100 = await GemsService.getAll100Po();
      setGems100(data100);

      const data500 = await GemsService.getAll500Po();
      setGems500(data500);

      const data1000 = await GemsService.getAll1000Po();
      setGems1000(data1000);

      const data5000 = await GemsService.getAll5000Po();
      setGems5000(data5000);
    }

    loadGems();
  }, []);
  return (
    <>
      <Flex height={"200vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        flexDirection={"column"}
        marginLeft={"3%"}
        fontFamily={'Cinzel'}>

        <Box
          marginTop={"2%"}
          marginLeft={"5%"}
          width={"90%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard tableName='Gemas [10po]' data={gems10} type='Gemas' dice="D12" width="32%" />
          <ItemTableCard tableName='Gemas [50po]' data={gems50} type='Gemas' dice="D12" width="32%" />
          <ItemTableCard tableName='Gemas [100po]' data={gems100} type='Gemas' dice="D10" width="32%" />

        </Box>

        <Box
          marginTop={"5%"}
          marginLeft={"5%"}
          width={"90%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard tableName='Gemas [500po]' data={gems500} type='Gemas' dice="D8" width="32%" height="52vh" />
          <ItemTableCard tableName='Gemas [1000po]' data={gems1000} type='Gemas' dice="D6" width="32%" height="52vh" />
          <ItemTableCard tableName='Gemas [5000po]' data={gems5000} type='Gemas' dice="D4" width="32%" height="52vh" />

        </Box>
        <Footer />
      </Flex>
    </>
  )
}