import React from "react";
import Layout from './layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => {
    const post = data.markdownRemark;
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    
    return (
        <Layout>
            <div>
                <h1 style={{ color: `#585858`, marginBottom: `-0.10em` }}>{post.frontmatter.title}</h1>
                <div style={{ color: `teal`, marginBottom: `1em`, borderBottom: `solid 1px #585858` }}>Part of the {post.frontmatter.series} series</div>
                <Img fluid={featuredImgFluid} />
                <div style={{ color: `#585858` }} dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        series
        title
        date
        featuredImage {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    }
  }
`;