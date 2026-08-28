---
repo: "GindaChen/nsys-ai"
name: "nsys-ai"
description: "Terminal UI for NVIDIA Nsight Systems profiles — timeline viewer, kernel navigator, NVTX hierarchy"
readmeQualityOk: true
url: "https://github.com/GindaChen/nsys-ai"
homepage: "https://gindachen.github.io/nsys-ai/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 76
forks: 20
openIssues: 49
closedIssues: 199
watchers: 1
contributors: 10
recentReleases: 1
createdAt: "2026-02-26T21:54:50Z"
lastCommitAt: "2026-08-28T12:23:29Z"
lastReleaseAt: "2026-08-22T08:07:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 39
maintainers: ["rich7420"]
openGraphImageUrl: "https://opengraph.githubassets.com/25ee5ae3209fdab3a8aa4fbf6e5adc7e428ba7983f391a119c6cc4f9e30956db/GindaChen/nsys-ai"
---

# nsys-ai

**AI-powered analysis for NVIDIA Nsight Systems profiles**

Navigate GPU kernel timelines, diff two runs, and diagnose performance
bottlenecks with an evidence-first agent — from your browser or terminal.

> **Mission:** Build an agent that understands GPU performance from first
> principles — one that can identify pipeline bubbles, calculate MFU, assess
> arithmetic intensity, and diagnose the root causes that cost millions of GPU
> hours, turning months of expert debugging into minutes.

</div>

---

nsys-ai reads `.nsys-rep`, `.parquetdir`, or `.sqlite` exports from
[NVIDIA Nsight Systems](https://developer.nvidia.com/nsight-systems) and turns
them into something you can navigate and reason about: a web timeline, terminal
viewers, a before/after diff that reports whether a change actually helped, and
a set of deterministic analysis skills an LLM agent can drive. `.nsys-rep` files
use a Parquet cache by default; `.sqlite` remains the compatibility path.

The screenshot is captured from the committed H100 fixture; the other browser
surfaces are shown in [Choosing a viewer](https://github.com/GindaChen/nsys-ai/blob/main/docs/user/viewers.md).

## Installation

```bash…
