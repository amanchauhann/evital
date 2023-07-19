import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { primaryColor } from "../../../../Styles"

const Card = ({logo, heading, text}) => {
    return(
        <Box>
            <Flex bg={primaryColor} direction={"column"} align={"center"} p={"3rem"} gap={"1rem"} boxShadow={"4px 5px 9px grey"} textAlign={"center"}>
                <Box>
                <Image w={"70px"} src={logo} />
                </Box>
                <Heading fontWeight={700} fontSize={"20px"}>{heading}</Heading>
                <Text className="greyText" fontSize={"16px"}>{text}</Text>
            </Flex>
        </Box>
    )
}

export default Card