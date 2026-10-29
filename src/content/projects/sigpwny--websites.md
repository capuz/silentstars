---
repo: "sigpwny/websites"
name: "websites"
description: "SIGPwny's websites and club content monorepo"
readmeQualityOk: true
url: "https://github.com/sigpwny/websites"
homepage: "https://sigpwny.com"
language: "MDX"
languages: ["MDX", "TypeScript"]
languagePcts: [41, 36]
topics: ["typescript", "mdx", "astro", "ctf"]
stars: 14
forks: 1
openIssues: 10
closedIssues: 118
watchers: 7
contributors: 55
recentReleases: 0
createdAt: "2022-08-17T17:09:36Z"
lastCommitAt: "2026-10-29T14:07:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 67
maintainers: ["sparxhead", "thealtofwar", "pranavsrinicode"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7ace4b880eb9780f60ced6f7fcd83de845de7a660f890b0a7ab5f98c4ccef21/sigpwny/websites"
---

# SIGPwny's Websites

The SIGPwny website monorepo, built with Astro.

## Installing and Building

Clone and init submodules
```
git clone --recurse-submodules -j8 git@github.com:sigpwny/websites.git
```

Clean install all node packages:
```
npm ci
```
Start a development server:
```
npm run dev
```
Build production and serve:
```
npm run build
npm run serve
```

## Content Types
Content is composed of MarkdownX and JSON files in the `content` directory. For more information about the defined content types, see the [content README](https://github.com/sigpwny/websites/blob/HEAD/docs/README.md).

## Goals
1. **The site should be tenable and functional for the future of the club**.
Prioritizing maintainability and stability will allow for the easy operation of the website long after it was created.
2. **Static-first: static site generation over dynamic sites.**
This is inline with goal 1. Static sites are not only easier to host, they are much cheaper (for basically free). Any dynamic functionality added to the website should be considered as extra or non-critical and should be implemented as a subsystem.
3. **Easy to use.**
If it's not easy to use, then no one knows how to use it.…
