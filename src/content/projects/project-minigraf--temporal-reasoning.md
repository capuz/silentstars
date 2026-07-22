---
repo: "project-minigraf/temporal_reasoning"
name: "temporal_reasoning"
description: "Perfect memory. Exact reasoning. Complete history for AI agents."
readmeQualityOk: true
url: "https://github.com/project-minigraf/temporal_reasoning"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["ai-agents", "claude-code", "knowledge-graph", "opencode", "prompts", "skill", "bi-temporal", "context-management", "datalog", "graph-database"]
stars: 5
forks: 0
openIssues: 12
closedIssues: 131
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-06T17:24:48Z"
lastCommitAt: "2026-07-22T06:09:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 53
maintainers: ["adityamukho"]
openGraphImageUrl: "https://opengraph.githubassets.com/28fe820768ae347359cd13feb7d098fa9a6e78278cd0dd7f9c2a18998c17423c/project-minigraf/temporal_reasoning"
discussionCount: 0
---

# Temporal Reasoning

**Perfect memory. Exact reasoning. Complete history.**

Temporal Reasoning gives AI coding agents bi-temporal graph memory: query any past state, traverse live dependency graphs, and correlate architectural decisions with structural change — all with deterministic Datalog, no fuzzy retrieval.

## Questions Only Temporal Reasoning Can Answer

These queries are impossible with git log, vector search, or key-value memory:

```datalog
; What did the dependency graph look like before the auth refactor?
[:find ?caller ?callee
 :as-of 30
 :where [?caller :calls ?callee]]

; When did this coupling first appear — and what decision caused it?
[:find ?reason
 :where [:project/service-a :depends-on :project/service-b]
        [?d :motivated-by ?c]
        [?c :description ?reason]]

; Which modules were coupled to the payment service when we made the DB decision?
[:find ?module
 :as-of 15
 :where [?module :depends-on :service/payment]]
```

This is the only tool where both the decision and the structural change live as datoms in the same graph and can be joined in a single query. See [Phase 5](https://github.com/project-minigraf/temporal_reasoning/blob/HEAD/ROADMAP.md)…
