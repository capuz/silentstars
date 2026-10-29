---
repo: "goofansu/piano"
name: "piano"
description: "Pi harness in the browser"
readmeQualityOk: true
url: "https://github.com/goofansu/piano"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 5
forks: 1
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-02T09:23:41Z"
lastCommitAt: "2026-10-29T10:22:39Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 52
maintainers: ["exe-dev-github-integration[bot]", "goofansu"]
openGraphImageUrl: "https://opengraph.githubassets.com/84ead7a0eb359e5dec1771863d57c2c901d0761086167b519921ddba165334fa/goofansu/piano"
---

# piano

Piano is a browser UI for [Pi](https://github.com/earendil-works/pi) sessions. It starts and
continues sessions across your folders and their Git worktrees.

## Use

### Requirements

- Node.js 24 and npm.
- Git.
- [Worktrunk](https://worktrunk.dev) (`wt`) 0.80.0 or later on `PATH`, to create worktrees from
  Piano. Piano supports the latest release.
- Credentials for a model provider. Sign in through Piano, or reuse an existing Pi setup in
  `~/.pi/agent`. Piano installs the Pi runtime with its own dependencies.

### Install and start

1. Clone this repository and enter its directory.
2. Install dependencies, build the UI, and start the server:

	```bash
	npm install
	npm run build
	npm start
	```

3. Open <http://127.0.0.1:7070>.

Piano has no login and runs commands as your user. The Piano host must be private: reachable only
by its trusted developer, on loopback or through a private authenticated proxy such as exe.dev's.
Never expose it publicly. This is a host-access rule, not a repository-privacy requirement;
development and the repository can be public. See
[browser origins](https://github.com/goofansu/piano/blob/HEAD/docs/configuration.md#browser-origins) for the…
