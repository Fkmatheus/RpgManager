import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { DefaultTable } from "../DefaultTable/DefaultTable";
import { FaDiceD20 } from "react-icons/fa";
import { useState } from "react";
import { ItemRollModal } from "../ItemRollModal/ItemRollModal";

interface TableItem {
    id: number;
    dice: number;
    name: string;
}

interface TableItemString {
    id: number;
    dice: string;
    name: string;
}

interface ItemTableCardProps {
    tableName: string;
    data: TableItem[] | TableItemString[];
    type: string;
    dice?: string;
    height?: string;
    width?: string;
}

export function ItemTableCard({ tableName, data, dice, type, height, width }: ItemTableCardProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    return (
        <Box backgroundColor={"#161616"} overflowY="auto" css={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
        }} width={width ? width : "48%" } height={height ? height : "62vh"} border={"solid 1px black"}>
            <Box display={"flex"} flexDirection={"row"} fontSize={20} alignItems={"center"} textAlign={"center"} fontWeight={"bold"} color={"white"} width={"100%"} height={"6vh"} backgroundColor={"#111111"} justifyContent={"space-between"}>
                <Text marginLeft={3}>{tableName}</Text>
                <Button onClick={() => {
                    onOpen();
                    setLoading(true);

                    setTimeout(() => {
                        setLoading(false);
                        setShowConfetti(true);

                        setTimeout(() => {
                            setShowConfetti(false);
                        }, 8000);
                    }, 2000);
                }} marginRight={3} p={0} minW="auto" h="auto" _hover={{ color: "tomato" }} backgroundColor={"#111111"} color={"white"} variant={"ghost"}><FaDiceD20 size={25} /></Button>
            </Box>
            <DefaultTable dice={dice ? dice : 'd10'} type={type} data={data} />

            <ItemRollModal isOpen={isOpen} onClose={onClose} tableName={tableName} loading={loading} showConfetti={showConfetti}/>
        </Box>
    )
}