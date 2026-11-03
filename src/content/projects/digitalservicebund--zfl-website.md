---
repo: "digitalservicebund/zfl-website"
name: "zfl-website"
description: "Website for Zentrum für Legistik, based on Astro"
readmeQualityOk: true
url: "https://github.com/digitalservicebund/zfl-website"
homepage: "https://zfl.bund.de"
language: "Astro"
languages: ["Astro"]
languagePcts: [60]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 26
recentReleases: 0
createdAt: "2025-12-15T16:10:02Z"
lastCommitAt: "2026-11-03T12:47:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 65
maintainers: ["dependabot[bot]", "daniel-marcus", "ehrengretl"]
openGraphImageUrl: "https://opengraph.githubassets.com/849f51bb044a38ecbec82e12840b3f57bdf71be7b1773d2838f1600cfe014cba/digitalservicebund/zfl-website"
---

# Zentrum für Legistik — Website

This is the new implementation for Zentrum für Legistik, based on Astro and Tailwind.

## Architecture & documentation

- **Architecture Decision Records (ADRs)**: See the ADRs in [`doc/adr/`](https://github.com/digitalservicebund/zfl-website/blob/HEAD/doc/adr/).
- **Tailwind variants**: Guidelines for `tailwind-variants` usage in [`doc/tailwind-variants.md`](https://github.com/digitalservicebund/zfl-website/blob/HEAD/doc/tailwind-variants.md).
- **Icons**: Icon usage and conventions in [`doc/icons.md`](https://github.com/digitalservicebund/zfl-website/blob/HEAD/doc/icons.md).

## Development Setup

To set up the project for development, follow these steps:

### Prerequisites

#### Node.js & Dependencies

We aim to use the current active [LTS version of nodejs](https://nodejs.dev/en/about/releases/). We use [mise](https://mise.jdx.dev/) to manage the runtimes and tools for development.

You need to have mise installed on your computer; see the [mise installation docs](https://mise.jdx.dev/installing-mise.html) for the available options.

Install the dependencies by [integrating mise into your…
