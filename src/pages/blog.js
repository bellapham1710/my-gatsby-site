// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link, useStaticQuery, graphql} from 'gatsby'

// Step 2: Define your component
const BlogPage = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        timeToRead
                        excerpt
                        id
                    }
                }
            }
        }
    `)
    return (
        <Layout>
        <main>          
            <title>Bella Pham's Blog page</title>
            <h1>This is the Blog Page</h1>
            <ul>
                {data.allMarkdownRemark.edges.map(edge =>{
                    return (
                        <li key={edge.node.id}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <div>
                            <span>
                                Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                                {edge.node.timeToRead} min read
                            </span>
                        </div>
                            <p>{edge.node.excerpt}</p>
                        </li>
                    )
                })}
            </ul>
            <Link to ="/about">About Me</Link>
            
    </main>
    </Layout>
    )
}
// Step 3: Export your component
export default BlogPage