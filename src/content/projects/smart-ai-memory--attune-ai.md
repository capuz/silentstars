---
repo: "Smart-AI-Memory/attune-ai"
name: "attune-ai"
description: "Persistent memory and receipt-verified workflows for Claude Code — plugin, MCP server, and spec-driven dev framework in one pip install."
readmeQualityOk: true
url: "https://github.com/Smart-AI-Memory/attune-ai"
homepage: "https://attune-ai.dev"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [54, 44]
topics: ["ai", "claude", "cost-optimization", "developer-tools", "llm", "multi-agent", "workflows", "sdd", "spec-driven-development", "agent-memory"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 23
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-01T07:35:24Z"
lastCommitAt: "2026-08-23T04:09:42Z"
lastReleaseAt: "2026-02-14T15:44:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 55
maintainers: ["silversurfer562", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b00b48f8c05b5b6e43222eef946f6d4f5fe04f5b2a0f63eaeb8d30cfcdc01c6a/Smart-AI-Memory/attune-ai"
fundingLinks: ["GITHUB:https://github.com/silversurfer562"]
discussionCount: 1
---

# Attune AI

**Persistent memory and receipt-verified workflows for Claude Code.**

🌐 **Docs & guides: [attune-ai.dev](https://attune-ai.dev)**

---

Your agent stops starting from zero, its word stops being the
evidence, and it asks you with structure instead of prose.

**Memory:** a stash → recall → promote loop carries decisions, bugs,
and hard-won lessons from one session into the next, and surfaces the
right lesson at the exact moment a prompt needs it. Local-first, from
a plain `pip install attune-ai`. Recall loads a few hundred
exactly-relevant tokens instead of your whole corpus — **67× fewer
tokens** on our own 800+ lesson store, retrieved at **P@3 96%** on a
frozen benchmark ([details](#the-memory-suite--measured)).

**Receipts:** state the outcome you want and how to verify it, and
get back a receipt — not a promise:

```bash
attune fix "imports resolve after the rename" \
  --scope src/attune/cli_minimal.py \
  --probe "pytest tests/unit/test_cli_minimal.py" \
  --run
```

The probes are re-run *independently* of the workflow that claims it
finished. Exit 0 means the probes passed — not that the agent felt
good about it.

**Interactive forms:** the agent asks with…
