# NavEX Blog CMS

A responsive blog website built with Sanity Studio and Hugo.

## Technologies

- Sanity Studio with TypeScript schemas
- Hugo static site generator
- JavaScript
- Sass (SCSS)
- Semantic HTML and CSS

## Features

- Manage blog posts, categories, and authors in Sanity
- Sync published Sanity posts to Hugo
- Responsive homepage and article pages
- Category and author taxonomy pages
- Reading time calculation
- Table of contents
- Copy article link button
- Accessible markup and keyboard focus styles

## Prerequisites

- Node.js and npm
- Hugo Extended
- Sass CLI

## Local Setup

1. Clone the repository.
2. Install Node.js dependencies:

   ```bash
   npm install
   ```

3. Sync published posts from Sanity:

   ```bash
   npm run sync-sanity
   ```

4. Build the CSS and website:

   ```bash
   npm run build
   ```

5. Start the local server:

   ```bash
   npm run dev
   ```

6. Open http://localhost:1313/ in your browser.

To compile Sass separately, run `npm run build:css`.

## Project Structure

- `content/posts/` - Generated blog articles
- `data/sanity/` - Synced Sanity data
- `layouts/` - Hugo templates
- `assets/scss/` - Sass source files
- `assets/css/` - Compiled CSS
- `scripts/` - Sanity synchronization script
- `video/` - Walkthrough video

## Content Workflow

Create and publish content in Sanity Studio. Run `npm run sync-sanity`, then `npm run build` to update the generated website.

## Deployment

The site can be deployed to Netlify or another static hosting provider. Configure the production base URL and use `npm run build` as the build command. Ensure Node.js, Hugo Extended, and Sass are available in the deployment environment.

## Trade-offs

Sanity provides structured content management, while Hugo generates static pages. Content changes require synchronization and a new build. This keeps the website simple and fast but requires a deployment workflow for automatic updates.

## Live Demo

Website: https://navex-blog-cms.netlify.app/

## Deployment

The website is deployed on Netlify and connected to the GitHub repository.

- Build command: `npm run sync-sanity && npm run build`
- Publish directory: `public`
- Hugo version: `0.168.0`

## Sanity Studio

The Sanity Studio source code is available in the `sanity-studio/` directory.

To run the Studio locally:

1. Open a terminal in the repository root.
2. Install the Studio dependencies:

   ```bash
   npm ci --prefix sanity-studio
   ```

3. Start the development server:

   ```bash
   npm run dev --prefix sanity-studio
   ```

4. Open the local URL displayed in the terminal and sign in to Sanity.

To build the Studio for production:

```bash
npm run build --prefix sanity-studio
```

The Studio uses the configured Sanity project ID and the `production` dataset. Publishing content in Sanity does not automatically update the Hugo site; run `npm run sync-sanity` and rebuild the site to sync content.
