import * as React from 'react'
import {Link} from 'gatsby'
import { navigate } from 'gatsby'
import { header,
        heroContent,
        siteTitle } from "./header.module.css"

const Header = () => {
    const triggerNavigation =() => {
        navigate('/about')
    }
    return (
        <header>
        <div className={heroContent}>
            <h1 className={sitetitle}><Link to='/'>Bella Pham</Link></h1>
            <h3>Cybersecurity & Information Design</h3>
            <button onClick={() => triggerNavigation()}>Learn More</button>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
        </header>
    )
}
export default Header