import React from "react";
import PostArticle from "../components/post-article";
import Link from "gatsby-link";

export default ({ data }) => {
    console.log(data);
    return (
        <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} style={{ borderBottom: `solid 1px teal` }}>
                    <Link
                        to={node.fields.slug}
                        style={{ textDecoration: `none`, color: `inherit` }}
                    >
                        <h3 style={{ marginBottom: `-0.25em`, color: `#585858` }}>{node.frontmatter.title}</h3>
                        <div style={{ color: `teal` }}>{node.frontmatter.series}</div>
                        <div style={{ color: `#BBB` }}>{node.frontmatter.date}</div>
                    </Link>
                </div>
            ))}
        </div>
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