import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import ArticleListing from "../components/article-listing"

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <div style={{ marginTop: `1em` }}>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id} style={{ clear: `left`, marginBottom: `1em`, borderBottom: `solid 1px teal` }}>
                            <ArticleListing data={node}></ArticleListing>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark(filter: {frontmatter: {published: {eq: "true"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        series
                        title
                        date(formatString: "DD MMMM YYYY")
                        thumbnailImage {
                            childImageSharp {
                                fixed(width: 80, height: 80) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                    html
                    timeToRead
                }
            }
        }
    }
`