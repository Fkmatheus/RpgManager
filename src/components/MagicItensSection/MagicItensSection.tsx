import { Box, Flex } from "@chakra-ui/react";
import { ItemTableCard } from "../ItemTableCard/ItemTableCard";

const magic_items_table_a = [
    { id: 1, dice: "01–50", name: "Poção de cura" },
    { id: 2, dice: "51–60", name: "Pergaminho de magia (truque)" },
    { id: 3, dice: "61–70", name: "Poção de escalar" },
    { id: 4, dice: "71–90", name: "Pergaminho de magia (1° nível)" },
    { id: 5, dice: "91–94", name: "Pergaminho de magia (2° nível)" },
    { id: 6, dice: "95–98", name: "Poção de cura maior" },
    { id: 7, dice: "99", name: "Mochila de carga" },
    { id: 8, dice: "00", name: "Globo de fluxo" },
];

const magic_items_table_b = [
  { id: 1, dice: "01–15", name: "Poção de cura maior" },
  { id: 2, dice: "16–22", name: "Poção de sopro de fogo" },
  { id: 3, dice: "23–29", name: "Poção de resistência" },
  { id: 4, dice: "30–34", name: "Munição +1" },
  { id: 5, dice: "35–39", name: "Poção de amizade animal" },
  { id: 6, dice: "40–44", name: "Poção de força do gigante da colina" },
  { id: 7, dice: "45–49", name: "Poção de aumentar" },
  { id: 8, dice: "50–54", name: "Poção de respirar na água" },
  { id: 9, dice: "55–59", name: "Pergaminho de magia (2° nível)" },
  { id: 10, dice: "60–64", name: "Pergaminho de magia (3° nível)" },
  { id: 11, dice: "65–67", name: "Mochila de carga" },
  { id: 12, dice: "68–70", name: "Unguento de Keoghtom" },
  { id: 13, dice: "71–73", name: "Óleo escorregadio" },
  { id: 14, dice: "74–75", name: "Pó do desaparecimento" },
  { id: 15, dice: "76–77", name: "Pó da seca" },
  { id: 16, dice: "78–79", name: "Pó de espirrar e tossir" },
  { id: 17, dice: "80–81", name: "Gema elemental" },
  { id: 18, dice: "82–83", name: "Filtro do amor" },
  { id: 19, dice: "84", name: "Jarro de alquimia" },
  { id: 20, dice: "85", name: "Capa de respirar na água" },
  { id: 21, dice: "86", name: "Manto da arraia" },
  { id: 22, dice: "87", name: "Globo de fluxo" },
  { id: 23, dice: "88", name: "Óculos noturnos" },
  { id: 24, dice: "89", name: "Elmo de compreensão de idiomas" },
  { id: 25, dice: "90", name: "Bastão imóvel" },
  { id: 26, dice: "91", name: "Lanterna de revelação" },
  { id: 27, dice: "92", name: "Armadura do marinheiro" },
  { id: 28, dice: "93", name: "Armadura de mitral" },
  { id: 29, dice: "94", name: "Poção de envenenamento" },
  { id: 30, dice: "95", name: "Anel de natação" },
  { id: 31, dice: "96", name: "Robe dos itens úteis" },
  { id: 32, dice: "97", name: "Corda de escalada" },
  { id: 33, dice: "98", name: "Sela do cavaleiro" },
  { id: 34, dice: "99", name: "Varinha de detectar magia" },
  { id: 35, dice: "00", name: "Varinha de segredos" },
];

const magic_items_table_c = [
  { id: 1, dice: "01–15", name: "Poção de cura maior" },
  { id: 2, dice: "16–22", name: "Pergaminho de magia (4° nível)" },
  { id: 3, dice: "23–27", name: "Munição +2" },
  { id: 4, dice: "28–32", name: "Poção de clarividência" },
  { id: 5, dice: "33–37", name: "Poção de encolher" },
  { id: 6, dice: "38–42", name: "Poção de forma gasosa" },
  { id: 7, dice: "43–47", name: "Poção de força do gigante do gelo" },
  { id: 8, dice: "48–52", name: "Poção de força do gigante de pedra" },
  { id: 9, dice: "53–57", name: "Poção de heroísmo" },
  { id: 10, dice: "58–62", name: "Poção de invulnerabilidade" },
  { id: 11, dice: "63–67", name: "Poção de ler mentes" },
  { id: 12, dice: "68–72", name: "Pergaminho de magia (5° nível)" },
  { id: 13, dice: "73–75", name: "Elixir de saúde" },
  { id: 14, dice: "76–78", name: "Óleo de forma etérea" },
  { id: 15, dice: "79–81", name: "Poção de força do gigante do fogo" },
  { id: 16, dice: "82–84", name: "Pena de Quaal" },
  { id: 17, dice: "85–87", name: "Pergaminho de proteção" },
  { id: 18, dice: "88–89", name: "Saco de feijões" },
  { id: 19, dice: "90–91", name: "Contas de força" },
  { id: 20, dice: "92", name: "Carrilhão de abertura" },
  { id: 21, dice: "93", name: "Decantador de água infinita" },
  { id: 22, dice: "94", name: "Olhos de visão momentânea" },
  { id: 23, dice: "95", name: "Barco dobrável" },
  { id: 24, dice: "96", name: "Sacola prestativa de Heward" },
  { id: 25, dice: "97", name: "Ferraduras da velocidade" },
  { id: 26, dice: "98", name: "Colar de bolas de fogo" },
  { id: 27, dice: "99", name: "Periapto de saúde" },
  { id: 28, dice: "00", name: "Pedras de mensagem" },
];

const magic_items_table_d = [
  { id: 1, dice: "01–20", name: "Poção de cura suprema" },
  { id: 2, dice: "21–30", name: "Poção de invisibilidade" },
  { id: 3, dice: "31–40", name: "Poção de velocidade" },
  { id: 4, dice: "41–50", name: "Pergaminho de magia (6° nível)" },
  { id: 5, dice: "51–57", name: "Pergaminho de magia (7° nível)" },
  { id: 6, dice: "58–62", name: "Munição +3" },
  { id: 7, dice: "63–67", name: "Óleo de precisão" },
  { id: 8, dice: "68–72", name: "Poção de voo" },
  { id: 9, dice: "73–77", name: "Poção de força do gigante das nuvens" },
  { id: 10, dice: "78–82", name: "Poção de longevidade" },
  { id: 11, dice: "83–87", name: "Poção de vitalidade" },
  { id: 12, dice: "88–92", name: "Pergaminho de magia (8° nível)" },
  { id: 13, dice: "93–95", name: "Ferraduras de zéfiro" },
  { id: 14, dice: "96–98", name: "Pigmentos maravilhosos de Nolzur" },
  { id: 15, dice: "99", name: "Bolsa devoradora" },
  { id: 16, dice: "00", name: "Buraco portátil" },
];

const magic_items_table_e = [
  { id: 1, dice: "01–30", name: "Pergaminho de magia (8° nível)" },
  { id: 2, dice: "31–55", name: "Poção de força do gigante da tempestade" },
  { id: 3, dice: "56–70", name: "Poção de cura suprema" },
  { id: 4, dice: "71–85", name: "Pergaminho de magia (9° nível)" },
  { id: 5, dice: "86–93", name: "Solvente universal" },
  { id: 6, dice: "94–98", name: "Flecha assassina" },
  { id: 7, dice: "99–00", name: "Cola soberana" },
];

const magic_items_table_f = [
  { id: 1, dice: "01–15", name: "Arma +1" },
  { id: 2, dice: "16–18", name: "Escudo +1" },
  { id: 3, dice: "19–21", name: "Escudo sentinela" },
  { id: 4, dice: "22–23", name: "Amuleto de proteção contra detecção e localização" },
  { id: 5, dice: "24–25", name: "Botas élficas" },
  { id: 6, dice: "26–27", name: "Botas de caminhar e saltar" },
  { id: 7, dice: "28–29", name: "Braçadeiras de arquearia" },
  { id: 8, dice: "30–31", name: "Broche do escudo" },
  { id: 9, dice: "32–33", name: "Vassoura voadora" },
  { id: 10, dice: "34–35", name: "Manto élfico" },
  { id: 11, dice: "36–37", name: "Manto de proteção" },
  { id: 12, dice: "38–39", name: "Manoplas de força do ogro" },
  { id: 13, dice: "40–41", name: "Chapéu de disfarce" },
  { id: 14, dice: "42–43", name: "Azagaia de relâmpago" },
  { id: 15, dice: "44–45", name: "Pérola do poder" },
  { id: 16, dice: "46–47", name: "Bastão guardião de pactos +1" },
  { id: 17, dice: "48–49", name: "Sandálias de patas de aranha" },
  { id: 18, dice: "50–51", name: "Cajado da víbora" },
  { id: 19, dice: "52–53", name: "Cajado da píton" },
  { id: 20, dice: "54–55", name: "Espada da vingança" },
  { id: 21, dice: "56–57", name: "Tridente de comandar peixes" },
  { id: 22, dice: "58–59", name: "Varinha de misseis mágicos" },
  { id: 23, dice: "60–61", name: "Varinha do arcano de guerra +1" },
  { id: 24, dice: "62–63", name: "Varinha de teia" },
  { id: 25, dice: "64–65", name: "Arma de alerta" },
  { id: 26, dice: "66", name: "Armadura de adamante (cota de malha)" },
  { id: 27, dice: "67", name: "Armadura de adamante (camisão de malha)" },
  { id: 28, dice: "68", name: "Armadura de adamante (brunea)" },
  { id: 29, dice: "69", name: "Bolsa de truques (cinza)" },
  { id: 30, dice: "70", name: "Bolsa de truques (ferrugem)" },
  { id: 31, dice: "71", name: "Bolsa de truques (bronze)" },
  { id: 32, dice: "72", name: "Botas do inverno" },
  { id: 33, dice: "73", name: "Diadema da destruição" },
  { id: 34, dice: "74", name: "Baralho das ilusões" },
  { id: 35, dice: "75", name: "Garrafa da fumaça eterna" },
  { id: 36, dice: "76", name: "Olhos do encantamento" },
  { id: 37, dice: "77", name: "Olhos de águia" },
  { id: 38, dice: "78", name: "Estátua de poderes incríveis (corvo de prata)" },
  { id: 39, dice: "79", name: "Gema da luminosidade" },
  { id: 40, dice: "80", name: "Luvas de apanhar projéteis" },
  { id: 41, dice: "81", name: "Luvas de nadar e escalar" },
  { id: 42, dice: "82", name: "Luvas do ladrão" },
  { id: 43, dice: "83", name: "Tiara do intelecto" },
  { id: 44, dice: "84", name: "Elmo de telepatia" },
  { id: 45, dice: "85", name: "Instrumento dos bardos (alaúde de Doss)" },
  { id: 46, dice: "86", name: "Instrumento dos bardos (bandolim de Fochlucan)" },
  { id: 47, dice: "87", name: "Instrumento dos bardos (citara de Mac-Fuimidh)" },
  { id: 48, dice: "88", name: "Medalhão de pensamentos" },
  { id: 49, dice: "89", name: "Colar de adaptação" },
  { id: 50, dice: "90", name: "Periapto da cicatrização" },
  { id: 51, dice: "91", name: "Flauta assombrada" },
  { id: 52, dice: "92", name: "Flauta dos esgotos" },
  { id: 53, dice: "93", name: "Anel de saltar" },
  { id: 54, dice: "94", name: "Anel de escudo mental" },
  { id: 55, dice: "95", name: "Anel de calor" },
  { id: 56, dice: "96", name: "Anel de andar na água" },
  { id: 57, dice: "97", name: "Aljava de Ehlonna" },
  { id: 58, dice: "98", name: "Pedra da boa sorte" },
  { id: 59, dice: "99", name: "Leque do vento" },
  { id: 60, dice: "00", name: "Botas aladas" },
];

export function MagicItensSection() {
    return (
        <>
            <Flex height={"250vh"}
                width={"100%"}
                backgroundColor={"gray.900"}
                flexDirection={"column"}
                marginLeft={"3%"}
                fontFamily={'Cinzel'}>
                    

                <Box marginTop={"5%"}
                    marginLeft={"5%"}
                    width={"90%"}
                    height={"62vh"}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}>

                    <ItemTableCard tableName='Tabela de item mágico A' data={magic_items_table_a} type='Itens' dice="D100" width="32%" height="55vh" />
                    <ItemTableCard tableName='Tabela de item mágico B' data={magic_items_table_b} type='Itens' dice="D100" width="32%" height="55vh"/>
                    <ItemTableCard tableName='Tabela de item mágico C' data={magic_items_table_c} type='Itens' dice="D100" width="32%" height="55vh"/>

                </Box>

                <Box marginTop={"2%"}
                    marginLeft={"5%"}
                    width={"90%"}
                    height={"62vh"}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}>

                    <ItemTableCard tableName='Tabela de item mágico D' data={magic_items_table_d} type='Itens' dice="D100" width="32%" height="53vh" />
                    <ItemTableCard tableName='Tabela de item mágico E' data={magic_items_table_e} type='Itens' dice="D100" width="32%" height="53vh"/>
                    <ItemTableCard tableName='Tabela de item mágico F' data={magic_items_table_f} type='Itens' dice="D100" width="32%" height="53vh"/>

                </Box>


            </Flex>
        </>
    )
}