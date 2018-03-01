
### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## How to add pages

open static/admin/config.yml add item - colletions. (see readme docs)


## Credits

- Front page photo by Geran de Klerk on Unsplash
- Based on [Gatsby + Netlify CMS Starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms)

## Help! Site isn't updating after code git or cms commits
Updates can take a few minutes, you can check the deploy status/log on [netlify](https://app.netlify.com)