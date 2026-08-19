---
repo: "scalattice/scalattice-agent"
name: "scalattice-agent"
description: "Open-source GPU operator agent for the Scalattice inference network (Rust)."
readmeQualityOk: true
url: "https://github.com/scalattice/scalattice-agent"
homepage: "https://scalattice.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["ai", "compute", "compute-cluster", "compute-clusters", "gpu", "gpu-cluster", "hypervisor", "inference"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-07-02T14:48:45Z"
lastCommitAt: "2026-08-19T04:09:48Z"
lastReleaseAt: "2026-07-16T11:31:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["romulushill", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2cd3b260226c42c132c97dbfbf1ce98c6c78165bc1cb4bd156be22a7bda41e6/scalattice/scalattice-agent"
discussionCount: 0
---

</p>

# Scalattice Agent

Open-source GPU agent for the [Scalattice](https://scalattice.com) inference network,
a product of [Robottik Ltd](https://robottik.co.uk).

Install it on a machine with a GPU, connect with a provider token, and Scalattice Cloud can route inference jobs to you.

## Install

### Linux

```bash
curl -fsSL https://scalattice.cloud/install/agent | sh -s -- --token slt_provider_YOUR_TOKEN
source ~/.config/scalattice/agent.env
scalattice-agent status
```

Full agent logs go to `~/.local/share/scalattice/agent.log` (always verbose; rotated at 8 MiB with one backup). `scalattice-agent logs` tails that file.

### Windows

Download and run **[ScalatticeAgentSetup-x86_64.exe](https://github.com/scalattice/scalattice-agent/releases/latest/download/ScalatticeAgentSetup-x86_64.exe)** from [GitHub Releases](https://github.com/scalattice/scalattice-agent/releases) (or use **Download Windows installer** on the Providers dashboard).

1. Run the setup wizard (approve SmartScreen if prompted)
2. Paste your `slt_provider_…` token when asked
3. Finish — PATH is configured and the background agent starts

Setup guide: https://scalattice.cloud/install/agent-setup

The agent…
