---
repo: "vouchdev/vouch"
name: "vouch"
description: "A git-native, review-gated knowledge base for AI agents: they propose writes, you approve them. Every claim cites a source, every change is a diff in your repo. MCP + CLI."
readmeQualityOk: true
url: "https://github.com/vouchdev/vouch"
homepage: "https://vouchai.dev"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["ai", "assistant", "personal", "vouch", "ai-brain", "vibe-coding", "agent-skills", "claude-code", "karpathy-llm-wiki", "knowledge-graph"]
stars: 121
forks: 70
openIssues: 28
closedIssues: 183
watchers: 0
contributors: 33
recentReleases: 10
createdAt: "2026-05-17T12:32:34Z"
lastCommitAt: "2026-07-31T06:30:41Z"
lastReleaseAt: "2026-07-20T06:23:21Z"
status: "thriving"
tags: ["needs_contributors", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 42
maintainers: ["plind-junior", "minion1227", "galuis116"]
openGraphImageUrl: "https://opengraph.githubassets.com/71784d854ba9dba95cb038cc859c6d7e59396aace77c4ae7ce9c26c51de90b16/vouchdev/vouch"
---

# vouch

**Git-native, review-gated knowledge base for LLM agents. MCP server + JSONL tool server + CLI.**

</p>

> Agents should not start every session with amnesia — but they shouldn't get to write whatever they want either.

`vouch` gives LLM agents durable memory with an explicit **review gate**: sessions capture themselves, agents *propose* writes, and nothing becomes durable knowledge until you approve it. Approved artifacts are plain files under `.vouch/` — YAML claims, markdown pages — so the KB lives in your repo, is reviewed like code, diffs cleanly, and travels with `git clone`.

The destination is the one [Andrej Karpathy's llm-wiki idea file](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) sketches: stop using LLMs as search engines that rediscover your documents on every question — use them as tireless knowledge engineers that compile, cross-reference, and maintain a living wiki, while humans curate and think. vouch is that idea with the write path made trustworthy. `vouch compile` has an LLM draft the topic pages, but every page cites approved claims, every `[claim: …]` citation is machine-verified before the draft is filed, and the drafts pass…
