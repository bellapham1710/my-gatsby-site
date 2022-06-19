// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'
import "../components/styles/style.css"

// Step 2: Define your component
const ContactPage = () => {
    return (
        <main>
            <Layout>
            <title>Contact Me</title>
            <h2>Thanks for your interest in Bella Pham's Travel Blog.</h2>
            <p>Please use the form below to send me a message. Don't be a stranger!</p>
            
    


            <Link to ="/">Back to Home</Link>
            </Layout>
            
        </main>
    )
}
// Step 3: Export your component
export default ContactPage