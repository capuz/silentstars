---
repo: "masumi-network/masumi-docs"
name: "masumi-docs"
description: "Tutorials, Examples, Reference Implementations and Packages for Masumi"
readmeQualityOk: true
url: "https://github.com/masumi-network/masumi-docs"
homepage: "https://docs.masumi.network"
language: "MDX"
languages: ["MDX", "TypeScript"]
languagePcts: [47, 31]
stars: 7
forks: 5
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-01-26T03:37:10Z"
lastCommitAt: "2026-10-24T08:20:08Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 57
undervaluedScore: 52
maintainers: ["nori-masumi[bot]", "schaier-io", "Sarthib7"]
openGraphImageUrl: "https://opengraph.githubassets.com/16fce7c65add1460e1dba8a95fe3f047cd2d34da04e307a754ac852704a97306/masumi-network/masumi-docs"
---

# masumi-docs-fuma

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `app/layout.config.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.…
