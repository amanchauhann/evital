import Footer from "../Components/Footer"
import Nav from "../Components/Nav"

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        {children}
        <Footer />
        </>
    )
}

export default Layout