import { Header } from "../components/Header/Header";
import { HomeSection } from "../components/HomeSection/HomeSection";
import { Box } from '@chakra-ui/react';

export function Home() {
    return (
        <>
            <Box display={'flex'} flexDirection={"row"}>
                <Header />
                <HomeSection />
            </Box>
        </>
    )
}