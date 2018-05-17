import React from "react";
import Link from "gatsby-link";

export default () => {
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

            <Link to="/recipe/bread/white-bread-loaf/">
                White Bread Loaf
            </Link>
        </div>
    );
}