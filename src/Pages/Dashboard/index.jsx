import { useEffect, useState } from "react"
import { fakeFetch } from "../../MockApi";
import ProductCard from "./Components/Card";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Layout from "../../Layout";


const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true)
                const { data = [], status = 0 } = await fakeFetch("https://example.com/api/products")
                if (status === 200) {
                    setProducts(data.products)
                    setIsLoading(false)
                }
            } catch (e) {
                console.error(e)
            }
        }
        fetchProducts()
    }, [])

    return (
        <Layout isLoading={isLoading} children={
            <Box>
                <Heading p={5}>All Products</Heading>
                <Flex
                    gap={"2rem"}
                    wrap={"wrap"}
                    justify={"space-evenly"}
                >
                    {products.map(eachProduct => <ProductCard key={eachProduct.medicine_id} {...eachProduct} />)}
                </Flex>
            </Box>
        }
        />
    )
}

export default Dashboard