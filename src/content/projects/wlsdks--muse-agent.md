---
repo: "wlsdks/muse-agent"
name: "muse-agent"
description: "Building a personal AI that learns how you live and work, then gets better at knowing when and how to help. Local-first, any model."
readmeQualityOk: true
url: "https://github.com/wlsdks/muse-agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-agent", "ai-assistant", "cli", "llm", "local-llm", "ollama", "open-source", "ai", "anthropic", "chatgpt"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-05T11:14:30Z"
lastCommitAt: "2026-07-17T05:59:54Z"
lastReleaseAt: "2026-07-03T03:11:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["wlsdks"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3a9ff2d796ece44f2e61dbd683f40a940a1bbd78e8379c3b641bbd976d25c83/wlsdks/muse-agent"
---

</p>

<h1 align="center">Muse</h1>

  <b>Building a personal AI that learns how you live and work—and gets better at knowing when and how to help.</b><br/>
  <i>Local-first, provider-neutral, and honest about what is not built yet.</i>
</p>

  &nbsp;·&nbsp; <a href="README.ko.md">한국어</a>
</p>

Muse is meant to be a continuing personal agent for one person's life and work—not only a
work assistant. It should remember context, coordinate personal tools, stay quiet when that
is better, and learn whether its last suggestion actually helped. We call this
**Attunement**: learning how to live and work well with you, not only storing facts about you.

The first proof point is **Personal Continuity**: helping you pick up an unfinished thread
without reconstructing it from scratch. That thread might be a project, a trip, a health
appointment, someone you meant to contact, or an article you were reading. In the first
version, you choose the thread and its related Muse items; automatic detection comes later.
The first local CLI slice now works with explicit local tasks and notes: create a thread,
link exact sources, run `muse continue`, then record whether it helped. Automatic detection,…
