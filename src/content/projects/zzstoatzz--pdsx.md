---
repo: "zzstoatzz/pdsx"
name: "pdsx"
description: "cli for atproto record CRUD"
readmeQualityOk: true
url: "https://github.com/zzstoatzz/pdsx"
homepage: "https://pdsx.zzstoatzz.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 6
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-07T06:38:39Z"
lastCommitAt: "2026-07-25T06:02:01Z"
lastReleaseAt: "2025-12-07T07:01:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["zzstoatzz", "dgp1130"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d9848a9aabc0d6766010f2d2be4d69b112656b46775ecb7a458ecffcbc937be/zzstoatzz/pdsx"
---

# pdsx

general-purpose cli for atproto record operations

📚 **[documentation](https://pdsx.zzstoatzz.io)**

## installation

```bash
uv add pdsx
# or run directly
uvx pdsx --help
# or from GitHub (latest)
uvx --from git+https://github.com/zzstoatzz/pdsx pdsx --help
```

## quick start

**important**: flags like `-r`, `--handle`, `--password` go BEFORE the command (`ls`, `get`, etc.)

```bash
# read anyone's posts (no auth needed)
uvx pdsx -r zzstoatzz.io ls app.bsky.feed.post -o json | jq -r '.[].text'

# update your bio (requires auth)
export ATPROTO_HANDLE=your.handle ATPROTO_PASSWORD=your-app-password
uvx pdsx edit app.bsky.actor.profile/self description='new bio'
```

## features

- crud operations for atproto records (list, get, create, update, delete)
- **batch operations**: delete multiple records concurrently with progress tracking
- **blob upload**: upload images, videos, and other binary content
- **cursor pagination**: paginate through large collections
- **MCP server**: expose operations via [model context protocol](https://modelcontextprotocol.io) for AI agents
- optional auth: reads with `--repo` flag don't require authentication
- shorthand URIs: use…
