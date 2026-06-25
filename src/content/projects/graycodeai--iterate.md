---
repo: "GrayCodeAI/iterate"
name: "iterate"
description: "A self-evolving coding agent written in Go. Reads its own source, decides what to improve, writes code, runs tests, and commits — autonomously."
url: "https://github.com/GrayCodeAI/iterate"
homepage: "https://graycodeai.github.io/iterate/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["ai-agent", "autonomous", "cli", "coding-agent", "github-actions", "go", "iteragent", "llm", "self-evolving"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-25T07:33:11Z"
lastCommitAt: "2026-06-25T06:40:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["iterate-evolve[bot]", "Patel230"]
openGraphImageUrl: "https://opengraph.githubassets.com/7547c14a144054ddb8d43eef617b11cb1a0ade3eb83accafd75d5e9385f3050e/GrayCodeAI/iterate"
---

# iterate

**A self-evolving coding agent that writes its own code.**

[Watch it grow](https://graycodeai.github.io/iterate/) ·
[Report a bug](https://github.com/GrayCodeAI/iterate/issues/new?template=bug.md) ·
[Suggest a feature](https://github.com/GrayCodeAI/iterate/issues/new?template=suggestion.md)

</div>

---

## What is this?

iterate is a coding agent that **owns its own repository**. Every 12 hours it:

1. **Reads** its own source code, journal, and community issues
2. **Decides** what to improve — a bug, a missing feature, a rough edge
3. **Builds** the fix, runs `go build` and `go test`
4. **Commits** if green, reverts and journals if not

No human writes its code. It does it itself.

> **[Live site](https://graycodeai.github.io/iterate/)** — auto-updated after every session

## Quick Start

```bash
git clone https://github.com/GrayCodeAI/iterate.git
cd iterate
export ANTHROPIC_API_KEY=sk-...
make build
./iterate --repo .
```

**Providers:** Anthropic · OpenAI · Gemini · Groq

## Interactive REPL

```bash
./iterate --chat
```

```
iterate> /help

  Agent       /help  /clear  /model  /thinking  /version  /quit
  Code        /test  /build  /lint   /fix       /coverage…
