import React from "react";
import Link from "gatsby-link";
import img_kitchenaid from "./kitchenaid-to-the-rescue.jpg";

export default ({ data }) => {
    return (
        <div>
            <h1>The Bread Chronicles</h1>

            <p>
                Is there anything better than the smell of freshly baked bread? Maybe the smell of freshly brewed coffee on a warm 
                summer morning, but then that could be because that scenario goes so well with a freshly baked baguette from a 
                boulangerie on a summer holiday in France. Bread has such a lovely smell that people bake bread before showing 
                their house to prospective buyers in a bid to make them feel the house is the right one for them, as if by magic 
                the smell of bread will make them see passed the hole in the ceiling! Personally, I think that's going a bit far 
                but I do love walking into a house when bread is being baked and therefore it only makes sense for me to bake my 
                own bread so I can enjoy that wonderful scent every weekend.
            </p>

            <h2>Why create this series?</h2>

            <p>
                I like to think I'm a relatively good cook but for some reason, when it comes to bread, I seem to fail quite a lot. 
                Every so often bread will come out edible, although it is not particularly better than store bought bread, but most 
                of the time it is too dense for anything other than toasting. So this series is to help me get better at making 
                bread through experimentation and to highlight all the variations that you may need to think about when baking 
                bread. 
            </p>

            <p>
                The problem I have with experimenting with bread, is the amount of time and effort it takes to knead the bread and 
                get it in the oven. Kneading dough is something I just don't get enjoyment out of, and that means if the bread 
                doesn't work out after following a recipe, I lose interest relatively quickly. I thought about how I could resolve 
                this problem and the obvious and sensible solution was to buy a KitchenAid stand mixer to do the kneading for me.
            </p>

            <img 
                src={img_kitchenaid} 
                alt="KitchenAid to the rescue"
            />

            <h2>What makes good bread?</h2>

            <p>
                Here is my list of bread variables to play with and my starting recipe. 

            - Ingredients (measurements)
                - Flour
                - Water
                - Yeast
                - Salt
                - Sugar
                - Oil
                - Milk
                - Butter
                - Flavourings (seeds, nuts, fruit, etc)
            - Techniques
                - How warm the water is
                - Where to add the yeast to, e.g. water, flour?
                - Which type of yeast to use: fast-acting, dried or fresh (instant?)
                - How long to knead
                - What speed to knead at
                - How long to proof
                - Proof in: metal bowl with clingfilm, proofing basket with tea towel, etc. 
                - Double proof?
                - Proof temperature
                - Oven temperature
                - Type of loaf created: box loaf, cob, baguette, etc.
                - Time in oven
                - Size of loaf
                - Time of year
                - Time of day
                - Water in oven or not
                - Once baked cool on rack uncovered or covered with tea towel   

            </p>

            <h2>Bread Recipes</h2>

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
    query BreadChroniclesPostQuery {
        allMarkdownRemark(filter: {frontmatter: {published: {eq: "true"}, series: {eq: "Bread Chronicles"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
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