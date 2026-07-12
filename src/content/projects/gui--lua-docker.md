---
repo: "GUI/lua-docker"
name: "lua-docker"
description: "Minimal, automated, and up-to-date Docker images for different Lua and LuaJIT versions."
readmeQualityOk: true
url: "https://github.com/GUI/lua-docker"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [48, 45]
stars: 74
forks: 12
openIssues: 2
closedIssues: 3
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2018-12-10T00:21:36Z"
lastCommitAt: "2026-07-12T06:18:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 36
maintainers: ["GUI"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf98d685b981714acdf76da19f66d317da36c87eb7d51878486f31588c979b09/GUI/lua-docker"
---

# lua-docker

Minimal, automated, and up-to-date Docker images for different Lua and LuaJIT versions.

Provides variants for:

- Debian, Alpine, and Ubuntu base images
- With LuaRocks
- LuaJIT
- LuaJIT built with Lua 5.2 compatibility mode

This repo provides the source for both Lua and LuaJIT images. The different images can be found at:

- [`nickblah/lua`](https://hub.docker.com/r/nickblah/lua/): Lua images.
- [`nickblah/luajit`](https://hub.docker.com/r/nickblah/luajit/): LuaJIT images.

New versions of Lua, LuaJIT, and LuaRocks should automatically be detected and trigger new docker images to built, tagged, and pushed by a daily [GitHub Actions workflow](https://github.com/GUI/lua-docker/blob/main/.github/workflows/main.yml).

## Supported Tags and Respective Dockerfile Links

### [`nickblah/lua`](https://hub.docker.com/r/nickblah/lua/)
- `5`, `5-debian`, `5-trixie`, `5.5`, `5.5-debian`, `5.5-trixie`, `5.5.0`, `5.5.0-debian`, `5.5.0-trixie`, `debian`, `latest`: [lua-5.5/trixie/Dockerfile](https://github.com/GUI/lua-docker/blob/main/lua-5.5/trixie/Dockerfile)
- `5-bookworm`, `5.5-bookworm`, `5.5.0-bookworm`:…
