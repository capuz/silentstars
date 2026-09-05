---
repo: "Comfy-Org/docs"
name: "docs"
description: "Documentation for ComfyUI"
readmeQualityOk: true
url: "https://github.com/Comfy-Org/docs"
homepage: "https://docs.comfy.org"
language: "MDX"
languages: ["MDX"]
languagePcts: [100]
stars: 287
forks: 204
openIssues: 61
closedIssues: 106
watchers: 6
contributors: 71
recentReleases: 0
createdAt: "2024-03-25T20:55:42Z"
lastCommitAt: "2026-09-05T07:49:41Z"
status: "thriving"
tags: ["needs_contributors", "community_hub", "fork_magnet"]
healthScore: 91
undervaluedScore: 43
maintainers: ["lin-bot23", "comfyui-wiki", "robinjhuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/4501da54b23ecb5fd2cd007d0531ffd4b6a94122e5a93bf5aa13a14b6660719b/Comfy-Org/docs"
discussionCount: 302
---

# ComfyUI Documentation

| [English](https://github.com/Comfy-Org/docs/blob/HEAD/README.md) | [中文](https://github.com/Comfy-Org/docs/blob/HEAD/readme/zh-CN.md) | [日本語](https://github.com/Comfy-Org/docs/blob/HEAD/readme/ja-JP.md) | [한국어](https://github.com/Comfy-Org/docs/blob/HEAD/readme/ko-KR.md) |

## Development

To preview documentation changes locally, first install dependencies and then start the development server:

```
npm i
npm run dev
```

To sync translations after editing English docs, see [Automated translation](#automated-translation) below (`npm run translate`).

### Create a PR

Create a PR. Once it is accepted Vercel will deploy the change to https://docs.comfy.org/

### Generating API Reference Docs

Can either use an OpenAPI file or URL containing the file:

```bash
cd registry/api-reference # Keep API files separated by products.
npx @mintlify/scraping@latest openapi-file <path-to-openapi-file>
```

This will only generate the MDX files for each endpoint. You need to add a link to these files in `docs.json`, and the up-to-date API spec will be shown on that doc page.

## Special Note on Renaming Files

- Renaming files can cause some external links to become…
