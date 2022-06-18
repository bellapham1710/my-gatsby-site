// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import {Link} from 'gatsby'
import "../components/styles/style.css"

import {blogTitle} from "../components/blogpost.module.css"
import Card from "../components/card"


//Step 2: Define your component
const IndexPage =() => {
  return(
    <Layout>
    <main>
      <title>Bella Pham</title>
      <div >
        <h2 >"There is nothing worse than a sharp image of a fuzzy concept"</h2>
        <p >--Ansel Adams--</p>
        </div>
      <h1 className={blogTitle}>Welcome, how can I help you today?</h1>


      <div className="cardGroup">
        <Link to ="/about">
     
        <Card 
          title="Web Site Designs"
          text="Secure website designed with Gatsby.js and React."
          image={require('../images/homepage.webp').default}

        />
        </Link>

        <Link to ="/contact">
        <Card 
          title="Cybersecurity"
          text="Protect your websites and data."
          image={require('../images/minivan.jpg').default}

        />
        </Link>
      
        <Link to ="/hoian">
        <Card 
          title="Hoi An"
          text="The acient city of lanterns."
          image={require('../images/hoian.jpg').default}

        />
        </Link>
      </div>


      <Link to ="/about">About</Link>
      

    </main>
    </Layout>
  )
}

//Step 3: Export your component

export default IndexPage
