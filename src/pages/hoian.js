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
            <h1>The city of lanterns</h1>
            <p>content</p>
            <Link to ="/">Back to Home</Link>
            </Layout>
        </main>
    )
}
// Step 3: Export your component
export default HoiAnPage