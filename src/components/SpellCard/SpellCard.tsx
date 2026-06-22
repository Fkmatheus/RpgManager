import { Box, Text } from "@chakra-ui/react";
import { FONT_SIZE_MEDIUM_TEXT, FONT_SIZE_SUBTITLE, FONT_SIZE_TABLE, FONT_SIZE_TEXT, FONT_SIZE_TITLE } from "../../helpers/globalFont";
import type { SpellCardProps } from "../../types/Spells";

function schoolEnglish(school: string) {
  switch (true) {
    case school.includes("Encantamento"):
      return 'enchantment';

    case school.includes("Abjuração"):
      return 'abjuration';

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

export function SpellCard({ school, alcance, componentes, description, duration, timeConjuration, title, nivel }: SpellCardProps) {
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

      <Box display={"flex"} flexDirection={"column"} gap={2} width={"95%"} height={"57%"} >
        <Text marginTop={"5%"} marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>• Tempo de conjuração: <span>{timeConjuration}</span></Text>
        <Text marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>• Alcance: <span>{alcance}</span></Text>
        <Text marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>• Componentes: <span>{componentes}</span></Text>
        <Text marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>• Duração: <span>{duration}</span></Text>
        <Text whiteSpace="pre-line" noOfLines={9} marginTop={"5%"} marginLeft={"10%"} gap={10} fontSize={FONT_SIZE_TEXT}>{description}</Text>
      </Box>
    </Box>
  )
}