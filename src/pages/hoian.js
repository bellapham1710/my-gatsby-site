// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'

// Step 2: Define your component
const HoiAnPage = () => {
    return (
        <main>
            <Layout>
            <title>Hoi An - Vietnam</title>
            <h1>The city of lanterns.</h1>
            <p>Among all the cities I’ve visited in my homecountry Vietnam, Hoi An made the best first impression. There are a lot to do in the Ancient Town.
                Unlike Hanoi or Ho Chi Minh City, Hoi An is small and provincial in feel. It’s a UNESCO World Heritage Site that provides a fascinating glimpse into what port life was like in 18th century Vietnam.
                Walk around the Ancient Town and you’ll find a well-preserved labyrinth of shophouses and pagodas with paper lanterns zigzagging from building to building. It’s lovely at any time of the day but at night, it turns into something magical.
                If you’re visiting Hoi An for the first time, then this detailed travel guide will tell you everything you need to know to plan your trip.</p>
            <Link to ="/">Back to Home</Link>
            </Layout>
        </main>
    )
}
// Step 3: Export your component
export default HoiAnPage