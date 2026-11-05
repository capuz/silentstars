---
repo: "micllam/taquba"
name: "taquba"
description: "Durable execution for Rust on object storage, with transactional coordination and no database, broker or control plane to operate."
readmeQualityOk: true
url: "https://github.com/micllam/taquba"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["at-least-once", "durable-execution", "object-storage", "rust", "s3", "slatedb", "task-queue", "workflow-engine"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-29T12:29:40Z"
lastCommitAt: "2026-11-05T11:23:03Z"
lastReleaseAt: "2026-05-15T09:30:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 39
maintainers: ["micllam", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c59e7696f05a7a5e8cc25e5dedd674964ceb3c1e99b5e3032f6169657ae49da2/micllam/taquba"
---

# Taquba

Durable execution for Rust on object storage. Multi-step runs, memoized side
effects and background jobs keep their state in a bucket or a local directory,
with transactional coordination built in and no database, broker or control
plane to operate.

Taquba is a workspace of Rust crates. `taquba-workflow` runs durable multi-step
processes, and `taquba` is the durable queue underneath it and the substrate of
every other crate. Job records, run records and memos are stored in object
storage (S3, GCS, Azure Blob or local disk) through
[SlateDB](https://github.com/slatedb/slatedb). Workers do not keep state, so a
replacement process resumes where the previous one stopped.

Taquba is embedded and single-process: one process owns each store, and
producers and workers share it. It is built for long-running, slow, IO- or
API-bound work in one Rust process: LLM agents, batch document pipelines and
command-line tools whose runs resume after an interruption. A different tool is
the better choice for a worker fleet across machines, a latency-sensitive
request path or a high volume of short jobs. The section
[When to use it, and when not to](#when-to-use-it-and-when-not-to) states…
