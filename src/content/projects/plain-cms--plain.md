---
repo: "plain-cms/plain"
name: "plain"
description: "plain — a Git-native CMS: the repo is the database, static files are the API, AI is the admin. Vanilla, one dependency, under 2,500 lines."
readmeQualityOk: true
url: "https://github.com/plain-cms/plain"
homepage: "https://plain-cms.github.io/plain/"
language: "CSS"
languages: ["CSS", "HTML"]
languagePcts: [54, 28]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-05T21:23:51Z"
lastCommitAt: "2026-11-13T18:37:21Z"
lastReleaseAt: "2026-07-25T14:58:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 41
maintainers: ["victorantos"]
openGraphImageUrl: "https://opengraph.githubassets.com/96141f0a67af85ac22be6c5d4f35cd10af2230ea0d26569b98a951ad723b3228/plain-cms/plain"
---

**A CMS that lives in your Git repo.** Markdown files in, static site out, edited in the browser — no database, no server, nothing to patch.

**[Website](https://plain-cms.com)** · **[Try the editor](https://plain-cms.github.io/plain/admin/?demo=1)** · **[Live demo](https://plain-cms.github.io/plain/)** · **[Quickstart](#quickstart-5-minutes)** · **[Contributing](https://github.com/plain-cms/plain/blob/HEAD/CONTRIBUTING.md)**

## Moving an existing site in

> **NEW: WordPress migration.** Bring your whole WordPress site over with one command — posts, pages, images, menu, comments, and every old URL redirected.

**From WordPress, in three steps:**

1. In your WordPress dashboard: **Tools → Export → All content → Download Export File.** You get one `.xml` file.
2. In your plain repo, run:

   ```sh
   node tools/migrate/wordpress.js ~/Downloads/yoursite.WordPress.xml
   ```

3. Copy the result in and build:

   ```sh
   cp -R plain-import/content/. content/
   cp -R plain-import/media/. media/
   cp plain-import/data/redirects.json data/redirects.json
   node build.js
   ```

What comes across: posts (to `/blog/<slug>/`) and pages (to `/<slug>/`, your static front page becomes the…
