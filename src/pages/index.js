import React from "react";
import { graphql, Link } from 'gatsby';
import Layout from "../components/layout";
import Img from 'gatsby-image';

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <div>
                    Hey, my name is Seb and I am loving living life!
                </div>
                <div style={{ marginTop: `1em`}}>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id} style={{ clear: `left`, borderBottom: `solid 1px teal` }}>
                            <Link
                                to={node.fields.slug}
                                style={{ textDecoration: `none`, color: `inherit` }}>
                                    <div>
                                        <p style={{ float: `left`}}>
                                            <Img fixed={node.frontmatter.thumbnailImage.childImageSharp.fixed}/>
                                        </p>
                                    </div>
                                    <div style={{ paddingLeft: `6em`}}>
                                        <h3 style={{ marginBottom: `-0.25em`, color: `#585858` }}>{node.frontmatter.title}</h3>
                                        <div style={{ color: `teal` }}>{node.frontmatter.series}</div>
                                        <div style={{ color: `#BBB`, marginBottom: `1em` }}>{node.frontmatter.date}</div>
                                    </div>
                            </Link>
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
                    fields {
                        slug
                    }
                }
            }
        }
    }
`