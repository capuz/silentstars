---
repo: "simion/termic"
name: "termic"
description: "Open-source Conductor.build alternative. Runs the real claude/gemini/codex CLIs in real terminals, no SDK middleman"
readmeQualityOk: true
url: "https://github.com/simion/termic"
homepage: "https://termic.dev"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [66, 32]
stars: 190
forks: 29
openIssues: 12
closedIssues: 94
watchers: 1
contributors: 16
recentReleases: 10
createdAt: "2026-05-16T23:16:28Z"
lastCommitAt: "2026-08-11T04:49:35Z"
lastReleaseAt: "2026-05-18T22:44:56Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 97
undervaluedScore: 35
maintainers: ["simion", "MHohlios", "adamatan"]
openGraphImageUrl: "https://opengraph.githubassets.com/24c4a8f044e4056bffe10147391f1ccdd142d2081007847e13f9f3e80731f49f/simion/termic"
fundingLinks: ["GITHUB:https://github.com/simion"]
---

### Run `claude`, `codex`, `antigravity`, `opencode` and more in parallel. Each in its own git worktree.

**Every new feature the day they ship it: the real CLIs on your own Pro / Max plan, no vendor backend.**

[**Install**](#install) · [What it does](#what-it-does) · [Sandbox](#sandbox) · [vs. Conductor](#why-use-termic-over-conductor) · [Contributing](https://github.com/simion/termic/blob/HEAD/CONTRIBUTING.md)

<br />

</div>

Termic is a free, open-source desktop app that runs your AI coding-agent CLIs
side by side, each isolated in its own git worktree, with an optional per-workspace
macOS sandbox cage. It spawns the **real** `claude`, `codex`, `agy` (Antigravity),
`copilot` and `grok` binaries (not the vendor SDKs), so inference rides on the Pro / Max plan you
already pay for. Spin up four agents on the same branch, broadcast one prompt to
all of them, watch a reliable work-done indicator tell you the moment each finishes.

---

## Install

The recommended path is Homebrew + the official tap:

```sh
brew install --cask simion/termic/termic
```

That single command auto-taps `simion/homebrew-termic`, downloads the
latest `.dmg`, and installs `Termic.app` into `/Applications`.…
