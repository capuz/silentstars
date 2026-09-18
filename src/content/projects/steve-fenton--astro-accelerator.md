---
repo: "Steve-Fenton/astro-accelerator"
name: "astro-accelerator"
description: "An Astro-flavoured starting point."
readmeQualityOk: true
url: "https://github.com/Steve-Fenton/astro-accelerator"
language: "CSS"
languages: ["CSS", "Astro", "JavaScript"]
languagePcts: [43, 27, 24]
stars: 16
forks: 5
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2022-09-16T15:04:05Z"
lastCommitAt: "2026-09-18T08:27:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 69
maintainers: ["Steve-Fenton", "steve-fenton-octopus", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d0c96ea5f721c1bbf6a605c8f691c81929523206a6fbb70a9b133db6a89aefb/Steve-Fenton/astro-accelerator"
---

# Astro Accelerator

Review the documentation at [astro.stevefenton.co.uk](https://astro.stevefenton.co.uk/)

## Development principles

Astro Accelerator is designed for re-use. That means we have to be careful to ensure consumers of the Accelerator can easily style everything. The Accelerator ships with sensible defaults, but it should be possible to replace just about anything.

To make this possible...

- Consider whether a change should be accompanied by a feature flag
- Make sure SVG icons can be styled in CSS (stroke and fill shouldn't be hard-coded to a colour)
- For drastic changes to a component, consider creating an alternate component instead
- Update the documentation files with changes to help folks out

## Image optimization on Linux

Currently, to run the image optimization on Linux, you need to force a compatible version of Sharp to be installed. Any suggestions for a better approach would be appreciated. This is not needed on Windows or Mac.

```bash
pnpm install --include=optional sharp
pnpm install --force @img/sharp-linux-x64
```

## Publish

Run the command:

```bash
    pnpm refresh
```

This updates dependencies, increments the version number, and runs…
