---
repo: "oceanbase/langchain-oceanbase"
name: "langchain-oceanbase"
description: "This package contains the LangChain integration with OceanBase."
readmeQualityOk: true
url: "https://github.com/oceanbase/langchain-oceanbase"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 15
forks: 12
openIssues: 0
closedIssues: 31
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2024-12-18T08:29:49Z"
lastCommitAt: "2026-09-29T10:05:04Z"
lastReleaseAt: "2025-12-13T13:54:08Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 75
maintainers: ["webup", "dependabot[bot]", "PsiACE"]
openGraphImageUrl: "https://opengraph.githubassets.com/79ae568a24d78f44d980778198801ef7fa1b7ee9840b8f6c0e7dc36294e6b1fd/oceanbase/langchain-oceanbase"
---

# langchain-oceanbase

This package contains the LangChain integration with OceanBase. See the [changelog](https://github.com/oceanbase/langchain-oceanbase/blob/HEAD/CHANGELOG.md) for release notes.

[OceanBase Database](https://github.com/oceanbase/oceanbase) is a distributed relational database.
It is developed entirely by Ant Group. The OceanBase Database is built on a common server cluster.
Based on the Paxos protocol and its distributed structure, the OceanBase Database provides high availability and linear scalability.

OceanBase currently has the ability to store vectors. Users can easily perform the following operations with SQL:

- Create a table containing vector type fields;
- Create a vector index table based on the HNSW algorithm;
- Perform vector approximate nearest neighbor queries;
- ...

## Version Compatibility

`langchain-oceanbase` follows the major LangChain/LangGraph lines. **Pick the release that matches the LangChain stack your application already uses:**

| langchain-oceanbase | langchain-core | langgraph | langgraph-checkpoint | Notes |
| --- | --- | --- | --- | --- |
| **0.6.x** (current) | `>=1.0,<2` | `>=1.0.6,<2` | `>=4.0,<5` | LangChain **1.x** + a…
