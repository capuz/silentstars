---
repo: "datazip-inc/olake-docs"
name: "olake-docs"
description: "Website, Blogs and Documentation for OLake"
readmeQualityOk: true
url: "https://github.com/datazip-inc/olake-docs"
homepage: "https://olake.io"
language: "MDX"
languages: ["MDX", "TypeScript"]
languagePcts: [60, 29]
topics: ["documentation", "docusaurus", "open-source", "olake", "hacktoberfest"]
stars: 16
forks: 26
openIssues: 16
closedIssues: 12
watchers: 2
contributors: 36
recentReleases: 0
createdAt: "2025-01-28T08:02:19Z"
lastCommitAt: "2026-09-15T08:54:47Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 75
maintainers: ["nayanj98", "anshika-oss", "siddharth-chevella"]
openGraphImageUrl: "https://opengraph.githubassets.com/96be28ebbc23d060737abe61a8ca9f6867586f114144761d120e2b953ba9bd90/datazip-inc/olake-docs"
---

# OLake Website – Contributor Handbook

*(The site is built with **Docusaurus**)*

---

### 1. Prerequisites & Local Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/datazip-inc/olake-docs.git
   ```

2. **Install dependencies**

   ```bash
   npm i
   ```

3. **Verify the build**

   ```bash
   npm run build
   ```

   A successful build confirms there are no compile-time errors.

4. **Start the development server**

   ```bash
   npm run start
   ```

   Your default browser will automatically open the local site.

---

### 2. Adding a Blog Post

| Directory  | When to use             |
| ---------- | ----------------------- |
| `/blog`    | General OLake topics    |
| `/iceberg` | Iceberg-specific topics |

1. **Navigate** to the correct directory.
2. **Create an MDX file**: `YYYY-MM-DD-blog-slug.mdx`.
   *The date reflects the publish date, not the commit date.*
3. **Copy the front-matter** (metadata) from an existing post and update it.
4. **Manage authors**

   * Each directory has its own `authors.yml`.
   * Add new authors here before referencing them in a post.
5. **Append** `<BlogCTA/>` **as the final line** of every blog post.

---

### 3.…
