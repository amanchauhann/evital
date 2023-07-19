import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ProductCard = ({ image, medicine_name, mrp, medicine_id }) => {
    return (
        <Card w='320px'>
            <Link to={`/product/${medicine_id}`}>
                <CardBody>
                    <Box>
                        <Image
                            objectFit='s'
                            boxSize='250px'
                            src={image}
                            alt={`sample picture ${medicine_name}`}
                            borderRadius='md'
                        />
                    </Box>
                    <Stack justify={"space-between"} mt='5' spacing='1'>
                        <Heading size='md'>{medicine_name}</Heading>
                        <Text color='blue.600' fontSize='xl'>
                            ₹{mrp}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Expand Details
                    </Button>
                </CardFooter>
            </Link>
        </Card>
    )
}

export default ProductCard