---
repo: "atomchung/ccstory"
name: "ccstory"
description: "Claude Code usage recap with narrative. ccusage tells you the bill, ccstory tells the story."
readmeQualityOk: true
url: "https://github.com/atomchung/ccstory"
homepage: "https://pypi.org/project/ccstory/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["analytics", "ccusage", "claude", "claude-code", "cli", "developer-tools", "productivity", "python", "recap", "usage-tracking"]
stars: 43
forks: 3
openIssues: 30
closedIssues: 91
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-05-11T14:13:15Z"
lastCommitAt: "2026-08-23T04:08:42Z"
lastReleaseAt: "2026-07-23T14:06:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 44
maintainers: ["atomchung"]
openGraphImageUrl: "https://opengraph.githubassets.com/329efe084d403efeadad8aa307b1ba106141baa42d24045521a00fe6ed753cff/atomchung/ccstory"
---

# ccstory

> **Your AI coding-agent week, in plain English.**
> Reads local coding-agent session logs and writes a categorized recap with
> active hours, costs, and a per-bucket narrative. This release bundles Claude
> Code, OpenAI Codex, and Google Antigravity; the provider registry is designed
> to add more agents without changing the recap contract.

Sibling to [ccusage](https://github.com/ryoppippi/ccusage):
**ccusage tells you how much you spent · ccstory tells you what on.**

## Who this is for

- People who want to write a weekly status without scrolling scrollback.
- People who saw a ccusage number and want to know what kind of work those
  tokens went to.
- People who do a Sunday-night reflection on what they actually shipped.

## Quick start

```bash
pipx install ccstory
ccstory init
ccstory week
```

That's it. `init` is a one-time auto-categorize step that scans your
recent sessions; `ccstory week` produces the recap. Full report saves to
`~/.ccstory/reports/recap-*.md`.

The default **Repo activity** section always reads local git. When GitHub is
connected, it lightly enriches up to 10 active repos with GitHub metadata.
For a first run with no network access at all,…
