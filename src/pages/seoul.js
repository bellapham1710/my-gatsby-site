// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'

// Step 2: Define your component
const SeoulPage = () => {
    return (
        <main>
            <Layout>
            <title>Seoul, South Korea</title>
            <h1>Seoul, South Korea</h1>
            
            <p>In recent years, South Korean technology and pop culture have erupted into the worldwide mainstream. Seoul has become one of Asia's most popular tourist destinations as a result of the "Korean Wave." Seoul is the capital and largest city of South Korea (Republic of Korea). In recent years, South Korea has made headlines in the IT, automobile, and entertainment industries. Samsung and Hyundai for example, are worldwide renowned brands. K-dramas and K-pop are popular all over the world. Myeongdong has become a cosmetics hotspot, and almost everyone I know enjoys Korean cuisine! Needless to say, South Korea is booming, and Seoul is at the epicenter of it all.</p>
            <Link to ="/">Back to Home</Link>
            </Layout>
        </main>
    )
}
// Step 3: Export your component
export default SeoulPage