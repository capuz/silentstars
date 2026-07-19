---
repo: "Lidemy/error-baker-blog"
name: "error-baker-blog"
description: "ErrorBaker blog"
originalDescription: "ErrorBaker blog"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Lidemy/error-baker-blog"
homepage: "https://blog.errorbaker.tw"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [68]
stars: 12
forks: 5
openIssues: 15
closedIssues: 29
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2021-07-06T11:26:01Z"
lastCommitAt: "2026-07-19T06:11:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 73
maintainers: ["benben6515", "futianshen", "opencode-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c49d4164ba9b090d726f9f07f54ac9bba86280fb71fda492649d2035e9eb32d/Lidemy/error-baker-blog"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/11ty"]
---

# ErrorBaker Technical Collaborative Blog

https://blog.errorbaker.tw/

This is the source code for the ErrorBaker Technical Collaborative Blog, mainly adapted from [Why I Left Medium to Build a Blog with Eleventy](https://jason-memo.dev/posts/why-i-leave-medium-and-build-blog-with-eleventy/) which recommends [eleventy-high-performance-blog](https://github.com/google/eleventy-high-performance-blog).

The main modification is changing a personal blog into a collaborative blog, which supports the following features:

1. Easily add author information
2. Each author has their own folder
3. Each author has their own personal page that can be customized
4. Corresponding author information will be automatically appended at the end of the article

## Development

```
npm install
npm run watch
```

## Deployment

Just push the code, and it will automatically be deployed via Netlify.

## How to Add an Author?

Each author will have a unique key for identification; let's assume the key is peter.

1. Place the personal avatar in `img/authors`
2. Open `_data/metadata.json`, and add an object in the `authors` array, following the format of other objects, with the key as `peter`
3. Create a…
