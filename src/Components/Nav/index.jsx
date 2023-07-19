import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useData } from "../../Contexts/DataContext";
import "./main.css"
import { Link } from "react-router-dom";

const Nav = () => {
    const { logout, user, loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const { setAuthToken } = useData()

    useEffect(() => {
        // After user logged in, storing the auth token.
        const getAuthToken = async () => {
            try {
                const accessToken = await getAccessTokenSilently();
                setAuthToken(accessToken)
            } catch (error) {
                console.error(error);
            }
        }
        if (isAuthenticated) {
            getAuthToken()
        }
    }, [user])


    return (
        <>
            <Box
                className="nav"
                p={"1rem"}
            >
                <Flex justify={"space-between"}>
                    <Box w="150px">
                        <Link to={"/"}>
                            <Image
                                w={"100%"}
                                src="https://d2y3dr3ntinsxn.cloudfront.net/images//landing_page_img/logo.png" />
                        </Link>
                    </Box>
                    {isAuthenticated ?
                        <Button
                            className="authBtn"
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        >
                            Log Out
                        </Button>
                        :
                        <Button
                            className="authBtn"
                            onClick={() => loginWithRedirect()}
                        >
                            Login
                        </Button>
                    }
                </Flex>
            </Box>
        </>
    )
}

export default Nav