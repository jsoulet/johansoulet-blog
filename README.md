# [johansoulet.fr](https://johansoulet.fr)

The repository contains my personal website, based on [Gatsby](https://www.gatsbyjs.org/) and hosted by [Netlify](https://www.netlify.com/).

## Features

- Home page with a contact form powered by[ Netlify form](https://www.netlify.com/products/forms/)
- MDX blog posts

## Gatsby plugins

    - gatsby-background-image
    - gatsby-image
    - gatsby-plugin-intl
    - gatsby-plugin-manifest
    - gatsby-plugin-mdx
    - gatsby-plugin-offline
    - gatsby-plugin-react-helmet
    - gatsby-plugin-sass
    - gatsby-plugin-sharp
    - gatsby-plugin-sitemap
    - gatsby-remark-images
    - gatsby-remark-prismjs
    - gatsby-remark-slug
    - gatsby-source-filesystem
    - gatsby-transformer-remark
    - gatsby-transformer-sharp

## Usage

### Blog posts

Blog posts should be created in the folder `/content/posts`
Associated images should be added in `content/images`

### i18n

Internationalization configurations can be edited in `/config/i18n`
Translated messages have to be in the folder `/config/i18n/messages` and named `[locale].json`

### Commands

#### For development

`npm start`: clean cache folders and run Gatsby server

#### For production

`npm run build`: clean cache folders and build static pages in `/public`
