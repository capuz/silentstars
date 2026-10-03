---
repo: "flowrix-io/florr_clone"
name: "florr_clone"
description: "Florr.io clone (discord https://discord.gg/SvAYCGsmAg)"
readmeQualityOk: true
url: "https://github.com/flowrix-io/florr_clone"
homepage: "https://flowrix.sussybite.dev"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [59, 37]
topics: ["florr", "florrio"]
stars: 9
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2024-12-03T02:32:34Z"
lastCommitAt: "2026-10-03T22:03:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 78
maintainers: ["sussybite8888"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dda145e906ab5fab772ae75cb9f326e8b4633ecd352c040e76ece5a94e9a367/flowrix-io/florr_clone"
discussionCount: 0
---

# flowrix 

[florr.io](https://florr.io) clone

[Public Server](https://florrclone.cryodome.com)

[Discord](https://discord.com/invite/SvAYCGsmAg)

> **License notice:** As of October 2026 this project is licensed under the
> [GNU Affero General Public License v3.0 or later](https://github.com/flowrix-io/florr_clone/blob/HEAD/LICENSE) (previously GPL v3
> or later, and before that ISC), because it contains code adapted from
> [gardn](https://github.com/trigonal-bacon/gardn), which is AGPL-licensed.
> If you distribute this software or a modified version of it, or run a
> modified version as a network service, you must do so under the same license
> and make the corresponding source code available to its users.

## Quick start

Requires Node.js 22+, Emscripten, Make and CMake

```bash
npm install
npm run build   # builds cpp, webpacks the client, compresses bundle
npm start       # compiles the server and runs dist/server.js
```

Open `https://localhost:3000`.

### Play offline

```bash
npm run build:offline   # -> dist/offline.html (needs emscripten on PATH)
```

`dist/offline.html` is the whole game in one file: the server and the client
compiled into one wasm and embedded in the…
