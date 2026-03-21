import { Box, Button, Text } from "@chakra-ui/react";
import { DefaultTable } from "../DefaultTable/DefaultTable";
import { FaDiceD20 } from "react-icons/fa";

interface TableItem {
    id: number;
    d10: number;
    name: string;
}

interface ItemTableCardProps {
    tableName: string;
    data: TableItem[];
    type: string;
    dice?: string;
}

export function ItemTableCard({ tableName, data, dice, type }: ItemTableCardProps) {
    return (
        <Box backgroundColor={"#161616"} overflowY="auto" css={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
        }} width={"48%"} height={"62vh"} border={"solid 1px black"}>
            <Box display={"flex"} flexDirection={"row"} fontSize={20} alignItems={"center"} textAlign={"center"} fontWeight={"bold"} color={"white"} width={"100%"} height={"6vh"} backgroundColor={"#111111"} justifyContent={"space-between"}>
                <Text marginLeft={3}>{tableName}</Text>
                <Button marginRight={3} p={0} minW="auto" h="auto" _hover={{ color: "tomato" }} backgroundColor={"#111111"} color={"white"} variant={"ghost"}><FaDiceD20 size={25} /></Button>
            </Box>
            <DefaultTable dice={dice ? dice : 'd10'} type={type} data={data} />
        </Box>
    )
}