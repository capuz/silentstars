---
repo: "dzshzx/codexcomp"
name: "codexcomp"
description: "Local Responses proxy for Codex CLI: folds gpt-5.5 518n-2 reasoning truncation (516 degradation) via official openai_base_url wiring — no provider change, ws-first, no fallback noise"
readmeQualityOk: true
url: "https://github.com/dzshzx/codexcomp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 122
forks: 12
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 5
createdAt: "2026-07-03T17:56:46Z"
lastCommitAt: "2026-07-12T06:05:19Z"
lastReleaseAt: "2026-07-10T09:48:44Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 36
maintainers: ["dzshzx", "steveoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d185852cfc4c16998385edd4d06a12901932ea40a86d4127a6da333c7e6fc12/dzshzx/codexcomp"
---

# codexcomp

**Codex + Complete** — a lightweight local proxy that folds gpt-5.5's **"516" reasoning
truncation** into complete, untruncated answers for the [OpenAI Codex CLI](https://github.com/openai/codex).

**English** · [简体中文](https://github.com/dzshzx/codexcomp/blob/HEAD/README.zh-CN.md)

</div>

```bash
uv tool install codexcomp      # install
codexcomp                      # run (127.0.0.1:8787)
# then append to ~/.codex/config.toml:  openai_base_url = "http://127.0.0.1:8787/v1"
```

It overrides the built-in provider's base URL **in place** — `model_provider` is unchanged,
so session grouping, remote compaction, and remote-control keep working.

> **Credits.** The detect-and-continue mechanism originates from
> [**neteroster/CodexCont**](https://github.com/neteroster/CodexCont) (MIT); this is an
> independent, from-scratch implementation that keeps the built-in provider intact.

---

## The problem

gpt-5.5's reasoning is intermittently truncated at `reasoning_tokens == 518·n − 2`
(**516, 1034, 1552, …**): the turn stops mid-reasoning and answers from an incomplete
thought, degrading quality sharply. Aggregate telemetry in the upstream report shows ~44 %
of gpt-5.5…
