---
repo: "squid-protocol/gitgalaxy"
name: "gitgalaxy"
description: "Convert source code into a repository-scale structural model. Air gapped, zero dependencies, SARIF and SBOM outputs."
readmeQualityOk: true
url: "https://github.com/squid-protocol/gitgalaxy"
homepage: "https://squid-protocol.github.io/gitgalaxy/"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["auditing", "codebase-analysis", "sbom", "zero-trust", "ai-security", "appsec", "cybersecurity", "devsecops", "incident-response", "legacy-modernization"]
stars: 60
forks: 11
openIssues: 134
closedIssues: 1763
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-03-20T23:59:31Z"
lastCommitAt: "2026-10-31T02:00:28Z"
lastReleaseAt: "2026-07-05T15:59:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 42
maintainers: ["squid-protocol", "dependabot[bot]", "squid-shepherd[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/79ff03c03c03e3ff0097f717fa838e6c076cb6d8839f257b6855cac022cd3468/squid-protocol/gitgalaxy"
discussionCount: 4
---

# GitGalaxy

### Know any codebase deeply, and give your AI agents the same knowledge.

GitGalaxy is a scanning engine we built for one job: pulling the structure that matters out
of a whole repository. It reads every language in the repo in one pass and needs no build or
compiler. It is fast enough to run on every repo and every commit. And the facts go deep
enough to generate code: they drive an automated CICS-to-Java translator that proves each
ported program against the original, keeps the full evidence chain, and turns every miss into
a named, ranked fix.

---

## One scan, every language, six reports

This is one real scan, drawn as a flow. 1,310 files on disk come in on the left. Version
control, generated code, binaries and denied extensions are filtered out, and every exclusion
is counted with its reason. The remaining 935 files, in about 50 languages from Python and Go
to COBOL, JCL and Apollo-era AGC assembly, go through **one engine** that measures them all
with the same signal set. Six reports come out the right-hand side: an AI-ready architecture
brief, a CycloneDX SBOM, SARIF, a SQLite knowledge graph, the 3D visualizer payload and a
forensic audit manifest.…
