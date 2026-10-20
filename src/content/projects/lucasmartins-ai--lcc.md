---
repo: "lucasmartins-ai/lcc"
name: "lcc"
description: "Compact coding-agent context without summarizing it away. Verbatim, offline, with a receipt and recall for every cut. CLI, MCP server, Claude Code plugin. MIT."
readmeQualityOk: true
url: "https://github.com/lucasmartins-ai/lcc"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["ai", "aiagent", "aiagents", "context-compression", "context-engineering-framework", "context-engineering-kit", "jev-model", "prompt-compression", "token-optimizer", "token-reduction"]
stars: 12
forks: 1
openIssues: 7
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-06-19T21:02:05Z"
lastCommitAt: "2026-10-20T08:49:19Z"
lastReleaseAt: "2026-10-20T06:26:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 45
maintainers: ["lucasmartins-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ca072aee659f63b2910b2b013db1705fb8e9452b75bf9b2a30abad255616dca/lucasmartins-ai/lcc"
discussionCount: 0
---

# lcc — Local Context Compiler

**Compact coding-agent context without summarizing it away.**<br>
lcc cuts what the model does not need, keeps everything else byte for byte, and writes a receipt.

## `/compact` vs lcc

Claude Code's `/compact` replaces your session with a summary written by a model. Summaries
drop the exact error, path or line the agent needs two turns later. lcc does the opposite: old
tool outputs leave the context but stay one `recall` away, and every user and assistant message
is kept as it was.

| One real Claude Code session (193 messages, 75 tool calls) | tokens | user and assistant messages | removed tool outputs |
| --- | ---: | --- | --- |
| before | 57,083 | 43, as written | — |
| `/compact` | one summary | rewritten into the summary | gone |
| **lcc** (`rules`, `stashed`) | **28,807 (−49.5%)** | **43 / 43 byte for byte** | 33, each one `recall` away |

Measured with `lcc measure-session` (1.2.0, offline, exact `o200k_base` token count). That
session is one of the best cases. **Across 40 of my long sessions** (100+ messages each, 9.1 M
tokens) the median cut was **18.8%** (middle half 14% to 22%, best 53%), with 0 messages lost.
These are all my…
