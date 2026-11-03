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
stars: 315
forks: 218
openIssues: 54
closedIssues: 123
watchers: 7
contributors: 81
recentReleases: 0
createdAt: "2024-03-25T20:55:42Z"
lastCommitAt: "2026-11-03T11:14:34Z"
status: "thriving"
tags: ["needs_contributors", "community_hub", "fork_magnet"]
healthScore: 93
undervaluedScore: 43
maintainers: ["cloud-code-bot[bot]", "lin-bot23", "comfyui-wiki"]
openGraphImageUrl: "https://opengraph.githubassets.com/b554c71ed174e60698f879e465cf046377c65d1ef8f803c7e4fe10171211a523/Comfy-Org/docs"
discussionCount: 327
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
