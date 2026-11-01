---
repo: "keepassxreboot/keepassxc-org"
name: "keepassxc-org"
description: "Website files for KeePassXC"
readmeQualityOk: true
url: "https://github.com/keepassxreboot/keepassxc-org"
homepage: "https://keepassxc.org"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 28
forks: 50
openIssues: 6
closedIssues: 63
watchers: 9
contributors: 48
recentReleases: 0
createdAt: "2016-11-12T12:43:31Z"
lastCommitAt: "2026-11-01T10:44:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 76
undervaluedScore: 54
maintainers: ["phoerious", "dependabot[bot]", "alexgithublab"]
openGraphImageUrl: "https://opengraph.githubassets.com/34dfb111090488703ae304167766515a1da97f0b8e7e1f1cae84ed7948bbc56b/keepassxreboot/keepassxc-org"
---

# KeePassXC.org

Website sources for https://keepassxc.org.

## Prerequisites

This website uses [Hugo](https://gohugo.io/). To build the sources, you need to install it first.

Additionally, NPM (bundled with NodeJS) is required to install other dependencies.

Linux:
```bash
sudo snap install hugo
sudo snap install node --classic
```

macOS:
```bash
brew install hugo node
```

Windows:
```bash
winget install Hugo.Hugo.Extended OpenJS.NodeJS
```

## Build website

Install NPM dependencies
```bash
npm install
```

Compile website:
```bash
hugo
```

The compiled HTML files will be stored in the `public` folder.

Instead of building static HTML files, you can also start a Hugo development server with live reload:
```bash
hugo serve
```

## Create a new blog post

To create a new blog post, run

```bash
hugo new blog/202X-XX-XX-blog-post-name.md
```

This will create a new file `blog/202x-XX-XX-blog-post-name.md` from the `blog` archetype with inserted
boilerplate and some pre-filled frontmatter fields.
