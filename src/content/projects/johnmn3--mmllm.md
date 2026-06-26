---
repo: "johnmn3/mmllm"
name: "mmllm"
description: "hey-china-hold-my-beer-llm"
url: "https://github.com/johnmn3/mmllm"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 9
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-05-02T22:52:01Z"
lastCommitAt: "2026-06-26T23:41:29Z"
lastReleaseAt: "2026-05-10T05:58:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 84
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/399f02717a573cd99832af2ad85dabd36adedf79b615e136208b69c7a0a9b7d9/johnmn3/mmllm"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/john.newman"]
---

# mmLLM - Memory Mapped LLM

mmLLM is a new kind of "green llm" - more efficient for many things by offloading some work to disk.

## Use case: lightweight CPU-bound code agents at the edge

mmLLM is shaped for one specific deployment profile: **fast,
local, fill-in-the-middle code completion that runs alongside your
editor on a laptop, dev server, or edge device** — without
depending on a hosted API.

The architecture trades a large mmap-backed semantic memory bank
(~5–20 GB on disk, queried sparsely per token) for tiny active
dense weights (~10M params, ~40 MB resident). The bank gets
faulted from disk into the OS page cache on demand, then shared
across every concurrent editor session on the host.

### Why this fits coding agents better than the alternatives

**vs hosted-API completion (Copilot-style)**:
- Round-trip + queue latency: 100-500 ms; mmLLM target after Phase 5: ~1 ms/token.
- API costs scale linearly with users; mmLLM is one-time disk + CPU.
- Code never leaves the device — fits enterprise dev environments
  with privacy / data-residency constraints.

**vs local dense code models (Qwen-Coder, DeepSeek-Coder, Codestral)**:
- A 7B int8 dense model holds 7 GB resident…
