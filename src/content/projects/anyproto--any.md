---
repo: "anyproto/any"
name: "any"
description: "local-first, e2e encrypted multiplayer CRDT database "
readmeQualityOk: true
url: "https://github.com/anyproto/any"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 32
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-04-29T15:43:53Z"
lastCommitAt: "2026-11-11T19:46:48Z"
lastReleaseAt: "2026-07-04T01:10:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 36
maintainers: ["cheggaaa", "apronkin"]
openGraphImageUrl: "https://opengraph.githubassets.com/a058cd1ab7c72febeab45b028526c5b7f4df4b2074fab54b0e8e410d8f857067/anyproto/any"
---

# Any

Any is an open-source, reactive, local-first database for people and LLMs
building custom software. Create collaborative apps with control over your
data and without the usual burden of backend development and maintenance.

Store documents, run Mongo-style queries, and subscribe to live updates
through a local HTTP API. Reads and writes work offline. Changes sync with
end-to-end encryption and merge automatically across devices.

Any includes hybrid search, version history, and built-in support for chat
and collaborative editing. Its companion runtime, anyrt
([anyproto/anybao](https://github.com/anyproto/anybao)), runs sandboxed
Python programs, scheduled jobs, and an agent harness alongside your data.
You choose the models and control your data and agent memory.
[Read the docs](https://docs.any.org/) to learn more.

Under the hood, Any brings together:

- Encrypted multiplayer sync powered by
  [any-sync](https://github.com/anyproto/any-sync), battle-tested across
  millions of spaces over years in production and
  [audited by Cure53](https://community.anytype.io/t/cure53-security-audit-of-anysync/31366).
- Mongo-style queries and aggregations powered by…
