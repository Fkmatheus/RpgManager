import { Box, Flex } from '@chakra-ui/react';
import { Footer } from "../Footer/Footer";
import { ItemTableCard } from '../ItemTableCard/ItemTableCard';
import type { artObj } from '../../types/ArtObj';
import { useEffect, useState } from 'react';
import { ObjArtService } from "../../services/artObjService"

export function ArtObjectsSection() {
  const [art25, setArt25] = useState<artObj[]>([]);
  const [art250, setArt250] = useState<artObj[]>([]);
  const [art750, setArt750] = useState<artObj[]>([]);
  const [art2500, setArt2500] = useState<artObj[]>([]);
  const [art7500, setArt7500] = useState<artObj[]>([]);

  useEffect(() => {
    async function loadArts() {
      const data25 = await ObjArtService.getAll25Po();
      setArt25(data25);

      const data250 = await ObjArtService.getAll250Po();
      setArt250(data250);

      const data750 = await ObjArtService.getAll750Po();
      setArt750(data750);

      const data2500 = await ObjArtService.getAll2500Po();
      setArt2500(data2500);

      const data7500 = await ObjArtService.getAll7500Po();
      setArt7500(data7500);

    }

    loadArts();
  }, []);
  return (
    <>
      <Flex
        height={"285vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        flexDirection={"column"}
        marginLeft={"3%"}
        fontFamily={'Cinzel'}
      >
        <Box
          marginTop={"2%"}
          marginLeft={"5%"}
          width={"90%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard tableName='Objetos de arte [25po]' data={art25} dice='D10' type='Objetos' />
          <ItemTableCard tableName='Objetos de arte [250po]' data={art250} dice='D10' type='Objetos' />

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
          <ItemTableCard tableName='Objetos de arte [750po]' data={art750} dice='D10' type='Objetos' />
          <ItemTableCard tableName='Objetos de arte [2500po]' data={art2500} dice='D10' type='Objetos' />

        </Box>

        <Box
          marginTop={"5%"}
          marginLeft={"5%"}
          width={"90%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
        >
          <ItemTableCard tableName='Objetos de arte [7500po]' data={art7500} type='Objetos' dice='D8' />
        </Box>
        <Footer />
      </Flex>
    </>
  );
}
