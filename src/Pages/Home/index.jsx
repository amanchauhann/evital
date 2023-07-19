import { Box, Button, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import Card from "./Components/Card"
import { cardsData } from "../../Utils/Data"
import Layout from "../../Layout"
import { Link } from "react-router-dom"
import "./main.css"

const Home = () => {
    //for responsiveness, this will be true when screen is less than base size i.e < 400px.
    const is_sm = useBreakpointValue({ base: true, lg: false });

    return (
        <Layout children={
            <Flex direction={"column"}>
                <Flex
                    direction={is_sm ? "column" : "row"}
                    gap={14}
                    className="hero_container flCenter"
                >
                    <Flex
                        direction={"column"}
                        gap={10}
                    >
                        <Flex
                            direction={"column"}
                            p={3}
                            gap={3}
                        >
                            <Heading>Order Medicines from Your Neighborhood Pharmacy</Heading>
                            <Text className="greyText">eVital connects you and your Trusted Local Pharmacy</Text>
                        </Flex>
                        <Link to="/dashboard">
                            <Button colorScheme="blue" className="heroBtn">View Dashboard</Button>
                        </Link>
                    </Flex>
                    <Box>
                        <Image src="https://d2y3dr3ntinsxn.cloudfront.net/images/landing_page_img/banner-img.png" />
                    </Box>
                </Flex>
                <Flex
                    direction={is_sm ? "column" : "row"}
                    gap={6}
                    p={4}
                    className="cardContainer"
                >
                    {cardsData.map((eachCard, i) => <Card key={i} {...eachCard} />)}
                </Flex>
            </Flex>
        } />
    )
}

export default Home