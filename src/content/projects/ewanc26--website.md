---
repo: "ewanc26/website"
name: "website"
description: "my website at ewancroft.uk"
readmeQualityOk: true
url: "https://github.com/ewanc26/website"
homepage: "https://ewancroft.uk"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [47, 42]
topics: ["personal-website", "portfolio", "website"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-01-30T17:04:07Z"
lastCommitAt: "2026-11-09T03:31:18Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 78
maintainers: ["ewanc26", "mistral-vibe", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d559e86027cb48e79d34d17fcbd47e18837f563b3653d1d381ade0c068bc2fe/ewanc26/website"
fundingLinks: ["GITHUB:https://github.com/ewanc26", "KO_FI:https://ko-fi.com/ewancroft"]
---

# Website

A personal website and blog built with [SvelteKit](https://svelte.dev/docs/kit), with an AT Protocol-native publishing stack built around [Standard.site](https://standard.site/) and [Leaflet](https://leaflet.pub/).

The site owns the presentation layer while AT Protocol records provide the publication and document data. Native Leaflet documents are rendered as structured content blocks, with Markdown retained as a compatibility fallback.

## Features

- **AT Protocol-native blog**: Discover publications and documents from the configured AT Protocol DID rather than storing posts as local Markdown files
- **Standard.site publications**: Blog documents are associated with a Standard.site publication record
- **Leaflet rendering**: Native `pub.leaflet.blocks.*` content is serialised and rendered with dedicated Svelte components
- **Rich text facets**: UTF-8 byte-indexed facets support formatting, links, mentions, IDs, code, highlights, and footnotes
- **Embedded records**: Leaflet references to posts and publications can be hydrated from AT Protocol records and rendered in context
- **Markdown compatibility**: Leaflet content can also be converted to Markdown and rendered…
