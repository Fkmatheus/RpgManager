import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";
import { FONT_SIZE_TABLE, FONT_SIZE_TEXT } from "../../helpers/globalFont";
import { GiScrollUnfurled } from "react-icons/gi";
import { SpellCard } from '../SpellCard/SpellCard';
import { useEffect, useState } from "react";
import type { SpellCardProps } from "../../types/Spells";
import { SpellsService } from "../../services/spellsService";
import { FaFilter, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";

export function SpellsSection() {
  const [magicSpells, setMagicSpells] = useState<SpellCardProps[]>([]);
  const [filterBarSelect, setFilterBarSelect] = useState<boolean>(true);
  const [enableScroll, setEnableScroll] = useState<boolean>(false);

  useEffect(() => {
    async function loadMagicSpells() {
      const spells = await SpellsService.getAllSpells();
      setMagicSpells(spells);

    }

    loadMagicSpells();
  }, []);
  return (
    <Flex height={"100%"}
      width={"100%"}
      backgroundColor={"gray.900"}
      flexDirection={"column"}
      marginLeft={"3%"}
      fontFamily={'Cinzel'}>


      <Box marginLeft={"5%"} borderRadius={"20px"} marginTop={"2.5%"} minHeight={"110vh"} width={"92%"} backgroundColor={"#161616"}>
        {filterBarSelect && (
          <Box position="sticky" top="0" zIndex="1000" gap={"20px"} padding={"20px"} display={"flex"} flexDirection={"row"} borderRadius={"20px"} border={"1px solid #202020"} marginTop={"2.5%"} marginLeft={"4%"} height={"20vh"} width={"92%"} backgroundColor={"#111111"}>

            <Box display={"flex"} flexDirection={"column"} gap={"10px"} width={"20%"}>
              <Text color={"white"} fontSize={FONT_SIZE_TEXT}>Nome da mágia</Text>
              <Input borderColor={"#202020"}></Input>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={"10px"} width={"20%"}>
              <Text color={"white"} fontSize={FONT_SIZE_TEXT}>Classe</Text>
              <Select borderColor={"#202020"} fontSize={FONT_SIZE_TABLE} color={"white"}>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Selecione uma classe</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="bard">Bardo</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="wizard">Bruxo</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="cleric">Clérigo</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="druid">Druida</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="sorcerer">Feiticeiro</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="mage">Mago</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="paladin">Paladino</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="ranger">Patrulheiro</option>
              </Select>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={"10px"} width={"20%"}>
              <Text color={"white"} fontSize={FONT_SIZE_TEXT}>Escola</Text>
              <Select borderColor={"#202020"} fontSize={FONT_SIZE_TABLE} color={"white"}>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Selecione uma Escola</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Adivinhação</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Abjuração</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Encantamento</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Necromancia</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Ilusão</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Conjuração</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Evocação</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Transmutação</option>

              </Select>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={"10px"} width={"20%"}>
              <Text color={"white"} fontSize={FONT_SIZE_TEXT}>Nível</Text>
              <Select borderColor={"#202020"} fontSize={FONT_SIZE_TABLE} color={"white"}>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="">Selecione um Nível</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="1">1º</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="2">2º</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="3">3º</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="4">4º</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="5">5º</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="6">6º</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="7">7º</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="8">8º</option>
                <option style={{ backgroundColor: "#111111", color: "white", fontSize: FONT_SIZE_TABLE }} value="9">9º</option>

              </Select>
            </Box>

            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"10%"}>
              <Box
                color={"white"}
                height={"12vh"}
                width={"100%"}
                textAlign={"center"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                cursor={"pointer"}
                _hover={{ textColor: "tomato", fontWeight: "bold" }}
              >

                <GiScrollUnfurled size={60} style={{ fontSize: "clamp(38px, 2vw, 50px)" }} />

              </Box>
            </Box>


          </Box>
        )}

        <Box gap={3} display={"flex"} flexWrap="wrap" borderTop={"2px solid tomato"} marginLeft={"4%"} borderRadius={"20px"} marginTop={"2.5%"} minHeight={"80vh"} width={"92%"} backgroundColor={"#111111"}>

          {magicSpells.map((spell, index) => (
            <SpellCard
              key={index}
              school={spell.school}
              title={spell.title}
              nivel={spell.nivel}
              description={spell.description}
              timeConjuration={spell.timeConjuration}
              alcance={spell.alcance}
              componentes={spell.componentes}
              duration={spell.duration}
              ritual={spell.ritual}
              bard={spell.bard}
              wizard={spell.wizard}
              cleric={spell.cleric}
              druid={spell.druid}
              sorcerer={spell.sorcerer}
              mage={spell.mage}
              paladin={spell.paladin}
              ranger={spell.ranger}
              enableScroll={enableScroll}
            />
          ))}
        </Box>
      </Box>

      <Box position="fixed"
        bottom="30px"
        right="30px"
        zIndex={2000}
        display="flex"
        flexDirection="row"
        gap="10px">

        <Box
          width="60px"
          height="60px"
          borderRadius="50%"
          backgroundColor="#111111"
          border="2px solid tomato"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          transition="0.2s"
          _hover={{
            transform: "scale(1.1)",
            color: "tomato",
          }}
          onClick={() => setFilterBarSelect(!filterBarSelect)}
        >
          {filterBarSelect ? (
            <FaFilter size={28} color="white" />   // ativo (verde)
          ) : (
            <FaFilterCircleXmark size={28} color="#6b7280" /> // inativo (cinza)
          )}
        </Box>

        <Box
          width="60px"
          height="60px"
          borderRadius="50%"
          backgroundColor="#111111"
          border="2px solid #d7b661"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          transition="0.2s"
          _hover={{ transform: "scale(1.1)", color: "#d7b661" }}
          onClick={() => setEnableScroll(!enableScroll)}
          title="Habilitar/Desabilitar Scroll"
        >
          {enableScroll ? (
            <FaToggleOn size={28} color="#4ade80" />   // verde = ativo
          ) : (
            <FaToggleOff size={28} color="#9ca3af" />  // cinza = inativo
          )}
        </Box>

      </Box>

      <Footer />
    </Flex>
  )
}