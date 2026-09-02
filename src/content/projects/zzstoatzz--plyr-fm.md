---
repo: "zzstoatzz/plyr.fm"
name: "plyr.fm"
description: "audio streaming app"
readmeQualityOk: true
url: "https://github.com/zzstoatzz/plyr.fm"
homepage: "https://plyr.fm"
language: "Python"
languages: ["Python", "Svelte"]
languagePcts: [62, 23]
stars: 20
forks: 5
openIssues: 73
closedIssues: 139
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-10-31T20:37:21Z"
lastCommitAt: "2026-09-02T08:04:19Z"
lastReleaseAt: "2025-11-09T22:59:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 58
maintainers: ["zzstoatzz", "claude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fcec7aeaff3c96fd3079a583b266b1f126ea481caab9b5f229ba6fb94bbf8fa/zzstoatzz/plyr.fm"
discussionCount: 9
---

# [plyr.fm](https://plyr.fm)

audio streaming app

check the [plyr.fm artist page](https://plyr.fm/u/plyr.fm) for the latest [auto-generated](https://github.com/zzstoatzz/plyr.fm/blob/HEAD/.github/workflows/status-maintenance.yml) development podcast!

<details>
<summary>tech stack</summary>

### backend
- **framework**: [FastAPI](https://fastapi.tiangolo.com)
- **database**: [Neon PostgreSQL](https://neon.com)
- **storage**: [Cloudflare R2](https://developers.cloudflare.com/r2/)
- **background tasks**: [docket](https://github.com/zzstoatzz/docket) (Redis-backed)
- **hosting**: [Fly.io](https://fly.io)
- **observability**: [Pydantic Logfire](https://logfire.pydantic.dev)
- **auth**: [atproto OAuth 2.1](https://atproto.com/specs/oauth)

### frontend
- **framework**: [SvelteKit](https://kit.svelte.dev) with Svelte 5 runes
- **runtime**: [Bun](https://bun.sh)
- **hosting**: [Cloudflare Pages](https://pages.cloudflare.com)
- **styling**: vanilla CSS (lowercase aesthetic)

### services
- **transcoder**: Rust audio conversion service (ffmpeg, Fly.io)
- **moderation**: Rust ATProto labeler for copyright/sensitive content (Fly.io)
- **mood search**:…
