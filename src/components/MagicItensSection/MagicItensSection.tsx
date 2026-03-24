import { Box, Flex } from "@chakra-ui/react";
import { ItemTableCard } from "../ItemTableCard/ItemTableCard";
import { Footer } from "../Footer/Footer";

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
  {
    id: 4,
    dice: "22–23",
    name: "Amuleto de proteção contra detecção e localização",
  },
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
  {
    id: 46,
    dice: "86",
    name: "Instrumento dos bardos (bandolim de Fochlucan)",
  },
  {
    id: 47,
    dice: "87",
    name: "Instrumento dos bardos (citara de Mac-Fuimidh)",
  },
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

const magic_items_table_g = [
  { id: 1, dice: "01–11", name: "Arma +2" },
  { id: 2, dice: "12–14", name: "Estátua de poderes incríveis" },
  { id: 3, dice: "15", name: "Armadura de adamante (peitoral)" },
  { id: 4, dice: "16", name: "Armadura de adamante (cota de talas)" },
  { id: 5, dice: "17", name: "Amuleto de saúde" },
  { id: 6, dice: "18", name: "Armadura de vulnerabilidade" },
  { id: 7, dice: "19", name: "Escudo apanhador de flechas" },
  { id: 8, dice: "20", name: "Cinto dos anões" },
  { id: 9, dice: "21", name: "Cinturão de força do gigante da colina" },
  { id: 10, dice: "22", name: "Machado furioso" },
  { id: 11, dice: "23", name: "Botas de levitação" },
  { id: 12, dice: "24", name: "Botas de velocidade" },
  { id: 13, dice: "25", name: "Bacia de comandar elementais da água" },
  { id: 14, dice: "26", name: "Braceletes de defesa" },
  { id: 15, dice: "27", name: "Braseiro de comandar elementais do fogo" },
  { id: 16, dice: "28", name: "Capa do saltimbanco" },
  { id: 17, dice: "29", name: "Incensório de comandar elementais do ar" },
  { id: 18, dice: "30", name: "Cota de malha +1" },
  { id: 19, dice: "31", name: "Armadura da resistência (cota de malha)" },
  { id: 20, dice: "32", name: "Camisão de malha +1" },
  { id: 21, dice: "33", name: "Armadura da resistência (camisão de malha)" },
  { id: 22, dice: "34", name: "Manto de deslocamento" },
  { id: 23, dice: "35", name: "Manto do morcego" },
  { id: 24, dice: "36", name: "Cubo de força" },
  { id: 25, dice: "37", name: "Fortaleza instantânea de Daern" },
  { id: 26, dice: "38", name: "Adaga de envenenamento" },
  { id: 27, dice: "39", name: "Algemas dimensionais" },
  { id: 28, dice: "40", name: "Matadora de dragões" },
  { id: 29, dice: "41", name: "Malha élfica" },
  { id: 30, dice: "42", name: "Língua flamejante" },
  { id: 31, dice: "43", name: "Gema de visão" },
  { id: 32, dice: "44", name: "Matador de gigantes" },
  { id: 33, dice: "45", name: "Couro batido encantador" },
  { id: 34, dice: "46", name: "Elmo de teletransporte" },
  { id: 35, dice: "47", name: "Trombeta da destruição" },
  { id: 36, dice: "48", name: "Trombeta do Valhalla (prata e latão)" },
  { id: 37, dice: "49", name: "Instrumento dos bardos (mandolim de Canaith)" },
  { id: 38, dice: "50", name: "Instrumento dos bardos (lira de Cli)" },
  { id: 39, dice: "51", name: "Pedra iônica (prontidão)" },
  { id: 40, dice: "52", name: "Pedra iônica (proteção)" },
  { id: 41, dice: "53", name: "Pedra iônica (armazenamento)" },
  { id: 42, dice: "54", name: "Pedra iônica (sustento)" },
  { id: 43, dice: "55", name: "Faixas de ferro de Bilarro" },
  { id: 44, dice: "56", name: "Armadura de couro +1" },
  { id: 45, dice: "57", name: "Armadura de resistência (couro)" },
  { id: 46, dice: "58", name: "Maça do rompimento" },
  { id: 47, dice: "59", name: "Maça de destruição" },
  { id: 48, dice: "60", name: "Maça do terror" },
  { id: 49, dice: "61", name: "Manto de resistência à magia" },
  { id: 50, dice: "62", name: "Corrente de contas de oração" },
  { id: 51, dice: "63", name: "Periapto de proteção contra veneno" },
  { id: 52, dice: "64", name: "Anel de cativar animais" },
  { id: 53, dice: "65", name: "Anel de evasão" },
  { id: 54, dice: "66", name: "Anel de queda suave" },
  { id: 55, dice: "67", name: "Anel de ação livre" },
  { id: 56, dice: "68", name: "Anel de proteção" },
  { id: 57, dice: "69", name: "Anel de resistência" },
  { id: 58, dice: "70", name: "Anel de armazenar magia" },
  { id: 59, dice: "71", name: "Anel do aríete" },
  { id: 60, dice: "72", name: "Anel de visão de raio-X" },
  { id: 61, dice: "73", name: "Robe dos olhos" },
  { id: 62, dice: "74", name: "Bastão da obediência" },
  { id: 63, dice: "75", name: "Bastão guardião de pactos +2" },
  { id: 64, dice: "76", name: "Corda de estrangulamento" },
  { id: 65, dice: "77", name: "Brunea +1" },
  { id: 66, dice: "78", name: "Armadura de resistência (brunea)" },
  { id: 67, dice: "79", name: "Escudo +2" },
  { id: 68, dice: "80", name: "Escudo de atração de projéteis" },
  { id: 69, dice: "81", name: "Cajado de enfeitiçar" },
  { id: 70, dice: "82", name: "Cajado de cura" },
  { id: 71, dice: "83", name: "Cajado de enxame de insetos" },
  { id: 72, dice: "84", name: "Cajado das florestas" },
  { id: 73, dice: "85", name: "Cajado do definhamento" },
  { id: 74, dice: "86", name: "Pedra de comandar elementais da terra" },
  { id: 75, dice: "87", name: "Lâmina do sol" },
  { id: 76, dice: "88", name: "Espada do furto de vidas" },
  { id: 77, dice: "89", name: "Espada do sangramento" },
  { id: 78, dice: "90", name: "Bastão do tentáculo" },
  { id: 79, dice: "91", name: "Arma viciosa" },
  { id: 80, dice: "92", name: "Varinha de obrigação" },
  { id: 81, dice: "93", name: "Varinha de detecção de inimigos" },
  { id: 82, dice: "94", name: "Varinha de medo" },
  { id: 83, dice: "95", name: "Varinha de bolas de fogo" },
  { id: 84, dice: "96", name: "Varinha de relâmpagos" },
  { id: 85, dice: "97", name: "Varinha de paralisia" },
  { id: 86, dice: "98", name: "Varinha do arcano de guerra +2" },
  { id: 87, dice: "99", name: "Varinha das maravilhas" },
  { id: 88, dice: "00", name: "Asas voadoras" },
];

const magic_items_table_h = [
  { id: 1, dice: "01–10", name: "Arma +3" },
  { id: 2, dice: "11–12", name: "Amuleto dos planos" },
  { id: 3, dice: "13–14", name: "Tapete voador" },
  { id: 4, dice: "15–16", name: "Bola de cristal (versão muito rara)" },
  { id: 5, dice: "17–18", name: "Anel de regeneração" },
  { id: 6, dice: "19–20", name: "Anel de estrelas cadentes" },
  { id: 7, dice: "21–22", name: "Anel de telecinésia" },
  { id: 8, dice: "23–24", name: "Robe das cores cintilantes" },
  { id: 9, dice: "25–26", name: "Robe das estrelas" },
  { id: 10, dice: "27–28", name: "Bastão de absorção" },
  { id: 11, dice: "29–30", name: "Bastão de prontidão" },
  { id: 12, dice: "31–32", name: "Bastão de segurança" },
  { id: 13, dice: "33–34", name: "Bastão guardião de pactos +3" },
  { id: 14, dice: "35–36", name: "Cimitarra da velocidade" },
  { id: 15, dice: "37–38", name: "Escudo +3" },
  { id: 16, dice: "39–40", name: "Cajado do fogo" },
  { id: 17, dice: "41–42", name: "Cajado do frio" },
  { id: 18, dice: "43–44", name: "Cajado do poder" },
  { id: 19, dice: "45–46", name: "Cajado de ataque" },
  { id: 20, dice: "47–48", name: "Cajado de trovão e relâmpago" },
  { id: 21, dice: "49–50", name: "Espada decepadora" },
  { id: 22, dice: "51–52", name: "Varinha de metamorfose" },
  { id: 23, dice: "53–54", name: "Varinha do arcano de guerra +3" },
  { id: 24, dice: "55", name: "Armadura de adamante (meia-armadura)" },
  { id: 25, dice: "56", name: "Armadura de adamante (placas)" },
  { id: 26, dice: "57", name: "Escudo animado" },
  { id: 27, dice: "58", name: "Cinturão de força do gigante do fogo" },
  { id: 28, dice: "59", name: "Cinturão de força do gigante do frio (ou de pedra)" },
  { id: 29, dice: "60", name: "Peitoral +1" },
  { id: 30, dice: "61", name: "Armadura de resistência (peitoral)" },
  { id: 31, dice: "62", name: "Vela da invocação" },
  { id: 32, dice: "63", name: "Cota de malha +2" },
  { id: 33, dice: "64", name: "Camisão de malha +2" },
  { id: 34, dice: "65", name: "Manto da aranha" },
  { id: 35, dice: "66", name: "Espada dançarina" },
  { id: 36, dice: "67", name: "Armadura demoníaca" },
  { id: 37, dice: "68", name: "Brunea de escamas de dragão" },
  { id: 38, dice: "69", name: "Armadura anã" },
  { id: 39, dice: "70", name: "Arremessador anão" },
  { id: 40, dice: "71", name: "Garrafa do efreeti" },
  { id: 41, dice: "72", name: "Estátua de poderes incríveis (corcel de obsidiana)" },
  { id: 42, dice: "73", name: "Marca congelante" },
  { id: 43, dice: "74", name: "Elmo brilhante" },
  { id: 44, dice: "75", name: "Trombeta do Valhalla (bronze)" },
  { id: 45, dice: "76", name: "Instrumento dos bardos (harpa de Anstruth)" },
  { id: 46, dice: "77", name: "Pedra iônica (absorção)" },
  { id: 47, dice: "78", name: "Pedra iônica (agilidade)" },
  { id: 48, dice: "79", name: "Pedra iônica (fortitude)" },
  { id: 49, dice: "80", name: "Pedra iônica (intuição)" },
  { id: 50, dice: "81", name: "Pedra iônica (intelecto)" },
  { id: 51, dice: "82", name: "Pedra iônica (liderança)" },
  { id: 52, dice: "83", name: "Pedra iônica (força)" },
  { id: 53, dice: "84", name: "Armadura de couro +2" },
  { id: 54, dice: "85", name: "Manual da saúde corporal" },
  { id: 55, dice: "86", name: "Manual do bom exercício" },
  { id: 56, dice: "87", name: "Manual dos golens" },
  { id: 57, dice: "88", name: "Manual da rapidez de movimentos" },
  { id: 58, dice: "89", name: "Espelho do aprisionamento" },
  { id: 59, dice: "90", name: "Ladra das nove vidas" },
  { id: 60, dice: "91", name: "Arco do juramento" },
  { id: 61, dice: "92", name: "Brunea +2" },
  { id: 62, dice: "93", name: "Escudo de proteção contra magia" },
  { id: 63, dice: "94", name: "Cota de talas +1" },
  { id: 64, dice: "95", name: "Armadura de resistência (cota de talas)" },
  { id: 65, dice: "96", name: "Armadura de couro batido +1" },
  { id: 66, dice: "97", name: "Armadura de resistência (couro batido)" },
  { id: 67, dice: "98", name: "Tomo dos grandes pensamentos" },
  { id: 68, dice: "99", name: "Tomo de liderança e influência" },
  { id: 69, dice: "00", name: "Tomo da compreensão" },
];

const magic_items_table_i = [
  { id: 1, dice: "01–05", name: "Defensora" },
  { id: 2, dice: "06–10", name: "Martelo dos trovões" },
  { id: 3, dice: "11–15", name: "Lâmina da sorte" },
  { id: 4, dice: "16–20", name: "Espada de retaliação" },
  { id: 5, dice: "21–23", name: "Vingadora sagrada" },
  { id: 6, dice: "24–26", name: "Anel de invocação de djinni" },
  { id: 7, dice: "27–29", name: "Anel de invisibilidade" },
  { id: 8, dice: "30–32", name: "Anel de refletir magias" },
  { id: 9, dice: "33–35", name: "Bastão do grande poder" },
  { id: 10, dice: "36–38", name: "Cajado do arcano" },
  { id: 11, dice: "39–41", name: "Espada vorpal" },
  { id: 12, dice: "42–43", name: "Cinturão de força do gigante das nuvens" },
  { id: 13, dice: "44–45", name: "Peitoral +2" },
  { id: 14, dice: "46–47", name: "Cota de malha +3" },
  { id: 15, dice: "48–49", name: "Camisão de malha +3" },
  { id: 16, dice: "50–51", name: "Manto de invisibilidade" },
  { id: 17, dice: "52–53", name: "Bola de cristal (versão lendária)" },
  { id: 18, dice: "54–55", name: "Meia-armadura +1" },
  { id: 19, dice: "56–57", name: "Frasco de ferro" },
  { id: 20, dice: "58–59", name: "Armadura de couro +3" },
  { id: 21, dice: "60–61", name: "Armadura de placas +1" },
  { id: 22, dice: "62–63", name: "Robe do arquimago" },
  { id: 23, dice: "64–65", name: "Bastão de ressurreição" },
  { id: 24, dice: "66–67", name: "Brunea +1" },
  { id: 25, dice: "68–69", name: "Escaravelho da proteção" },
  { id: 26, dice: "70–71", name: "Cota de talas +2" },
  { id: 27, dice: "72–73", name: "Armadura de couro batido +2" },
  { id: 28, dice: "74–75", name: "Poço dos muitos mundos" },
  { id: 29, dice: "76", name: "Armadura mágica" },
  { id: 30, dice: "77", name: "Dispositivo de Kwalish" },
  { id: 31, dice: "78", name: "Armadura de invulnerabilidade" },
  { id: 32, dice: "79", name: "Cinturão de força do gigante da tempestade" },
  { id: 33, dice: "80", name: "Cubo do portal" },
  { id: 34, dice: "81", name: "Baralho das surpresas" },
  { id: 35, dice: "82", name: "Malha do efreeti" },
  { id: 36, dice: "83", name: "Armadura de resistência (meia-armadura)" },
  { id: 37, dice: "84", name: "Trombeta do Valhalla (ferro)" },
  { id: 38, dice: "85", name: "Instrumento dos bardos (harpa de Ollamh)" },
  { id: 39, dice: "86", name: "Pedra iônica (absorção maior)" },
  { id: 40, dice: "87", name: "Pedra iônica (maestria)" },
  { id: 41, dice: "88", name: "Pedra iônica (regeneração)" },
  { id: 42, dice: "89", name: "Armadura de placas da forma etérea" },
  { id: 43, dice: "90", name: "Armadura de placas da resistência" },
  { id: 44, dice: "91", name: "Anel de comandar elementais do ar" },
  { id: 45, dice: "92", name: "Anel de comandar elementais da terra" },
  { id: 46, dice: "93", name: "Anel de comandar elementais do fogo" },
  { id: 47, dice: "94", name: "Anel dos três desejos" },
  { id: 48, dice: "95", name: "Anel de comandar elementais da água" },
  { id: 49, dice: "96", name: "Esfera da aniquilação" },
  { id: 50, dice: "97", name: "Talismã da bondade pura" },
  { id: 51, dice: "98", name: "Talismã da esfera" },
  { id: 52, dice: "99", name: "Talismã do mal absoluto" },
  { id: 53, dice: "00", name: "Tomo da língua quieta" },
];

export function MagicItensSection() {
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
            data={magic_items_table_a}
            type="Itens"
            dice="D100"
            width="32%"
            height="55vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico B"
            data={magic_items_table_b}
            type="Itens"
            dice="D100"
            width="32%"
            height="55vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico C"
            data={magic_items_table_c}
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
            data={magic_items_table_d}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico E"
            data={magic_items_table_e}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico F"
            data={magic_items_table_f}
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
            data={magic_items_table_g}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico H"
            data={magic_items_table_h}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
          <ItemTableCard
            tableName="Tabela de item mágico I"
            data={magic_items_table_i}
            type="Itens"
            dice="D100"
            width="32%"
            height="53vh"
          />
        </Box>
        <Footer/>
      </Flex>
    </>
  );
}
