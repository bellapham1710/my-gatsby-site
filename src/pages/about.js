// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <Layout>
            <title>Bella Pham</title>
            <h1>About Me</h1>
            <p>Hi! My name is Bella Pham. I’m twenty-one years old. I’m an undergraduate junior major in Information Science from the University of South Carolina.</p>
            <Link to ="/">Back to Home</Link>
            </Layout>
        </main>
    )
}
// Step 3: Export your component
export default AboutPage