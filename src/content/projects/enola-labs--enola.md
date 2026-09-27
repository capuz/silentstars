---
repo: "enola-labs/enola"
name: "enola"
description: "Understand, analyze, and govern software systems across repositories, languages, and technologies."
readmeQualityOk: true
url: "https://github.com/enola-labs/enola"
homepage: "https://enola.tech"
language: "C"
languages: ["C"]
languagePcts: [83]
topics: ["static-analysis", "ai-coding", "architecture-analysis", "code-intelligence", "developer-tools", "impact-analysis", "software-architecture", "architecture-differences", "architecture-testing", "change-impact-analysis"]
stars: 250
forks: 22
openIssues: 3
closedIssues: 1
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2026-02-10T13:18:28Z"
lastCommitAt: "2026-09-27T09:29:09Z"
lastReleaseAt: "2026-06-24T13:38:04Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 26
maintainers: ["dejo1307", "GertL", "inverse"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1154506437/9002c122-7e54-4c1f-8502-73ba12ecbbda"
discussionCount: 1
---

# enola

**enola builds one graph of your software system: every repository, language, framework and technology in it, and how they connect.**

**It runs locally as a single binary, with no model, external language server, or separate indexing infrastructure required.**

It reads your source code and records what is there: modules, functions, API routes, database access, message topics, infrastructure. Then it links those pieces, inside each repository and across them. A frontend's call to `/api/orders` is linked to the Go handler that serves it; one service's Kafka producer is linked to the service that consumes the topic. [What exactly is in the graph](https://github.com/enola-labs/enola/blob/HEAD/docs/GRAPH.md).

You can ask that graph questions yourself, give it to your coding agent, or build your own tools on it. The graph comes from parsing your code; no AI model takes part in producing it. The same code always produces the same graph, and it never leaves your machine.

## Try it

```bash
curl -fsSL https://raw.githubusercontent.com/enola-labs/enola/main/install.sh | sh
```

Then point it at any repository you have checked out:

```bash
enola --explain /path/to/your/repo
```…
