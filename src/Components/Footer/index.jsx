import { Box, Divider, Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import Info from "./Components/Info"
import { FooterData } from "../../Utils/Data"
import "./main.css"

const Footer = () => {
    const is_sm = useBreakpointValue({ base: true, lg: false });
    return (
        <footer>
            <Flex
                p={is_sm ? '1rem' : '3rem'}
                className="footerContainer"
            >
                <Flex
                    gap={'1rem'}
                    alignItems={"center"}
                    direction={is_sm ? 'column' : 'row'}
                    pb={is_sm ? '1rem' : '3rem'}
                    className="footerInfo"
                >
                    {FooterData.map((eachData, i) => <Info key={i} {...eachData} />)}
                    <Flex
                        gap={2}
                        direction={'column'}
                        alignItems={'center'}
                        w={'20rem'}
                    >
                        <Text fontSize={'18px'}>Registered Office</Text>
                        <Text textAlign={'center'} className='greyText' noOfLines={3}>E-1/202, Aaron Elegance, Opp. Radhe Bungalows, New CG Road, Chandkheda, Ahmedabad - 382424</Text>
                    </Flex>
                </Flex>
                <Divider height={'2px'} bg={'white'} />
                <Box alignSelf={'center'}>
                    <Text mt={4}>A product of Equality Healthcare</Text>
                </Box>
            </Flex>
        </footer>
    )
}

export default Footer