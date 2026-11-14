---
repo: "humblemuzzu/muzzpi"
name: "muzzpi"
description: "pi, fully loaded: six sub-agents, web search, GitHub and screenshot tools, undoable edits, and a TUI built for all-day agent sessions."
readmeQualityOk: true
url: "https://github.com/humblemuzzu/muzzpi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["agent-harness", "ai-agents", "claude", "coding-agent", "pi", "terminal"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-10T16:56:28Z"
lastCommitAt: "2026-11-14T10:45:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 63
maintainers: ["humblemuzzu"]
openGraphImageUrl: "https://opengraph.githubassets.com/16ee6ac2b64482ef8f6c56e16298737a838aad673343f183c7494d7260b3db8b/humblemuzzu/muzzpi"
---

# muzzpi

**pi, fully loaded. Nothing forked.**

A harness for [pi](https://pi.dev), the terminal coding agent. Six sub-agents
that research, review and build in parallel. Web, GitHub and screenshot tools.
Edits you can undo. A TUI built for all-day sessions. And a pi that starts as
fast as stock, with every patch inside.

**36** tools · **6** sub-agents · **20** MCP servers · **13** skills ·
**0.24 s** to start with every extension · on stock pi **1.5.2**

```bash
git clone https://github.com/humblemuzzu/muzzpi.git && cd muzzpi
./install.sh pi --with-deps    # installs what is missing, then the harness
```

The installer checks your pi before it touches anything, backs up whatever it
overwrites, and ends with an audit that prints the exact fix for anything that
did not land. `--with-deps` installs the Homebrew formulae it needs, pi at the
version its patches were made on, and Rust if searchd is to be built. Without
it, the installer installs nothing you are missing and names what it is;
`--dry-run` prints every change and makes none.

Built and used daily by [Muzzammil](https://itsmuzz.com) since March 2026.

---

## In daily use

The last 30 days, one machine:

| | |
|---|---|
|…
