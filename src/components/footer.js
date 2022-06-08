import * as React from 'react'
import {container, siteFooter} from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={siteFooter}>
            <div className={container}>
                <p>Site developed by Bella Pham &copy; {new Date().getFullYear().toString()}{" "}</p>
            </div>
        </footer>
    )
}
export default Footer