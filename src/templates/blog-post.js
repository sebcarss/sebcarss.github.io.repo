import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1 style={{ color: `#585858`, marginBottom: `-0.10em` }}>{post.frontmatter.title}</h1>
      <div style={{ color: `teal`, marginBottom: `1em`, borderBottom: `solid 1px #585858` }}>Part of the {post.frontmatter.series} series</div>
      <div style={{ color: `#585858` }} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
      }
    }
  }
`;