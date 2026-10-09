---
repo: "Shaisolaris/solaris-dev-shop"
name: "solaris-dev-shop"
description: "61 specialist employees and one chief of staff. Free MIT skill library with a deterministic intake router. Version 0.53."
readmeQualityOk: true
url: "https://github.com/Shaisolaris/solaris-dev-shop"
homepage: "https://github.com/Shaisolaris/solaris-dev-shop"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ai-agents", "developer-tools", "agent-skills", "ai-workforce", "claude-skills", "llm-agents", "multi-agent-systems", "prompt-engineering"]
stars: 1
forks: 0
openIssues: 20
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-24T16:26:47Z"
lastCommitAt: "2026-09-26T17:43:26Z"
lastReleaseAt: "2026-09-26T09:06:38Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 65
undervaluedScore: 47
maintainers: ["Shaisolaris"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1385916880/5f6ca8ce-baf8-437d-8f76-8d02abcae7d5"
discussionCount: 5
promoted: true
---

# Solaris Dev Shop

61 specialist employees and one chief of staff. Free. MIT.

You send a task. The chief of staff assigns exactly one accountable specialist. That specialist does the work. You still decide.

## Try it (30 seconds)

```bash
./install.sh
solaris-intake intake "Write a test plan for the client portal login regression"
```

That command routes the request. It names `solaris.qa-engineer` as accountable and performs no work of its own. The test plan itself is written by the qa-engineer, but only after you invoke that skill in your own agent. Routing is deterministic: the same request always lands on the same specialist. A saved run is in [`examples/route-a-task/`](https://github.com/Shaisolaris/solaris-dev-shop/blob/HEAD/examples/route-a-task/).

## What you get

| You get | Details |
|---|---|
| 61 employees | 12 departments: engineering, design, data, marketing, sales, leadership, and more. Full list: [`docs/employees.md`](https://github.com/Shaisolaris/solaris-dev-shop/blob/HEAD/docs/employees.md) |
| 1 chief of staff | Reads your request, emits one typed assignment packet: accountable owner, primary specialist, supporting list, authority bounds, evidence required…
