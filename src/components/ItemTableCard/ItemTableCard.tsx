import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { DefaultTable } from "../DefaultTable/DefaultTable";
import { FaDiceD20 } from "react-icons/fa";
import { useState } from "react";
import { ItemRollModal } from "../ItemRollModal/ItemRollModal";
import type { TableItemDefault } from "../../types/TableItemDefault"

interface ItemTableCardProps {
    tableName: string;
    data: TableItemDefault[]
    type: string;
    dice?: string;
    height?: string;
    width?: string;
}

export function ItemTableCard({ tableName, data, dice, type, height, width }: ItemTableCardProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    let intDice = 0;

    switch (dice) {
        case 'D4':
            intDice = 4
            break
        
        case 'D6':
            intDice = 6
            break
        
        case 'D8':
            intDice = 8
            break
        
        case 'D10':
            intDice = 10
            break
        
        case 'D12':
            intDice = 12
            break
    }


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
                        }, 4000);
                    }, 1000);
                }} marginRight={3} p={0} minW="auto" h="auto" _hover={{ color: "tomato" }} backgroundColor={"#111111"} color={"white"} variant={"ghost"}><FaDiceD20 size={25} /></Button>
            </Box>
            <DefaultTable dice={dice ? dice : 'd10'} type={type} data={data} />

            <ItemRollModal intDice={intDice} isOpen={isOpen} onClose={onClose} tableName={tableName} loading={loading} showConfetti={showConfetti}/>
        </Box>
    )
}