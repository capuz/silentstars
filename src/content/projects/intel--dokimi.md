---
repo: "intel/dokimi"
name: "dokimi"
description: "Dokimi (Greek δοκιμή, \"test, proof\") measures whether a skill, MCP doc source, agent profile or repository guidance actually helps a coding agent: paired on/off arm comparisons, novel-vs-known content analysis, and repository scans with graded agent runs."
readmeQualityOk: true
url: "https://github.com/intel/dokimi"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "ai-agents", "benchmarking", "claude-code", "coding-agents", "evaluation", "llm-as-a-judge", "llm-evaluation", "mcp"]
stars: 10
forks: 9
openIssues: 44
closedIssues: 9
watchers: 1
contributors: 12
recentReleases: 1
createdAt: "2026-10-08T19:41:10Z"
lastCommitAt: "2026-11-04T13:05:07Z"
lastReleaseAt: "2026-10-19T18:21:27Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 53
maintainers: ["napetrov", "antonwolfy", "vlad-perevezentsev"]
openGraphImageUrl: "https://opengraph.githubassets.com/1360e6f883c1c4b0fc5379aede53a0e5ca77f4bce572bab10be5273be6963655/intel/dokimi"
---

# Dokimi — A/B testing for agent context

**Proof, not popularity: find out whether your agent's skills, docs and `AGENTS.md` actually work.**

**Documentation: <https://intel.github.io/dokimi/>** — the full tour, with every figure.

## What it is

Skills, instructions, docs, MCP servers and a repository's `AGENTS.md` are cheap
to write and easy to over-claim. Dokimi runs the same questions or coding tasks
with and without one change, grades both the same way, and reports the
difference with its p-value, per model. Then it shows which parts of a skill
the model already knew, which it added and which it broke, and proposes a
shorter version that keeps what matters.

> **dokimi** — Greek *δοκιμή*, "test, proof". An artifact gets trusted because
> it passed a test that could have failed, not because it is popular.

**Which parts help: novelty.** Dokimi asks the model about each claim in a
skill twice, without the skill and with it, and a different model grades both
answers. Every claim lands in one of four outcomes
([more](https://github.com/intel/dokimi/blob/HEAD/dokimi/docs/skill-novelty.md)):

What measuring shows so far…
