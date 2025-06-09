import { marked } from "marked";

// Simple frontmatter parser
function parseFrontmatter(content) {
  const fmRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(fmRegex);

  if (!match) {
    return {
      data: {},
      content: content,
    };
  }

  const frontmatterText = match[1];
  const markdownContent = match[2];

  // Parse YAML-like frontmatter
  const data = {};
  frontmatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes
      value = value.replace(/^["']|["']$/g, "");

      // Handle arrays (tags)
      if (value.startsWith("[") && value.endsWith("]")) {
        value = value
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/^["']|["']$/g, ""));
      }

      data[key] = value;
    }
  });

  return {
    data,
    content: markdownContent,
  };
}

// Function to process markdown content
export async function processMarkdown(markdownContent) {
  // Parse frontmatter and content
  const { data, content } = parseFrontmatter(markdownContent);

  // Convert markdown to HTML using marked
  const htmlContent = marked(content);

  return {
    frontmatter: data,
    content: htmlContent,
  };
}

// Function to load all posts
export async function loadAllPosts() {
  try {
    const postFiles = import.meta.glob("../assets/posts/*.md", { as: "raw" });
    const posts = [];

    for (const path in postFiles) {
      const markdownContent = await postFiles[path]();
      const processed = await processMarkdown(markdownContent);

      posts.push({
        ...processed.frontmatter,
        content: processed.content,
        slug:
          processed.frontmatter.slug ||
          path.split("/").pop().replace(".md", ""),
      });
    }

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error("Error loading posts:", error);
    return [];
  }
}

// Function to load a single post by slug
export async function loadPostBySlug(slug) {
  try {
    const posts = await loadAllPosts();
    return posts.find((post) => post.slug === slug);
  } catch (error) {
    console.error("Error loading post:", error);
    return null;
  }
}
