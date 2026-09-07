---
repo: "OpenDQV/OpenDQV"
name: "OpenDQV"
description: "Open-source, contract-driven data quality validation. Shift-left enforcement at the point of write — before data enters your pipeline."
readmeQualityOk: true
url: "https://github.com/OpenDQV/OpenDQV"
homepage: "https://github.com/OpenDQV/OpenDQV"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["data-contracts", "data-governance", "data-quality", "data-validation", "fastapi", "mcp", "open-source", "python", "shift-left"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-13T00:39:41Z"
lastCommitAt: "2026-09-07T08:34:39Z"
lastReleaseAt: "2026-03-21T23:13:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 52
maintainers: ["SunnySharmaBGMSConsultants", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1e493e7da1c09ace0f216b2f89aaee3e55f650bde92fc6fc46c93219c48a916/OpenDQV/OpenDQV"
discussionCount: 1
---

</p>

| [Quickstart](https://github.com/OpenDQV/OpenDQV/blob/HEAD/docs/quickstart.md) | [Rules](https://github.com/OpenDQV/OpenDQV/blob/HEAD/docs/rules/) | [Contracts](https://github.com/OpenDQV/OpenDQV/blob/HEAD/docs/compliance-contracts.md) | [MCP](https://github.com/OpenDQV/OpenDQV/blob/HEAD/docs/mcp.md) | [API](https://github.com/OpenDQV/OpenDQV/blob/HEAD/docs/index.md) | [Security](https://github.com/OpenDQV/OpenDQV/blob/HEAD/SECURITY.md) | [FAQ](https://github.com/OpenDQV/OpenDQV/blob/HEAD/docs/faq.md) |
|---|---|---|---|---|---|---|

> **"Trust is easier to build than to repair."**
> That is why OpenDQV exists. A `422` at the point of write is cheaper than a data incident three weeks later.

> **Beta (v2.x).** Public API surface (REST, contract YAML, MCP tools, Python SDK) is stable. Breaking changes follow a one-release deprecation cycle. Security fixes backported to the latest 2.x line. See [API Stability](#api-stability) for commitments.

**OpenDQV is a write-time data validation service.** Source systems call it before writing data. Bad records return a `422` with per-field errors. Good records pass through. No payload is stored.

```mermaid
flowchart LR
    subgraph…
