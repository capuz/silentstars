---
repo: "NazmusSayad/offsite"
name: "offsite"
description: "Claude Code, Codex and OpenCode in your browser. Shares sessions with their CLIs, so you can start in one and resume in the other. Includes a terminal, file previews and git diffs."
readmeQualityOk: true
url: "https://github.com/NazmusSayad/offsite"
homepage: "https://offsite.sayad.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["self-hosted", "ai", "anthropic", "claude", "claude-code", "coding-agent", "typescript", "web-ui", "codex", "openai-codex"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 37
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-09T13:23:28Z"
lastCommitAt: "2026-11-02T13:38:35Z"
lastReleaseAt: "2026-10-17T05:45:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["NazmusSayad"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1b2ca2b6f404e8692a5c9bcdb392b4630a68608adcdf166c899cbe4b120c1f5/NazmusSayad/offsite"
---

# OffSite

Claude Code, Codex and OpenCode in your browser. It uses the same sessions as their CLIs, so you can start in one and resume in the other.

## Usage

```sh
npx offsite
```

## Separate instances

Give each instance its own port and `--dir`.

```sh
npx offsite --dir ~/.offsite-work
```

## Images, videos and audio

OffSite shows images, videos and audio inline when a reply links to a file with Markdown image syntax, like `` or ``. Relative paths start at the project folder.

The `show` skill teaches agents this syntax. Add it with:

```sh
npx skills add NazmusSayad/offsite --skill show
```

## Huge Thanks

- [T3 Code](https://github.com/pingdotgg/t3code)
- [Ghostty](https://github.com/ghostty-org/ghostty)
- [xterm.js](https://github.com/xtermjs/xterm.js)
- [VS Code](https://github.com/microsoft/vscode)
- [Monaco Editor](https://github.com/microsoft/monaco-editor)
