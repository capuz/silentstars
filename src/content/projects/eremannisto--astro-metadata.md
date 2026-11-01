---
repo: "eremannisto/astro-metadata"
name: "astro-metadata"
description: "Metadata for Astro: page tags, social cards, favicons, the web app manifest, structured data and a dev toolbar app that checks your pages."
readmeQualityOk: true
url: "https://github.com/eremannisto/astro-metadata"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [64, 22]
topics: ["astrojs", "metadata", "seo"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-02-19T07:33:51Z"
lastCommitAt: "2026-11-01T10:44:49Z"
lastReleaseAt: "2026-10-17T05:11:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 62
maintainers: ["eremannisto"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbe3d897a714b0d04c1345d2190cf6a812d879fa35d43dcb49baab1f75fae84d/eremannisto/astro-metadata"
---

# Astro Metadata

The page metadata for Astro: the title, the description, the canonical URL, social cards, favicons, the web app manifest and structured data. Set the site values one time, and give each page only its own values. In dev, an app in the Astro dev toolbar checks each page.

## Install

```bash
npm install @mannisto/astro-metadata
```

## Configuration

```typescript
// astro.config.ts
import metadata from "@mannisto/astro-metadata"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://example.com",
  integrations: [
    metadata({
      siteName: "Acme Studio",
      titleTemplate: "%s | Acme Studio",
      description: "Tools for small teams.",
      image: {
        url: "/og.jpg",
        alt: "Acme Studio",
        width: 1200,
        height: 630,
      },
      twitter: {
        site: "@acmestudio",
      },
      themeColor: "#111111",
      feeds: [
        {
          href: "/rss.xml",
          title: "News",
        },
      ],
      favicon: {
        source: "./src/assets/logo.svg",
      },
      manifest: {
        name: "Acme Studio",
      },
    }),
  ],
})
```

Set `site` in the Astro config. The canonical URL…
