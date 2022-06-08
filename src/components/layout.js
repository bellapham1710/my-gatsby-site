import * as React from "react"
import Header from "./header"
import Header from "./footer"
import "../components/styles/style.css"

const Layout = props => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
export default Layout