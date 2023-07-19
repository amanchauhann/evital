import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fakeFetch } from "../../MockApi"
import { Box, Divider, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import "./main.css"
import Layout from "../../Layout"

const ProductDetail = () => {
    const { medicine_id } = useParams()
    const [currentProduct, setCurrentProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchingData = async () => {
            try {
                setIsLoading(true)
                const { data: { products }, status } = await fakeFetch("https://example.com/api/products")
                if (status === 200) {
                    // finding the first product which matches the medicine_id we have in useParam with product.
                    setCurrentProduct(products.find(eachProduct => eachProduct.medicine_id === medicine_id))
                    setIsLoading(false)
                }
            } catch (e) {
                console.error(e)
            }
        }
        fetchingData()
    }, [medicine_id])

    const is_sm = useBreakpointValue({ base: true, lg: false });

    return (
        <Layout isLoading={isLoading} children={
            <Flex p={18}>
                <Flex
                    p={12}
                    gap={6}
                    className="detailContainer"
                    direction={is_sm ? "column" : "row"}
                >
                    <Box className="detailImg">
                        <Image w={"100%"} src={currentProduct.image} />
                    </Box>
                    <Flex
                        direction={"column"}
                        gap={3}
                    >
                        <Flex
                            direction={"column"}
                            gap={2}
                        >
                            <Heading as='h2' size='lg'>{currentProduct.medicine_name}</Heading>
                            <Text fontSize={"2xl"} fontWeight={500}>₹{currentProduct.mrp}</Text>
                        </Flex>

                        <Divider border={"1px solid black"} />
                        {/* Lower Half for Product Details */}
                        <Text>
                            <Text as={"span"} className="bold_sm">Manufacturer: </Text>
                            {currentProduct.manufacturer_name}
                        </Text>
                        <Text>
                            <Text as={"span"} className="bold_sm">Content: </Text>
                            {currentProduct.content}
                        </Text>
                        <Text>
                            <Text as={"span"} className="bold_sm">Dosage: </Text>
                            {currentProduct.dosage_type}
                        </Text>
                        <Text>
                            <Text as={"span"} className="bold_sm">Packing Size: </Text>
                            {currentProduct.packing_size}
                        </Text>
                        <Text>
                            <Text as={"span"} className="bold_sm">Medicine Type: </Text>
                            {currentProduct.medicine_type}
                        </Text>
                        <Text>
                            <Text as={"span"} className="bold_sm">Size: </Text>
                            {currentProduct.size}
                        </Text>
                        <Text>
                            <Text as={"span"} className="bold_sm">Availability: </Text>
                            {currentProduct.availability}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        }
        />

    )
}

export default ProductDetail