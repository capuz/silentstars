---
repo: "TianMingKanae/engineering-multi-ai-skills"
name: "engineering-multi-ai-skills"
description: "General engineering skills and provider-neutral multi-agent collaboration workflows, templates and execution tools."
readmeQualityOk: true
url: "https://github.com/TianMingKanae/engineering-multi-ai-skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "claude-skills", "codex", "gitops", "llm", "multi-agent", "prompt-engineering"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-19T14:00:05Z"
lastCommitAt: "2026-10-21T08:49:37Z"
lastReleaseAt: "2026-10-21T08:04:22Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 27
maintainers: ["TianMingKanae", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf8ac0ba370bd6b6943a054dc67821280f1df487ff932aaa76a3db7f576383d2/TianMingKanae/engineering-multi-ai-skills"
---

# engineering-multi-ai-skills


**v0.3.0 — Cross-provider collaboration, distributed tail planning and frozen evidence pipelines.** See the [changelog and upgrade notes](https://github.com/TianMingKanae/engineering-multi-ai-skills/blob/HEAD/CHANGELOG.md). Maintainers: [versioning and release checklist](https://github.com/TianMingKanae/engineering-multi-ai-skills/blob/HEAD/docs/releases.md).

Practical skills and a file-based workflow for engineering teams using multiple AI agents. Works with software, infrastructure, data pipelines, benchmarks and other engineering tasks. No model, vendor, machine or programming language is required.

```mermaid
flowchart TD
    H["H: human scope and budget"] --> O["O: coordinator / Git and artifact manifests"]
    subgraph Providers["Independently tested provider capabilities"]
        B["Family A: builder O/F"]
        V["Family B: critic C / blind verifier V"]
        X["Family C: high-throughput extractor P/A"]
    end
    O --> B
    O --> X
    B --> R["Freeze decision code, contract and tests in Git"]
    subgraph Nodes["Physical node capabilities and leases"]
        N["Entitled network node / offline archive"]…
