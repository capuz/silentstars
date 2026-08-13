---
repo: "KingCountySAR/respond-next"
name: "respond-next"
description: "Respond site in next.js"
readmeQualityOk: true
url: "https://github.com/KingCountySAR/respond-next"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 9
forks: 5
openIssues: 21
closedIssues: 21
watchers: 5
contributors: 8
recentReleases: 5
createdAt: "2023-03-25T02:21:40Z"
lastCommitAt: "2026-08-13T05:18:52Z"
lastReleaseAt: "2026-08-09T02:22:52Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 76
undervaluedScore: 64
maintainers: ["valonm", "kohlikohl", "mcosand"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8df0e993497f4505803f8e5b8fb7b0dd6d55a05b0b6649d31bfac8abf14461e/KingCountySAR/respond-next"
---

## Configure Development Environment

### Install dev/build tools
- [Node.js] (https://nodejs.org/en) 16.x or higher
- [Yarn](https://yarnpkg.com)

**Windows users**:
- Ensure git's `autocrlf` setting is set to `false` for this repository. If it's not, Git will checkout the files with CRLF line endings and the linter will throw errors.
- If your global setting is already `false` you have nothing to do.
- To view your current setting in the terminal, run the following command from within this repository: `git config core.autocrlf`
- To set `autocrlf` for this repository only (global unchanged) run the following command from within this repository: `git config core.autocrlf false`

### Create dev database
Development is supported on either a local or remote MongoDB server.
- For a local installation, it's recommended to install the [Community Server](https://www.mongodb.com/try/download/community) and [Compass UI](https://www.mongodb.com/try/download/compass).
- For a remote DB, use [Mongo Atlas](https://www.mongodb.com/atlas/database). You can also use [Compass UI](https://www.mongodb.com/try/download/compass), but isn't strictly necessary.

In your MongoDB, add a database named…
