---
repo: "Toloka/tolokaforge"
name: "tolokaforge"
description: "Universal LLM benchmarking harness for tool use, browser, mobile, coding, and long-horizon evals"
readmeQualityOk: true
url: "https://github.com/Toloka/tolokaforge"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 17
forks: 11
openIssues: 472
closedIssues: 485
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2026-04-15T13:01:00Z"
lastCommitAt: "2026-09-29T08:10:09Z"
lastReleaseAt: "2026-06-16T07:16:45Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 47
maintainers: ["CiroGamboa", "github-actions[bot]", "balazs-toloka"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a7192d4d130c55bb9a197b4d2869cd0784c292b82a3ce0a2a5d28f090916360/Toloka/tolokaforge"
---

# Tolokaforge

A benchmarking harness for evaluating tool-using LLM agents. Multi-turn agent/user loops, sandboxed execution, deterministic grading, and rich telemetry — across any provider via LiteLLM.

## Highlights

- **Agent + User Loop** – Multi-turn conversations where both agent and user models call tools.
- **Coding-harness mode** – Run any of seven vendor coding-agent CLIs (`claude-code`, `codex`, `gemini-cli`, `kimi-code`, `opencode`, `grok-build`, `qwen-code`) inside the trial container instead of the engine's own loop, so a task pack can measure a CLI's scaffolding, not only a bare model. See [docs/CODING_HARNESSES.md](https://github.com/Toloka/tolokaforge/blob/HEAD/docs/CODING_HARNESSES.md).
- **Sandboxed Execution** – Tool calls proxy into Dockerized services with no external network access.
- **MCP-Compatible Tooling** – Tasks declare tools via Model Context Protocol or built-ins.
- **Deterministic Grading** – JSONPath assertions, state hashes, transcript rules, optional LLM judges.
- **Rich Metrics** – pass@k, cost/token estimates, latency percentiles, failure attribution.
- **Interactive Terminal** – Optional Rich Live panel with trial list, live counters,…
