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
