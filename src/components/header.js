import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import { navigate } from 'gatsby'
import { header,
        heroContent,
        siteTitle,
        siteDescription,
        navContainer } from "./header.module.css"

const Header = () => {
    const triggerNavigation =() => {
        navigate('/about')
    }
    const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                author
                description
                title
            }
        }
    }
    `)
    return (
        <header>
            <div className={heroContent}>
                <h1 className={siteTitle}><Link to='/'>{data.site.siteMetadata.title}</Link></h1>
                <h3 className={siteDescription}>{data.site.siteMetadata.description}</h3>
                <button onClick={() => triggerNavigation()}>Learn More</button>
            </div>
            <nav className={navContainer}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">My Blog</Link></li>
                    <li><Link to="/travelshop">Travel Shop</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header