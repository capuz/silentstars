---
repo: "kentcdodds/mediarss"
name: "mediarss"
description: "An RSS feed generator for media (audio/video)."
readmeQualityOk: true
url: "https://github.com/kentcdodds/mediarss"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 43
forks: 7
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-03-12T21:44:09Z"
lastCommitAt: "2026-08-24T04:20:53Z"
lastReleaseAt: "2026-01-08T20:56:51Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 50
maintainers: ["kentcdodds", "kody-bot", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8de6a5262ef4dde4f67a2a31d7ec741edd22b9dcf785f89f8465e826df04fc2/kentcdodds/mediarss"
---

# MediaRSS

  <h1 align="center">MediaRSS</h1>
  <strong align="center">
    An RSS feed generator for audio files (audiobooks, podcasts, audio series).
  </strong>
</div>

> **Note:** While MediaRSS is primarily designed and tested for audio files
> (MP3, M4A, M4B, etc.), video files should also work. However, video support is
> not the primary focus and may have limitations (especially with regard to
> performance) with certain formats.

## Remix Version Notes

MediaRSS currently targets `remix@3.0.0-beta.10`.

For migration details, package guidance, and framework usage patterns, use the
repo-local Remix skill at `.agents/skills/remix/SKILL.md`.

## Development Tooling

- Runtime: Node.js 24
- Package manager: npm
- Linter: `oxlint`
- Formatter: `oxfmt` (shared preset from `@epic-web/config`)

Common commands:

- `npm run dev`
- `npm run lint`
- `npm run format`
- `npm run validate`

## Screenshots

### Dashboard

### Feed Details

### Create Feed

### Media Library

### Media Details

## Analytics

MediaRSS includes built-in feed and media analytics in the admin dashboard:

- **Feed analytics** (per feed + per token):
  - RSS fetches
  - media requests
  - download starts
  -…
