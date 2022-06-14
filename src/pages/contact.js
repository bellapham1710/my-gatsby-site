// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'

// Step 2: Define your component
const ContactPage = () => {
    return (
        <main>
            <Layout>
            <title>Contact Me</title>
            <h1>This is my contact information</h1>
            <Link to ="/">Back to Home</Link>
            </Layout>
        </main>
    )
}
// Step 3: Export your component
export default ContactPage