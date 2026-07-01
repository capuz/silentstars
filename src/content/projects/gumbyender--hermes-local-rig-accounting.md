---
repo: "GumbyEnder/hermes-local-rig-accounting"
name: "hermes-local-rig-accounting"
description: "Hermes Agent plugin: transparent per-token cost accounting for local LLM inference rigs"
url: "https://github.com/GumbyEnder/hermes-local-rig-accounting"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 0
openIssues: 13
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-24T21:10:45Z"
lastCommitAt: "2026-07-01T07:04:52Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 63
undervaluedScore: 15
maintainers: ["GumbyEnder", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/221e99a802a7d7e7e812ade2eab190d2322ebfeaa57bc12ca1be56b033c49e16/GumbyEnder/hermes-local-rig-accounting"
---

# hermes-local-rig-accounting

> Transparent per-token cost accounting for local LLM inference in Hermes Agent.

Local LLM inference isn't free — every token costs electricity, hardware depreciation, and opportunity cost. This plugin surfaces those real costs alongside cloud provider pricing so you can make informed decisions.

## Install

```bash
hermes plugins install GumbyEnder/hermes-local-rig-accounting
```

Or manually:
```bash
git clone https://github.com/GumbyEnder/hermes-local-rig-accounting \
  ~/.hermes/plugins/local-rig-accounting
```

## Configure

Add to your `config.yaml`:

```yaml
plugins:
  enabled:
    - local-rig-accounting

local_rig:
  hardware_cost_usd: 5000        # Your total rig cost
  lifespan_years: 3              # Expected useful lifespan
  gpu_only_cost_usd: 2500        # Optional: GPU cost as depreciation base
  avg_power_watts: 450           # Average power draw during inference (W)
  electricity_rate_per_kwh: 0.15 # Your local electricity rate ($/kWh)
  auto_submit: true             # When true, auto-submit benchmarks to leaderboard (requires gh auth). Default: true.
```

**Don't know your electricity rate?** Use auto-lookup:
```yaml
local_rig:…
