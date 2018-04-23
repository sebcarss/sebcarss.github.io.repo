import React from "react";

export default ({ data }) => (
  <div>
    <h1>
        {data.site.siteMetadata.title}
    </h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>
);

export const query = graphql `
    query aboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`