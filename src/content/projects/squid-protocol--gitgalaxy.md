---
repo: "squid-protocol/gitgalaxy"
name: "gitgalaxy"
description: "Deep repository intelligence for humans and ai. Air gapped, on premise, zero dependency SAST for 50 languages regardless of compilation status. Sarif and sbom outputs."
readmeQualityOk: true
url: "https://github.com/squid-protocol/gitgalaxy"
homepage: "https://squid-protocol.github.io/gitgalaxy/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["auditing", "codebase-analysis", "sbom", "zero-trust", "ai-security", "appsec", "cybersecurity", "devsecops", "incident-response", "legacy-modernization"]
stars: 50
forks: 8
openIssues: 63
closedIssues: 435
watchers: 0
contributors: 10
recentReleases: 2
createdAt: "2026-03-20T23:59:31Z"
lastCommitAt: "2026-08-16T04:10:28Z"
lastReleaseAt: "2026-07-05T15:59:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 43
maintainers: ["squid-protocol", "uuzzrm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a06f81f39adbb1eef29eabe80508f4e3a37bc5e4ec81fb60dd313324b4cb3d2e/squid-protocol/gitgalaxy"
discussionCount: 0
---

# GitGalaxy

[Docs](https://squid-protocol.github.io/gitgalaxy/) · [Visualizer](https://gitgalaxy.io/)

</div>

**1 scan** · **97 structural signals** · **50+ languages** · **0 need for compilation**<br>
**19 risk exposure scores** · **6 final reports** · **0 dependencies** · `pip install gitgalaxy`

</div>

## What Pain Point Does This Solve?

GitGalaxy exists for one recurring problem: understanding a large, real, multi-language
codebase that doesn't compile cleanly.

* **Full-system scans across 50+ languages in one pass.** No per-language toolchain, no
  successful build required. A polyglot repo with Go, YAML, Shell, and Python mixed together
  scans as one system, not five separate tool invocations.
* **No compilation, ever.** Broken dependencies, missing packages, disconnected vendored code,
  half-migrated legacy modules — all scan the same way a clean repo does, because nothing here
  has to build first.
* **Fast enough to run on every commit.** Most repositories scan in well under a minute —
  [Kubernetes](https://github.com/squid-protocol/gitgalaxy-raw-output/blob/main/v2.4.6/kubernetes/kubernetes_galaxy_llm.md),
  1.39M lines across Go, YAML, JSON, Shell, and Proto,…
