---
repo: "Binaergewitter/serious-bg"
name: "serious-bg"
description: "The podcasting enabled CMS powering binaergewitter"
readmeQualityOk: true
url: "https://github.com/Binaergewitter/serious-bg"
homepage: "https://blog.binaergewitter.de"
language: "HTML"
languages: ["HTML"]
languagePcts: [91]
topics: ["podcast", "csm", "hacktoberfest"]
stars: 24
forks: 45
openIssues: 4
closedIssues: 66
watchers: 7
contributors: 51
recentReleases: 0
createdAt: "2012-07-08T13:41:09Z"
lastCommitAt: "2026-07-23T06:17:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 94
undervaluedScore: 74
maintainers: ["ltsavar", "rb2k", "bmalum"]
openGraphImageUrl: "https://opengraph.githubassets.com/e434f8ae70669b9a04b96df62128aadf7d60ba78ad59676735fdcc147f3d12c5/Binaergewitter/serious-bg"
fundingLinks: ["GITHUB:https://github.com/Binaergewitter", "PATREON:https://patreon.com/binaergewitter", "LIBERAPAY:https://liberapay.com/Binaergewitter", "KO_FI:https://ko-fi.com/binaergewitter", "CUSTOM:http://blog.binaergewitter.de/pages/spenden"]
---

# Binärgewitter Blog

The official blog for the [Binärgewitter](https://blog.binaergewitter.de/) podcast, built with [Hugo](https://gohugo.io/).

## Features

- **100% Native Hugo**: No external scripts or dependencies
- **Podcast Integration**: Dynamic RSS feeds for all categories and codecs
- **FlexSearch Integration**: High-performance client-side search with German linguistic support
- **Optimized Index**: Gzipped `index.json` with maximum compression and local fallback
- **Responsive Design**: Mobile-friendly Bootstrap-based layout
- **Fly.io Deployment**: Automated Docker-based deployment

## Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) v0.111.3 or later (extended version)

### Local Development

```bash
# Start the development server
hugo server

# Build the site
hugo
```

The site will be available at `http://localhost:1313/`.

### Creating New Posts

```bash
# Create a new post (uses archetype for automatic metadata)
hugo new post/YYYY-MM-DD-your-post-title.md
```

The archetype automatically generates:
- Title (derived from filename)
- Date and time
- Legacy `/blog/` aliases for SEO
- Front matter structure

## Project Structure

```
.
├──…
