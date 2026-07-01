---
repo: "oliver-kriska/scribe"
name: "scribe"
description: "LLM-managed personal knowledge base. Auto-extracts from git repos, Claude Code sessions (via ccrider FTS5), and iMessage bookmarks. Cross-project, qmd-indexed, runs on cron"
url: "https://github.com/oliver-kriska/scribe"
homepage: "https://getscribe.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["claude-code", "cron", "golang", "knowledge-base", "llm", "markdown", "qmd", "personal-kb", "ai-tools", "bm25"]
stars: 16
forks: 0
openIssues: 24
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-21T09:37:19Z"
lastCommitAt: "2026-07-01T07:05:36Z"
lastReleaseAt: "2026-05-07T14:17:36Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 84
undervaluedScore: 46
maintainers: ["oliver-kriska", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd53aa974e4b6bdb991260778245bd197bbff0a4ab59f06f34fa37c113909d18/oliver-kriska/scribe"
discussionCount: 0
---

# scribe

`scribe` is a single-binary CLI that creates and maintains a personal, LLM-written knowledge base. It continuously extracts reusable knowledge from your git repos, Claude Code sessions (via [`ccrider`](https://github.com/neilberkman/ccrider)'s FTS5 index) and Codex CLI sessions, links you iMessage to yourself as bookmarks (your own number is the world's most portable read-it-later list), and local files, then compiles it into a curated wiki that [`qmd`](https://github.com/tobi/qmd) indexes for semantic search. Every LLM step resolves through one top-level `llm:` provider block: Anthropic's Claude by default, or a 100% local [Ollama](https://ollama.com) server (qwen3 / gemma4 / gemma3, $0 API cost) — flipping the whole pipeline to free/offline is one line of yaml.

**Not a second brain.** scribe writes a personal *context corpus* — durable LLM memory that survives session boundaries and crosses projects. You almost never read the KB directly; Claude Code and Codex do, every session. The human is at the end of the pipeline, consuming an answer, not navigating a graph. The corpus is plain markdown in git, so it outlives the pipeline that wrote it — if scribe disappears…
