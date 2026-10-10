---
repo: "manuelcecchetto/pi-gna"
name: "pi-gna"
description: "A desktop app for the pi coding agent. Your pi, with a window. 🤌"
readmeQualityOk: true
url: "https://github.com/manuelcecchetto/pi-gna"
homepage: "https://pi.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["coding-agent", "desktop-app", "electron", "macos", "pi"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-02T22:19:53Z"
lastCommitAt: "2026-10-10T10:04:19Z"
lastReleaseAt: "2026-10-04T19:05:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 57
maintainers: ["manuelcecchetto"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd08561a1aaa1b7edf83bf3fcf75fb0aa61618286f673460b3bc64d1f4c5d643/manuelcecchetto/pi-gna"
---

**pi-gna** (Italian *pigna*, as in the 🤌 "mano a pigna" gesture) is a frontend, not a fork. Every chat is a
`pi --mode rpc` process running the pi you already have: your models and logins, settings, extensions, skills,
prompt templates and MCP servers, and your sessions are pi's own session files. Start a chat in the terminal,
continue it in pi-gna, and go back. Nothing to migrate, nothing to configure twice.

macOS only for now (Apple silicon and Intel).

## Install

**Let pi do it.** Paste this into pi (or any coding agent):

```text
Install pi-gna for me by following the "For agents" steps in https://github.com/manuelcecchetto/pi-gna
```

**Or by hand:** download `pi-gna-arm64.dmg` (Apple silicon) or `pi-gna-x64.dmg` (Intel) from
[Releases](https://github.com/manuelcecchetto/pi-gna/releases/latest), drag pi-gna to Applications, and run
`pi install git:github.com/manuelcecchetto/pi-gna` for the `pi --pigna` flag. Builds are not notarized (no paid
Apple certificate behind this), so a browser download opens with "Apple could not verify…": click **Open
Anyway** in System Settings > Privacy & Security, or run `xattr -dr com.apple.quarantine /Applications/pi-gna.app`.

### For…
