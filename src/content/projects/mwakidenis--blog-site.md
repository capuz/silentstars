---
repo: "mwakidenis/Blog_site"
name: "Blog_site"
description: "🔥  A modern, high-performance blogging platform built for engaging content, seamless publishing, and an excellent user experience. 🚀"
readmeQualityOk: true
url: "https://github.com/mwakidenis/Blog_site"
homepage: "https://whitep4nth3r.com/"
language: "JavaScript"
languages: ["JavaScript", "XSLT", "SCSS"]
languagePcts: [48, 24, 21]
topics: ["html", "javascript", "netlify", "scss", "xslt"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-14T08:19:12Z"
lastCommitAt: "2026-11-02T13:39:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 59
maintainers: ["mwakidenis"]
openGraphImageUrl: "https://opengraph.githubassets.com/8058a9d00c6459fb049f88790f991bb7994491a24481f7e81fa27d2d419d499b/mwakidenis/Blog_site"
---

# whitep4nth3r.com
---
This repository is a modified version of the original project. The original repository has been sold out and is currently in active use, so it is not available for public access at this time.

The site is built with [Eleventy](https://www.11ty.dev/docs/) and [Netlify](https://netlify.com)

---

## Developing locally

### Install dependencies

```bash
npm install
```

### Run the site locally

Use the Netlify CLI to inject environment variables stored against the Netlify site — no local `.env` file needed!

```bash
ntl dev
```

## Project structure

---

### `./lib`

Contains all code to fetch and format data from the following sources:

- Contentful
- GitHub
- Twitch

---

## `./src`

Directories prefixed with `_` are utility folders, providing global data, layouts, styles, component partials and other
functionality.

Other directories (about, blog, talks, topics, uses) act as page-level route directories, resulting
in e.g. `/activity/`, `/talks/` etc in the site build.

The site homepage is built from `/src/index.11ty.js`.

---

## Inside page-level route directories

- e.g. `/{name}/index.11ty.js` builds the `/{name}/` route.
- e.g.…
