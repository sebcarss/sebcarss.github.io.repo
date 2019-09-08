import React from "react";
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Template({
  data, // this prop will be injected by the graphql below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid
    
    return (
        <Layout>
            <div>              
              <h1 style={{ color: `#585858` }}>
                {frontmatter.title}
              </h1>  
              <div style={{ color: `teal`, marginBottom: `1em` }}>
                Part of the {frontmatter.series} series
              </div>
              <Img fluid={featuredImgFluid} />
              <div 
                style={{ color: `#585858`, marginTop: `2em` }} 
                dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
};

export const query = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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