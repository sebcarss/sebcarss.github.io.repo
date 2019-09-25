import React from "react";
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div>
    <Link
      to={data.frontmatter.path}
      style={{ textDecoration: `none`, color: `inherit` }}
    >
      <div>
        <div style={{ float: `left` }}>
          <Img fixed={data.frontmatter.thumbnailImage.childImageSharp.fixed} />
        </div>
      </div>
      <div style={{ paddingLeft: `6em` }}>
        <div class="article-listing-title">{data.frontmatter.title}</div>
        <div style={{ color: `teal` }}>{data.frontmatter.series}</div>
        <div style={{ color: `#BBB`, marginBottom: `1em` }}>
          {data.frontmatter.date}
        </div>
      </div>
    </Link>
  </div>
);
