// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'

// Step 2: Define your component
const BlogPage = () => {
    return (
        <main>
            <Layout>
            <title>Bella Pham</title>
            <h1>About Me</h1>
            <p>Blog.</p>
            <Link to ="/">Back to Home</Link>
            </Layout>
        </main>
    )
}
// Step 3: Export your component
export default BlogPage