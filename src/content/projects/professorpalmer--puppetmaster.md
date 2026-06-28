---
repo: "professorpalmer/Puppetmaster"
name: "Puppetmaster"
description: "Provider-neutral control plane for agent swarms: subprocess workers, leases, artifacts, memory, and deterministic stitching."
url: "https://github.com/professorpalmer/Puppetmaster"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent-swarms", "agents", "ai-agents", "claude-code", "codex", "cursor", "distributed-systems", "llm", "orchestration", "sqlite"]
stars: 65
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-05-06T18:35:01Z"
lastCommitAt: "2026-06-28T02:06:05Z"
lastReleaseAt: "2026-05-29T19:07:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 37
maintainers: ["professorpalmer", "kbentonferguson", "jwellman80"]
openGraphImageUrl: "https://opengraph.githubassets.com/f21470f6580457ebd8abfbb602ac29604bd17d124d1e93e83c7a5f2aca10a360/professorpalmer/Puppetmaster"
---

# Puppetmaster

**Turn Cursor, Claude Code (Anthropic or AWS Bedrock), the OpenAI API, the Codex CLI, or Hermes into an orchestrator that routes every task to the cheapest model that can handle it, runs workers as independent processes, and stores their output as typed SQLite artifacts so follow-ups cost zero tokens.**

> **💸 Reproduce the live A/B in ~$0.01 of spend** — `OPENAI_API_KEY=... python -m bench.router_live_ab`. Pinned `gpt-5.5` cost **\$0.0132**; Puppetmaster routed the same task to `gpt-5.4-nano` for **\$0.00016** (same prompt, equivalent answer). The 35.1% figure is a 6-task mixed-workload dry-run where the router *correctly* kept the frontier model on the 2 hard tasks — full method in [docs/CLAIMS.md](https://github.com/professorpalmer/Puppetmaster/blob/main/docs/CLAIMS.md).

> **🔁 Self-healing — a dead provider doesn't kill the swarm (proven live, job `job_d82715bebc5d`):** a `claude-code` worker hit a real **\$0 Anthropic balance** → classified `billing_or_quota` → marked **FAILED** → **auto-rerouted to `cursor/gpt-5.5`** (plan-billed, `$0`) → the funded adapter **completed the task.** No silent degraded run.

## Install

```bash
pipx install puppetmaster-ai…
