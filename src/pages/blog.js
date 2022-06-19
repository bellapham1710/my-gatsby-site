// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import {Link, useStaticQuery, graphql} from 'gatsby'
import { sectionTitle, blogTitle, blogMeta } from "../components/blogpost.module.css"

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
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
        <main>          
            <title>Bella Pham's Blog page</title>
            <h1 className={sectionTitle}>This is my Travel Blog Page</h1>
            <ul>
                {data.allMarkdownRemark.edges.map(edge =>{
                    return (
                        <li key={edge.node.id}>
                        <h2 className={blogTitle}>
                            <Link to={`/blog/${edge.node.fields.slug}/`}>
                                {edge.node.frontmatter.title}
                            </Link>
                        </h2>
                        <div>
                            <span className={blogMeta}>
                                Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                                {edge.node.timeToRead} min read
                            </span>
                        </div>
                            <p className={blogMeta}>{edge.node.excerpt}</p>
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