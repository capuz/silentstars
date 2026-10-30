---
repo: "enola-labs/enola"
name: "enola"
description: "Understand, analyze, and govern software systems across repositories, languages, and technologies."
readmeQualityOk: true
url: "https://github.com/enola-labs/enola"
homepage: "https://enola.tech"
language: "C"
languages: ["C"]
languagePcts: [85]
topics: ["static-analysis", "ai-coding", "architecture-analysis", "code-intelligence", "developer-tools", "impact-analysis", "software-architecture", "architecture-differences", "architecture-testing", "change-impact-analysis"]
stars: 278
forks: 24
openIssues: 0
closedIssues: 10
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2026-02-10T13:18:28Z"
lastCommitAt: "2026-10-30T10:23:41Z"
lastReleaseAt: "2026-06-24T13:38:04Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 34
maintainers: ["dejo1307", "misabegovic", "GertL"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1154506437/686a76cd-ae59-4e6e-ad26-81e88686e788"
discussionCount: 1
---

·
  ·
  ·
  ·
  ·

  The graph comes from parsing your code. The same code always produces the same graph.</p>

## When to use enola

- **Find out what a change will break.** Before you edit a function, a route, or a module, ask the graph what depends on it. The answer is a list of real places in the code, not a guess. [Quickstart](#quickstart).
- **Keep your architecture the way you declared it.** Write down the layer order your code should follow, or which service may call which. Every change is then graded against that, and only what the change broke is reported. [Grade a change](#grade-a-change).
- **Give your coding agent the structure of the system.** Over MCP, the agent asks the graph what depends on the code it is about to touch, and a hook grades its edit when it is done. [Connect your agent](#connect-your-agent).
- **See several repositories as one system.** A frontend's call to `/api/orders` is linked to the Go handler that serves it. One service's Kafka producer is linked to the service that consumes the topic. [Across repositories](#across-repositories).
- **Build your own tools on the graph.** A snapshot is a set of plain files with a documented format. Load them…
