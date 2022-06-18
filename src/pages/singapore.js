// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'

// Step 2: Define your component
const SingaporePage = () => {
    return (
        <main>
            <Layout>
            <title>Singapore, Singapore</title>
            <h1>Singapore, Singapore</h1>
            <p>Singapore is one of my favorite cities in the world. There’s no other place like it. Located just off the southern tip of Malaysia, this vibrant city-state boasts a beautiful blend of Malaysian, Indian, Chinese, Arab and English cultures – all with its own Singaporean twist. The “Lion City,” as it's referred to, is filled with delightful culinary experiences, state-of-the-art accommodations and exciting nightlife.</p>
            <Link to ="/">Back to Home</Link>
            </Layout>
        </main>
    )
}
// Step 3: Export your component
export default SingaporePage