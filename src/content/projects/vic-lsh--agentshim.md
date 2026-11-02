---
repo: "vic-lsh/agentshim"
name: "agentshim"
description: "A portable interface across multiple coding agent CLIs and libraries."
readmeQualityOk: true
url: "https://github.com/vic-lsh/agentshim"
homepage: "https://vic-lsh.github.io/agentshim/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-04-22T16:09:47Z"
lastCommitAt: "2026-11-02T17:56:35Z"
lastReleaseAt: "2026-09-27T12:23:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 55
maintainers: ["vic-lsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/0747f404631f1e358563f8a31e55fa53780ffd762e70f37ae0f106b8683e33fb/vic-lsh/agentshim"
---

# agentshim

`agentshim` runs coding-agent CLIs (Claude Code, Codex, Gemini CLI, opencode,
Copilot CLI) as subprocesses and turns their output into typed events and a
typed turn result.

It owns everything that answers "how do I run provider X and understand what
it printed". It does not own application policy: which provider to use, when
to retire a conversation, how to sandbox the host, or how to render events.

No required runtime dependencies. Python 3.10+.

## What it includes

- `CliAgent` / `AgentSession`: one turn at a time, resumable, cancellable
- typed events delivered on the calling thread
- normalized token accounting (total input, cache reads, cache writes,
  uncached input, output and reasoning) on every provider, plus a static,
  versioned pricing table generated from a LiteLLM snapshot (see
  [Usage and Pricing](https://github.com/vic-lsh/agentshim/blob/HEAD/docs/pricing.md)), usage by model, list-price estimates
  from LiteLLM's rates, and usage read from the CLIs' own session files (see
  [Usage Outside agentshim](https://github.com/vic-lsh/agentshim/blob/HEAD/docs/transcripts.md))
- an account's plan limits on request, with no model call: windows, share used,…
