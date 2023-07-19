import Footer from "../Components/Footer"
import Nav from "../Components/Nav"
import { Flex, Heading } from "@chakra-ui/react"

const Layout = ({ children, isLoading }) => {
    return (
        <>
            <Nav />
            <Flex className="layoutContent">
                {isLoading ? <Heading>LOADING...</Heading> : children}
            </Flex>

            <Footer />
        </>
    )
}

export default Layout