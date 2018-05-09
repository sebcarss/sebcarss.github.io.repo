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
### Locally
This is the best option if you want to just test on you local machine using the web browser and emulator for mobile.

`gatsby develop`

Then go to http://localhost:8000/ to see your site and it will update
automagically when you change a React component

### On your local area network
If you want to test on a real device then you can do so over your LAN. 

`gatsby develop --host <computer-name>.local`

Then go to http://<computer-name>.local:8000/ to see your site and it will update automagically when you change a React component.

To view the site on a mobile device go to http://<computer-name>.local:8000/

## Testing the Production site
`gatsby build && gatsby serve`

## Publishing to www.sebcarss.com
Update the version in the configfile, e.g. `version 1.0.1` then run `gatsby deploy`

This will delete all the files in `public/` then run `gatsby build` and finally call the
./deployToGithub.sh script to push the changes to the `sebcarss.github.io` repository.

# Getting Started with Gatsby
## gatsby-starter-hello-world
If you want to try out Gatsby you can give it a go with this handy starter with the bare 
essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```
