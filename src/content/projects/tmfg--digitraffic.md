---
repo: "tmfg/digitraffic"
name: "digitraffic"
description: "Content development for Digitraffic web pages."
url: "https://github.com/tmfg/digitraffic"
homepage: "https://www.digitraffic.fi"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [75]
topics: ["opendata", "traffic-data"]
stars: 27
forks: 12
openIssues: 0
closedIssues: 4
watchers: 17
contributors: 30
recentReleases: 0
createdAt: "2015-05-26T19:48:12Z"
lastCommitAt: "2026-07-03T12:22:38Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 63
maintainers: ["teijosol", "dependabot[bot]", "jouniso"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbbe48c2475c16ec746ef2044597dab8bca34c58ee929ce7ffd39761f08ca304/tmfg/digitraffic"
---

# Digitraffic

# Install lefthook githooks

    pnpm install
    pnpm run setup

## Run locally with Docker

```
# Install dependencies
pnpm install

# Compiled TypeScript files and install compiled JavaScript files in place. Install fonts and Goole icons in place.
pnpm run build-and-install

# Build Docker image
docker build . -t digitraffic-pages

# Clean 
rm -r _site

# Run in docker
docker run -p 3000:3000 -p 3001:3001 -v ${PWD}:/app digitraffic-pages:latest
```

Or with scripts: `./build-and-run-in-docker.sh` that uses
`build-docker-image.sh` and `run-in-docker.sh` scripts.

# Format on files with BiomeJS

`pnpm run format:check-staged` is run by lefthook pre-commit hook.

    pnpm run format:check":         Check all files
    pnpm run format:check-changed": Check changed files
    pnpm run format:check-staged":  Check staged files
    pnpm run format:fix":           Check and fix all files
    pnpm run format:fix-changed":   Check and fix changed files
    pnpm run format:fix-staged":    Check and fix staged files
    pnpm run format:package-json":  Sort package.json

## Update deps

### Update dependencies for page scripts

```
pnpm update --latest
pnpm install
pnpm run…
