---
repo: "ebru/ebrukaya.me"
name: "ebrukaya.me"
description: "My personal website: a bit about me, my journey, side projects and a blog. Built with Next.js and TypeScript."
readmeQualityOk: true
url: "https://github.com/ebru/ebrukaya.me"
homepage: "https://ebrukaya.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2018-12-09T05:47:07Z"
lastCommitAt: "2026-11-09T04:33:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 47
maintainers: ["ebru"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b8379650721a1103c829d2add2d57abdb64a1555bfa88e8a591a35aa0eff1da/ebru/ebrukaya.me"
---

# ebrukaya.me

My personal site: a few words about me, my journey, side projects and a blog.

**[ebrukaya.me](https://ebrukaya.me)**

## Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- Markdown posts with front matter
- Light and dark mode that follows your system setting
- RSS feed (`/feed.xml`), link-preview images and `/llms.txt`, all generated at build time
- Hosted on [Netlify](https://netlify.com)

## Run it

```sh
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static site in out/
pnpm typecheck # check types
```

## Structure

```
content/posts/     blog posts (markdown); the file name is the URL: /blog/<name>/
public/            static files, served as-is
src/app/           routes, layout and global styles
src/sections/      page content: journey, projects, personal
src/components/    shared UI
src/lib/           reads and renders the posts
design/            the original drawing
```

To write a post, add `content/posts/my-post.md`:

```md
---
title: "my post"
date: "2026-11-08"
description: "One line for search engines and link previews."
draft: true # optional: only shows with…
