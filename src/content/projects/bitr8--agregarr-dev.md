---
repo: "bitr8/agregarr-dev"
name: "agregarr-dev"
description: "Personal fork of Agregarr with performance fixes"
url: "https://github.com/bitr8/agregarr-dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 53
forks: 3
openIssues: 5
closedIssues: 24
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2026-01-01T12:45:51Z"
lastCommitAt: "2026-06-28T02:01:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 35
maintainers: ["bitr8", "Bergasha"]
openGraphImageUrl: "https://opengraph.githubassets.com/5185a3108a6c1714f89abd129501f8868e7c9db6563d80f28837ede51522dbce/bitr8/agregarr-dev"
---

# Agregarr (bitr8 fork)

Active fork of [Agregarr](https://github.com/agregarr/agregarr) packaging performance fixes, placeholder lifecycle improvements, and open upstream PRs into a single Docker image. Available as `bitr8/agregarr` on Docker Hub.

## Docker Image

Available on Docker Hub as [`bitr8/agregarr`](https://hub.docker.com/r/bitr8/agregarr).

| Tag | What it tracks |
|-----|----------------|
| `:latest` | Stable releases. Recommended for most users. |
| `:2.5.0` (etc.) | Pinned to a specific release. |
| `:develop` | Bleeding edge. Builds on every push to develop, may break. |

**Multi-arch** — release tags support amd64 and arm64 (Apple Silicon, Raspberry Pi 4+). The `:develop` tag builds amd64 only.

**Switching from upstream?** Replace the image line in your existing compose file. Config volumes are compatible.

```diff
-    image: agregarr/agregarr:latest
+    image: bitr8/agregarr:latest
```

### Compose example

```yaml
services:
  agregarr:
    image: bitr8/agregarr:latest
    container_name: agregarr
    volumes:
      - /path/to/config:/app/config
      - /path/to/placeholder/movies:/data/movies # Optional: Coming Soon
      - /path/to/placeholder/tv:/data/tv #…
