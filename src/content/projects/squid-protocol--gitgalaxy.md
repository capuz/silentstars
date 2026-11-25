---
repo: "squid-protocol/gitgalaxy"
name: "gitgalaxy"
description: "Evidence-backed COBOL-to-Java translation for mainframe estates (CICS, Db2, JCL), with per-program evidence levels. Built on an offline, LLM-free code scanner with SARIF and SBOM output."
readmeQualityOk: true
url: "https://github.com/squid-protocol/gitgalaxy"
homepage: "https://squid-protocol.github.io/gitgalaxy/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["codebase-analysis", "sbom", "zero-trust", "appsec", "cybersecurity", "devsecops", "legacy-modernization", "software-architecture", "static-analysis", "supply-chain-security"]
stars: 68
forks: 12
openIssues: 145
closedIssues: 2099
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-03-20T23:59:31Z"
lastCommitAt: "2026-11-25T13:14:48Z"
lastReleaseAt: "2026-07-05T15:59:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["squid-protocol"]
openGraphImageUrl: "https://opengraph.githubassets.com/cad42e6843d693498640351ad935f43a0769be401c350c9e5380e775443cb135/squid-protocol/gitgalaxy"
discussionCount: 4
---

# GitGalaxy

### Know any codebase deeply, and give your AI agents the same knowledge.

One command turns any repository (59 languages, no build, no compiler) into knowledge you can compare, query, and
hand to a coding agent. The pipeline is also thorough enough to be the basis for our
[CICS-to-Java translator](https://github.com/squid-protocol/gitgalaxy/blob/HEAD/gitgalaxy/tools/cobol_to_java/README.md), which proves each ported program against the original.

---

## What it does

GitGalaxy scans a full repository in one pass and outputs what it learns as seven reports: an AI architecture
brief, a SQLite knowledge graph, a full scan database, SARIF findings, a CycloneDX SBOM, 3D visualizer data and a
forensic audit manifest.

wall clock. Click for full size. <a href="docs/media/README.md#one-scan-every-language">How it was made</a>.
(continued → <a href="docs/how-it-works.md">every film, explained</a> ·

## How it does it

GitGalaxy reads every function, in every language, with the same sensors: it finds the function, counts its
language keywords by family, and turns those counts into a fingerprint you can compare across any repository.
