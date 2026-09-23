---
repo: "Kostakurta8/roundtable"
name: "roundtable"
description: "Watch your Claude Code subagents work as a pixel-art office. Rewind any second, see what every agent cost, and turn any session into a timelapse GIF. Read-only, 100% local."
readmeQualityOk: true
url: "https://github.com/Kostakurta8/roundtable"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agentic-ai", "ai-agents", "anthropic", "canvas", "claude", "claude-code", "cli", "data-visualization", "developer-tools", "llm"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-08-04T11:34:20Z"
lastCommitAt: "2026-09-23T08:47:03Z"
lastReleaseAt: "2026-09-23T08:35:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 42
maintainers: ["Kostakurta8"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1322874744/d7082c04-9673-461e-a6d4-6951ce24c382"
discussionCount: 0
---

# Roundtable

**Watch your Claude Code subagents work — then rewind to any second of it.**

Every agent in a Claude Code run is a person in this office. They walk in when they are spawned,
work at a desk while a tool runs, walk over to hand back what they found, tell each other
`CONFIRMED` or `REFUTED`, and leave through the door when they are done. It reads the transcripts
Claude Code already writes under `~/.claude` — read-only, entirely local, and it never calls an API.

```
npx https://github.com/Kostakurta8/roundtable/releases/latest/download/roundtable.tgz
```

That is the whole install, and it takes a few seconds. It serves the office on
<http://localhost:7411>, opens your browser, and shows your most recent session — live, if one is
running. Node 22.12 or newer. The link is the packed build attached to the latest release;
`npx github:Kostakurta8/roundtable` runs the same thing built from source, which takes a minute or
two the first time.

## Turn any session into a GIF

The clip above is one command, run on a staged session. Run it on one of yours:

```
npx https://github.com/Kostakurta8/roundtable/releases/latest/download/roundtable.tgz --gif
```

It writes…
