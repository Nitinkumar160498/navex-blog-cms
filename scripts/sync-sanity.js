const { createClient } = require("@sanity/client");
const fs = require("node:fs");
const path = require("node:path");

const client = createClient({
  projectId: "tlzcb6d4",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});

async function syncPosts() {
  try {
    const { portableTextToMarkdown } = await import("@portabletext/markdown");

    const posts = await client.fetch(`
      *[_type == "blogPost"] | order(publishDate desc) {
        title,
        "slug": slug.current,
        excerpt,
        publishDate,
        body,
        "heroImage": heroImage.asset->url,
        "category": category->{
          title,
          "slug": slug.current,
          description
        },
        "author": author->{
          name,
          "slug": slug.current,
          bio,
          "profileImage": profileImage.asset->url
        }
      }
    `);

    const dataPath = path.join(__dirname, "..", "data", "sanity", "posts.json");
    const contentPath = path.join(__dirname, "..", "content", "posts");

    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    fs.mkdirSync(contentPath, { recursive: true });

    fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), "utf8");

    // Remove old generated Markdown files before syncing current Sanity posts.
    for (const file of fs.readdirSync(contentPath)) {
      if (file.endsWith(".md")) {
        fs.unlinkSync(path.join(contentPath, file));
      }
    }

    for (const post of posts) {
      if (!post.slug) {
        console.warn(`Skipping post without a slug: ${post.title}`);
        continue;
      }

      const bodyMarkdown = portableTextToMarkdown(post.body || []);
      const frontMatter = [
        "---",
        `title: ${JSON.stringify(post.title || "Untitled")}`,
        `date: ${JSON.stringify(post.publishDate || "")}`,
        `slug: ${JSON.stringify(post.slug)}`,
        `description: ${JSON.stringify(post.excerpt || "")}`,
        `categories: [${JSON.stringify(post.category?.title || "Uncategorized")}]`,
        `authors: [${JSON.stringify(post.author?.name || "Unknown author")}]`,
        `categorySlug: ${JSON.stringify(post.category?.slug || "")}`,
        `authorSlug: ${JSON.stringify(post.author?.slug || "")}`,
        `heroImage: ${JSON.stringify(post.heroImage || "")}`,
        `authorBio: ${JSON.stringify(post.author?.bio || "")}`,
        "---",
        "",
      ].join("\n");

      const filePath = path.join(contentPath, `${post.slug}.md`);

      fs.writeFileSync(filePath, `${frontMatter}${bodyMarkdown}\n`, "utf8");
      console.log(`Created article: ${post.slug}`);
    }

    console.log(`Successfully synced ${posts.length} blog post(s).`);
  } catch (error) {
    console.error("Failed to sync Sanity posts:", error.message);
    process.exitCode = 1;
  }
}

syncPosts();