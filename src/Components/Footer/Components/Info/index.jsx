import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react"

const Info = ({ heading, list }) => {
    return (
        <Flex
            textAlign={"center"}
            gap={2}
            direction={"column"}
        >
            <Text fontSize={"18px"}>{heading}</Text>
            <UnorderedList
                className="greyText"
                m={0}
                styleType={"none"}
                textDecoration={"none"}
            >
                {list.map((eachList, i) => <ListItem key={i}>{eachList}</ListItem>)}
            </UnorderedList>
        </Flex>
    )
}

export default Info