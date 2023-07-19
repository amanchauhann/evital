import { Box, Button, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import Card from "./Components/Card"
import { greyColor, primaryColor } from "../../Styles"
import { cardsData } from "../../Utils/Data"
import Layout from "../../Layout"
import { Link } from "react-router-dom"

const Pages = () => {
    const is_sm = useBreakpointValue({ base: true, lg: false });
    return (
        <>
        <Layout children={
            <Flex direction={"column"}>
                <Flex bg={primaryColor} direction={is_sm ? "column" : "row"} textAlign={"center"} gap={14} alignItems={"center"} pt={"3rem"} justify={"center"}>
                    <Flex direction={"column"} gap={"3rem"}>
                        <Flex direction={"column"} gap={3}>
                            <Heading>Order Medicines from Your Neighborhood Pharmacy</Heading>
                            <Text className="greyText">eVital connects you and your Trusted Local Pharmacy</Text>
                        </Flex>
                        <Link to="/dashboard">
                        <Button px={"4rem"} py={"1.5rem"} w={"fit-content"} alignSelf={"center"} colorScheme="blue">View Dashboard</Button>
                        </Link>
                        
                    </Flex>
                    <Box>
                        <Image src="https://d2y3dr3ntinsxn.cloudfront.net/images/landing_page_img/banner-img.png" />
                    </Box>
                </Flex>
                <Flex bg={greyColor} direction={is_sm ? "column": "row"} gap={"2rem"} p={"1.5rem"} justify={"space-between"}>
                    {cardsData.map((eachCard, i) => <Card key={i} {...eachCard} />)}
                </Flex>
            </Flex>
        } />       
        </>
    )
}

export default Pages