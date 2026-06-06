import { Box, Flex } from "@chakra-ui/react";
import { ItemTableCard } from "../ItemTableCard/ItemTableCard";
import { Footer } from "../Footer/Footer";
import { useEffect, useState } from "react";
import type { magicItens } from "../../types/MagicItens";
import { MagicItensService } from "../../services/magicItensService";



export function MagicItensSection() {
  const [magicItemA, setMagicItemA] = useState<magicItens[]>([]);
  const [magicItemB, setMagicItemB] = useState<magicItens[]>([]);
  const [magicItemC, setMagicItemC] = useState<magicItens[]>([]);
  const [magicItemD, setMagicItemD] = useState<magicItens[]>([]);
  const [magicItemE, setMagicItemE] = useState<magicItens[]>([]);
  const [magicItemF, setMagicItemF] = useState<magicItens[]>([]);
  const [magicItemG, setMagicItemG] = useState<magicItens[]>([]);
  const [magicItemH, setMagicItemH] = useState<magicItens[]>([]);
  const [magicItemI, setMagicItemI] = useState<magicItens[]>([]);

  useEffect(() => {
    async function loadMagicItens() {
      const dataA = await MagicItensService.getAllMagicItensA();
      setMagicItemA(dataA);

      const dataB = await MagicItensService.getAllMagicItensB();
      setMagicItemB(dataB);

      const dataC = await MagicItensService.getAllMagicItensC();
      setMagicItemC(dataC);

      const dataD = await MagicItensService.getAllMagicItensD();
      setMagicItemD(dataD);

      const dataE = await MagicItensService.getAllMagicItensE();
      setMagicItemE(dataE);

      const dataF = await MagicItensService.getAllMagicItensF();
      setMagicItemF(dataF);

      const dataG = await MagicItensService.getAllMagicItensG();
      setMagicItemG(dataG);

      const dataH = await MagicItensService.getAllMagicItensH();
      setMagicItemH(dataH);

      const dataI = await MagicItensService.getAllMagicItensI();
      setMagicItemI(dataI);

    }

    loadMagicItens();
  }, []);
  return (
    <>
      <Flex
        height={"250vh"}
        width={"100%"}
        backgroundColor={"gray.900"}
        flexDirection={"column"}
        marginLeft={"3%"}
        fontFamily={"Cinzel"}
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
          <ItemTableCard
            tableName="Tabela de item mágico A"
            data={magicItemA}
            type="Itens"
            dice="D100"
            width="32%"
            height="55vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico B"
            data={magicItemB}
            type="Itens"
            dice="D100"
            width="32%"
            height="55vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico C"
            data={magicItemC}
            type="Itens"
            dice="D100"
            width="32%"
            height="55vh"
          />
        </Box>

        <Box
          marginTop={"2%"}
          marginLeft={"5%"}
          width={"90%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard
            tableName="Tabela de item mágico D"
            data={magicItemD}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico E"
            data={magicItemE}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico F"
            data={magicItemF}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
        </Box>

        <Box
          marginTop={"2%"}
          marginLeft={"5%"}
          width={"90%"}
          height={"62vh"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ItemTableCard
            tableName="Tabela de item mágico G"
            data={magicItemG}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico H"
            data={magicItemH}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico I"
            data={magicItemI}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
        </Box>
        <Footer />
      </Flex>
    </>
  );
}
