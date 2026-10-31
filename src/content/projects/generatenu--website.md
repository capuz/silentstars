---
repo: "GenerateNU/website"
name: "website"
description: "Generate's website"
readmeQualityOk: true
url: "https://github.com/GenerateNU/website"
homepage: "https://generatenu.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 10
forks: 1
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 44
recentReleases: 0
createdAt: "2021-10-06T22:13:07Z"
lastCommitAt: "2026-10-31T01:59:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 72
maintainers: ["josh-torre", "Tomahawk2191", "in-mai-space"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c7e13343c4c0ab6850cbcddb29e16c1a1e8ec9cc0a6abd75e91a5a65f6f8b14/GenerateNU/website"
---

# Generate Website

The website for [Generate](https://generatenu.com), Northeastern's student-led product development studio.

Built with React, TypeScript and Vite. Content such as directors, teams, showcases and copy comes from [Sanity](https://www.sanity.io).

## Getting started

### Prerequisites

The easiest way to get the right versions of everything is [mise](https://mise.jdx.dev) (`brew install mise`): run `mise install` in the repo and it installs the Bun and Node.js versions pinned in [`mise.toml`](https://github.com/GenerateNU/website/blob/HEAD/mise.toml). Otherwise, install them yourself:

- [Bun](https://bun.sh) 1.4.4 or newer
- [Node.js](https://nodejs.org) 24 or newer (used by the lint and test tools). With [nvm](https://github.com/nvm-sh/nvm), run `nvm install` in the repo to install and switch to the right version.

### Setup

```sh
git clone https://github.com/GenerateNU/website.git
cd website
mise install           # or `nvm install` if you don't use mise
cp .env.example .env   # then fill in the values
mise run install
mise run dev
```

The site runs at http://localhost:5173.

### Environment variables

| Variable                   | Used by       |…
