import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import "./main.css"

const Card = ({ logo, heading, text }) => {
    return (
        <Box>
            <Flex className="cardFl">
                <Box>
                    <Image w={"70px"} src={logo} />
                </Box>
                <Heading fontWeight={700} fontSize={"20px"}>{heading}</Heading>
                <Text className="greyText">{text}</Text>
            </Flex>
        </Box>
    )
}

export default Card