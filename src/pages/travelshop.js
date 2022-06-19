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

      <MyLink      
          image={require('../images/powercube.jpg').default}
        />
      <div class={shoplink}>
        <a
          href="https://www.amazon.com/gp/product/B00IPNH4LC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=willflyforf0f-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00IPNH4LC&linkId=6959599b97d2b8148b63da847a175728&th=1"
          >Power Strip with 4 outlets, 2 usb ports, 5 feet cable </a
        >
        <p>
        Many hotels only have one or two outlets. I've had to stay up late a few times just to plug in the last charger. This PowerCube is little but powerful, with four outlets and two USB ports.
        </p>
      </div>
      <h2 className={sectionTitle}>Carry-on</h2>
      
      <p>
        These items are must-have for your flight.
      </p>
      <MyLink      
          image={require('../images/carryon.jpg').default}
        />
      <div class={shoplink}>
        <a
          href="https://www.amazon.com/dp/B08FRLL4DH/ref=twister_B085RTH42L?_encoding=UTF8&th=1"
          >Samsonite Carry-on 21-inch </a
        >
        <p>
        There are certain things that you cannot put in your check-in luggage, carry-on is where you can store all those things. Also, you also want to keep your valuable belongings, laptop, and gears here.
        </p>
      </div>
      <MyLink      
          image={require('../images/neckpillow.jpg').default}
        />
      <div class={shoplink}>
        <a
          href="https://www.amazon.com/Worlds-Best-Feather-Microfiber-Charcoal/dp/B00DZKQLZ0/ref=sr_1_5?crid=1Q5HEFSVYINJ8&keywords=neck%2Bpillow%2Bfor%2Btravel&qid=1650845826&sprefix=neck%2Bpillow%2Bfor%2Btravel%2Caps%2C131&sr=8-5&th=1"
          >Neck Pillow </a
        >
        <p>
        For economy people out there like me, investing in an excellent one is a good idea. This will allow you to properly relax your neck, get a decent night's sleep, and have a nice start to your vacation. A decent travel cushion is also firm enough to provide adequate support without being excessively cumbersome.
        </p>
      </div>
    
            <Link to ="/">Back to Home</Link>
            </Layout>
            
        </main>
    )
}
// Step 3: Export your component
export default ShopPage