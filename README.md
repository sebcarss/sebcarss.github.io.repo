# www.sebcarss.com Personal Blog
I am a developer, geek and love all things tech, my core coding is Java on the server but 
I love exploring the different syntax and styles of other languages and different ways to 
code, such as TDD, pair programming, design patterns and refactoring. 

I'm also a massive foodie and love exploring the cuisines of different cultures. My biggest
passion when it comes to food is the wonderful Japanese noodle soup known as ramen. I could
eat this all day, every day!

I'm also a dad of two lovely girls and love nothing more than building the ultimate dens
with them, playing tickle chase and watching them evolve. 

So, this is my blog, expect topics on the above. It's written using [Gatsby](https://www.gatsbyjs.org/), 
which is a static site generator that uses React. I decided to use this because it is super-quick
to get a site up and running and also allows me to learn React, which was new to me. 


## Running in development
`gatsby develop`

Then go to http://localhost:8000/ to see your site and it will update automagically when you change a 
React component.

## Publishing to www.sebcarss.com
Update the version in the configfile, e.g. `version 1.0.1` then run `gatsby deploy`

This will delete all the files in `public/` then run `gatsby build` and finally call the
./deployToGithub.sh script to push the changes to the `sebcarss.github.io` repository.

### TODO: Imporoving deployment with CICD
Create a Jenkins server using a Raspberry Pi to poll the `sebcarss.github.io.repo` for changes and to 
run `gatsby build` against the repo then push the contents of the `/public/` folder to `sebcarss.github.io`
automatically, overriding the entire contents in the repo. 

# Getting Started with Gatsby
## gatsby-starter-hello-world
If you want to try out Gatsby you can give it a go with this handy starter with the bare 
essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```