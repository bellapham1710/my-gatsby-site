// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import {Link} from 'gatsby'
import "../components/styles/style.css"
import {quoteFont, quoteAuthor} from "../components/index.module.css"
import {blogTitle} from "../components/blogpost.module.css"
import Card from "../components/card"


//Step 2: Define your component
const IndexPage =() => {
  return(
    <Layout>
    <main>
      <title>Bella Pham</title>
      <div >
        <h2 className={quoteFont}>“The use of traveling is to regulate imagination with reality, and instead of thinking of how things may be, see them as they are.”</h2>
        <p className={quoteAuthor}>--Samuel Johnson--</p>
        </div>
      <h1 className={blogTitle}>Welcome, how can I help you today?</h1>
      <h3> Here are my recent travels.</h3>


      <div className="cardGroup">
        <Link to ="/singapore">
     
        <Card 
          title="Singapore"
          text="also known as The Lion City, is one of the most developed country in Asia"
          image={require('../images/singaporemarina.webp').default}

        />
        </Link>

        <Link to ="/seoul">
        <Card 
          title="Seoul, S.Korea"
          text="Asia's most popular tourist destinations as a result of the Korean Wave"
          image={require('../images/cherryblossom.webp').default}

        />
        </Link>
      
        <Link to ="/hoian">
        <Card 
          title="Hoi An, VN"
          text="The ancient town of lanterns, ready to get lost in the Old Town"
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
