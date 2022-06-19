// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'
import {shopTitle, shoplink, sectionTitle} from "../components/travelshop.module.css"
import MyLink from "../components/mylink"

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
    <h2 className={sectionTitle}>Photography Gear</h2>
      <p>
        I’ve looked back on the images I captured very early in my travels and have been mentally taken back to moments that I hadn’t remembered in years. As time passes, you need things to jog your memory and nothing works better than photos that you took yourself.
      </p>
      <MyLink      
          image={require('../images/gopro.webp').default}
        />
      <div class={shoplink}>
        <a
          href="https://www.bestbuy.com/site/gopro-hero9-black-5k-and-20-mp-streaming-action-camera-black/6427120.p?skuId=6427120&ref=212&loc=1&extStoreId=1515&ref=212&loc=1&ds_rl=1268655&gclid=Cj0KCQjw6pOTBhCTARIsAHF23fKMHOQ1E6dV92DiW79YSkXTUdt9jTrRZJGNNpEtQ0e6K-pvv-S5UY4aAphXEALw_wcB&gclsrc=aw.ds"
          >GoPro - HERO9 Black 5K and 20 MP Streaming Action Camera - Black</a
        >
      </div>

      <MyLink      
          image={require('../images/selfiestick.jpg').default}
        />
      <div class={shoplink}>
        <a
          href="https://www.amazon.com/gp/product/B081V95FMZ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=willflyforf0f-20&creative=9325&linkCode=as2&creativeASIN=B081V95FMZ&linkId=b90e8a12f2d24dbb1028881a7dfcba31"
          >48" Portable Selfie Stick & Tripod, Extendable, Bluetooth Remote</a
        >
      </div>
      <h2 className={sectionTitle}>Essentials</h2>
      
      <p>
        Travel essentials that I bring every trip.
      </p>
      <MyLink      
          image={require('../images/powerbank.jpg').default}
        />
      <div class={shoplink}>
        <a
          href="https://www.amazon.com/gp/product/B07QXV6N1B/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=willflyforf0f-20&creative=9325&linkCode=as2&creativeASIN=B07QXV6N1B&linkId=2b6e7c115ac23cbaae779e8741483f96"
          >Power Bank </a
        >
        <p>
          With so many gadgets, keeping your devices charged while traveling can be a hassle, and there are numerous instances where a low or dead battery can be a huge annoyance. On almost every journey, a power bank should be a must-have.
        </p>
      </div>
      <h2 className={sectionTitle}>Carry-on</h2>
      
      <p>
        These items are must-have for your flight.
      </p>

    
            <Link to ="/">Back to Home</Link>
            </Layout>
            
        </main>
    )
}
// Step 3: Export your component
export default ShopPage