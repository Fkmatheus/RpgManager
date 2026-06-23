import { Box, Text } from "@chakra-ui/react";
import { FONT_SIZE_MEDIUM_TEXT, FONT_SIZE_SUBTITLE, FONT_SIZE_TABLE, FONT_SIZE_TEXT, FONT_SIZE_TITLE } from "../../helpers/globalFont";

interface SpellCardProps {
  school: string;
  title: string;
  description: string;
  nivel: string;
  timeConjuration: string;
  alcance: string;
  componentes: string;
  duration: string;
  ritual: boolean;
  bard: boolean;
  wizard: boolean;
  cleric: boolean;
  druid: boolean;
  sorcerer: boolean;
  mage: boolean;
  paladin: boolean;
  ranger: boolean;
  enableScroll: boolean;
}

function schoolEnglish(school: string) {
  switch (true) {
    case school.includes("Encantamento"):
      return 'enchantment';

    case school.includes("Abjuração"):
      return 'abjuration';

    case school.includes("Conjuração"):
      return 'conjuration';

    case school.includes("Adivinhação"):
      return 'divination';

    case school.includes("Evocação"):
      return 'evocation';

    case school.includes("Ilusão"):
      return 'illusion';

    case school.includes("Necromancia"):
      return 'necromancy';

    case school.includes("Transmutação"):
      return 'transmutation';

  }
}

export function SpellCard({ school, alcance, componentes, description, duration, timeConjuration, title, nivel, enableScroll }: SpellCardProps) {
  return (
    <Box
      width="48%"
      height="105vh"
      display="flex"
      flexDirection={"column"}
      color={"#d7b661"}
      marginLeft={2}
      cursor={"pointer"}
      _hover={{
        transform: "scale(1.04)",
      }}
      sx={{
        fontFamily: "'Berry Rotunda', sans-serif",
        backgroundImage: `url('/img/Escolas/${schoolEnglish(school)}.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <Box width={"100%"}>
        <Box display={"flex"} flexDirection={"column"} marginTop={"22%"} width={"100%"} height={"10vh"} justifyContent={"center"} alignItems={"center"}>
          <Text fontSize={FONT_SIZE_SUBTITLE}>{title}</Text>
          <Text fontSize={FONT_SIZE_TABLE} display={"flex"} gap={2}><span>{nivel}º</span>nível de <span>{school}</span></Text>
        </Box>
      </Box>

      <Box gap={2} marginLeft={"8%"} width={"85%"} borderBottom={"2px solid #d7b661"}>
        <Text fontSize={FONT_SIZE_MEDIUM_TEXT}>Descrição</Text>
      </Box>

      <Box overflowY={enableScroll ? "auto" : "hidden"}
        sx={{
          scrollbarWidth: "thin", // Firefox
          scrollbarColor: "rgba(215, 182, 97, 0.4) transparent",

          "&::-webkit-scrollbar": {
            width: "6px",
          },

          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(215, 182, 97, 0.4)",
            borderRadius: "10px",
            border: "1px solid rgba(0,0,0,0.2)",
          },

          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(215, 182, 97, 0.7)",
          },
        }} display={"flex"} flexDirection={"column"} gap={2} width={"95%"} height={"57%"} >
        <Text marginTop={"5%"} marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>• Tempo de conjuração: <span>{timeConjuration}</span></Text>
        <Text marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>• Alcance: <span>{alcance}</span></Text>
        <Text marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>• Componentes: <span>{componentes}</span></Text>
        <Text marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>• Duração: <span>{duration}</span></Text>
        <Text whiteSpace="pre-line" marginTop={"5%"} marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>{description}</Text>
      </Box>
    </Box>
  )
}