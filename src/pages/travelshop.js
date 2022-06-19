// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'
import {shopTitle} from "../components/travelshop.module.css"

// Step 2: Define your component
const ShopPage = () => {
    return (
        <main>
            <Layout>
            <title>Travel Shop</title>
            <h1 className={shopTitle}>What's in My Backpack? (Travel Essentials) </h1>
            <h6>Last updated: Jun 18, 2022</h6>
    <h4>
        Here are the gears I would highly recommend to all type of travellers!
      </h4>
    <ul>
      <li>Photography Gear</li>
      <li>Essentials</li>
      <li>Carry-on</li>
    </ul>
    <h2>Photography Gear</h2>
      <p>
        I’ve looked back on the images I captured very early in my travels and have been mentally taken back to moments that I hadn’t remembered in years. As time passes, you need things to jog your memory and nothing works better than photos that you took yourself.
      </p>

    
            <Link to ="/">Back to Home</Link>
            </Layout>
            
        </main>
    )
}
// Step 3: Export your component
export default ShopPage