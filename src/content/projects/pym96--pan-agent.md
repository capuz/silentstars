---
repo: "pym96/Pan-agent"
name: "Pan-agent"
description: "A replayable, recoverable, and general Runtime for autonomous agents."
readmeQualityOk: true
url: "https://github.com/pym96/Pan-agent"
homepage: "https://pym96.github.io/Pan-agent/"
language: "Python"
languages: ["Python", "TypeScript", "JavaScript"]
languagePcts: [49, 25, 21]
stars: 15
forks: 0
openIssues: 2
closedIssues: 135
watchers: 2
contributors: 3
recentReleases: 8
createdAt: "2026-08-11T11:26:58Z"
lastCommitAt: "2026-11-16T11:24:15Z"
lastReleaseAt: "2026-11-13T08:25:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 56
maintainers: ["pym96"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb74918b83ab3db0228aca4309baed1e37eacce5b4e1ed924ca993871e1ad30e/pym96/Pan-agent"
---

# Pan Agent

A terminal agent for local files and shell commands, with tool approvals and saved-run replay.

**Requirements:** Node.js **22.19.0+**, npm, and an interactive terminal. The local runtime needs no compiler, Python, Docker or database. Windows is not verified.

## Install

```sh
npm install -g --ignore-scripts https://github.com/pym96/Pan-agent/releases/download/v0.1.9/pan-agent-0.1.9.tgz
```

This installs the prebuilt **v0.1.9** release; no Git checkout or build is needed. [Release assets and checksums](https://github.com/pym96/Pan-agent/releases/tag/v0.1.9). Prefer a user-owned Node/npm installation; if npm reports permission denied, fix its prefix rather than running Pan with sudo.

## Configure your API

For **DeepSeek**, have your DeepSeek API key ready. In a **Bash or zsh terminal**, run this block, paste the key at the prompt, then press Enter. Input stays hidden:

```sh
{
  printf 'DeepSeek API key: '
  IFS= read -r -s DEEPSEEK_API_KEY
  printf '\n'
  export DEEPSEEK_API_KEY
}
```

In the same terminal, run:

```sh
pan-agent configure
```

Press Enter at each of the four prompts to choose `deepseek` → `deepseek-v4-flash` → thinking `high` → credential source…
