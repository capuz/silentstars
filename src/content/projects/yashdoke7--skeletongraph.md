---
repo: "yashdoke7/skeletongraph"
name: "skeletongraph"
description: "Zero-LLM structural code retrieval for AI coding agents — tree-sitter index, BM25+dense+structural fusion, served over MCP."
readmeQualityOk: true
url: "https://github.com/yashdoke7/skeletongraph"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-coding-agents", "mcp", "model-context-protocol", "code-retrieval", "mcp-server", "swe-bench", "tree-sitter"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-18T07:43:10Z"
lastCommitAt: "2026-09-19T08:02:03Z"
lastReleaseAt: "2026-07-25T06:58:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 42
maintainers: ["yashdoke7"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bf37532496ff395fdb0cba99efa721230da4b92715905c4363f8a3ba076672a/yashdoke7/skeletongraph"
---

alt="SkeletonGraph — the exact function, not a pile of files. An MCP server that indexes your repo with tree-sitter, then ranks symbols by BM25, embeddings, and the call graph, fused with reciprocal-rank fusion. First-search file recall 66% to 86%, function-level localization 0% to ~80%, cost at the 95th percentile down 42%."
       width="100%">
</p>

</p>

  <strong>Works with</strong>&nbsp;
</p>

  <strong>Languages</strong>&nbsp;
</p>

**Coding agents burn tokens reading whole files to find one function. SkeletonGraph
indexes your repo with tree-sitter — no LLM — and hands the agent the exact function
to edit, over MCP.**

<picture>
  <source srcset="docs/paper/figures/sg_hero.gif" media="(prefers-reduced-motion: no-preference)">
       alt="SkeletonGraph walkthrough on a real django/django task. 1 INDEX: tree-sitter parses the repo into named function nodes joined by call edges, no LLM. 2 QUERY: the agent calls sg_search with the plain-English issue text over MCP. 3 RANK: BM25, jina-code embeddings, and the call graph each rank the same symbols in a different order. 4 FUSE: reciprocal-rank fusion merges the three orderings and _alter_field, ranked 2nd, 3rd and 2nd and top of…
