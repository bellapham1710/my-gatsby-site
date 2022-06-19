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
      <p>
        <a
          href="https://www.bestbuy.com/site/gopro-hero9-black-5k-and-20-mp-streaming-action-camera-black/6427120.p?skuId=6427120&ref=212&loc=1&extStoreId=1515&ref=212&loc=1&ds_rl=1268655&gclid=Cj0KCQjw6pOTBhCTARIsAHF23fKMHOQ1E6dV92DiW79YSkXTUdt9jTrRZJGNNpEtQ0e6K-pvv-S5UY4aAphXEALw_wcB&gclsrc=aw.ds"
        >
          <img
            image={require('../images/gopro.webp').default}
            width="20%"
          />
        </a>
      </p>
      <div class="shoplink">
        <a
          href="https://www.bestbuy.com/site/gopro-hero9-black-5k-and-20-mp-streaming-action-camera-black/6427120.p?skuId=6427120&ref=212&loc=1&extStoreId=1515&ref=212&loc=1&ds_rl=1268655&gclid=Cj0KCQjw6pOTBhCTARIsAHF23fKMHOQ1E6dV92DiW79YSkXTUdt9jTrRZJGNNpEtQ0e6K-pvv-S5UY4aAphXEALw_wcB&gclsrc=aw.ds"
          >GoPro - HERO9 Black 5K and 20 MP Streaming Action Camera - Black</a
        >
        
      </div>

    
            <Link to ="/">Back to Home</Link>
            </Layout>
            
        </main>
    )
}
// Step 3: Export your component
export default ShopPage