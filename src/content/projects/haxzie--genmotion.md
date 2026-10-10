---
repo: "haxzie/genmotion"
name: "genmotion"
description: "Create motion graphics and launch videos using claude code"
readmeQualityOk: true
url: "https://github.com/haxzie/genmotion"
homepage: "https://genmotion.dev"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [50, 40]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-29T09:10:00Z"
lastCommitAt: "2026-10-10T10:04:35Z"
lastReleaseAt: "2026-09-15T12:00:19Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 61
maintainers: ["claude", "haxzie", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b24debe3d0f203f03fd96b07242a8dd2e3a3489706bf4a418ca5801bb86adfba/haxzie/genmotion"
---

# GenMotion

A desktop video studio you point at a coding agent. Describe a video; the agent
writes animated scenes as React/TSX, you preview them frame-accurately, arrange
them on a timeline, and export an MP4 — all on your own machine.

The agent is **your** Claude Code or Codex CLI, signed in with your own
credentials. There is no model subscription to buy here, and no prompt leaves
for a server we run.

**[Download for macOS](https://genmotion.dev/download)** · Apple silicon,
signed and notarized. Or from a terminal:

```sh
curl -fsSL https://genmotion.dev/install.sh | sh
```

That installs the app and, if Node 22+ is installed, the `genmotion` command
from npm: `genmotion .` opens the app with the current folder shared with the
agent, `genmotion init` starts a video from the terminal, and `genmotion
upgrade` pulls the next release of both. The app's account menu installs the
same command. There is one `genmotion`, from the npm package `@genmotion/cli`; the app no longer
writes a launcher script of its own.

### Or skip the app: the CLI

The same studio, renderer and agent tools run from any terminal, with any agent:

```sh
npx @genmotion/cli init my-video && cd my-video &&…
