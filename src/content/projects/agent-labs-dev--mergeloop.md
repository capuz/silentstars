---
repo: "agent-labs-dev/mergeloop"
name: "mergeloop"
description: "Merge queue for GitHub that resolves rebase conflicts with an agent. Hosted at mergepatrol.ai, or self-host it."
readmeQualityOk: true
url: "https://github.com/agent-labs-dev/mergeloop"
homepage: "https://mergepatrol.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["ai-agents", "github-app", "merge-queue", "open-source", "oss", "rust"]
stars: 6
forks: 1
openIssues: 9
closedIssues: 32
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-10-28T05:34:52Z"
lastCommitAt: "2026-11-07T22:51:45Z"
lastReleaseAt: "2026-10-30T16:51:15Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 63
maintainers: ["jnsdls", "merge-loop[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9c5235b82f42c82e1962625986d92f92d7d19dd959e6fa120f09612ffb71b1f/agent-labs-dev/mergeloop"
---

MergeLoop is a merge queue for GitHub. Add a label to a pull request, and MergeLoop rebases it onto its base branch if it has to, waits for the required checks, and merges it.

Status: early. Expect rough edges, and [tell us](https://github.com/agent-labs-dev/mergeloop/issues/new/choose) what breaks.

This README is also the website's docs, at [mergeloop.ai/docs](https://mergeloop.ai/docs). `DOCS` in `crates/web/src/docs.rs` picks its `##` sections by heading, and a test fails when one is renamed.

MergeLoop was previously called Mergepatrol. A repo set up before the rename keeps working as
it is: MergeLoop still reads its config file at `.mergepatrol/mergepatrol.yml`, where the label
the file leaves out stays `mergepatrol`, and updating the repo's skill moves it from
`skills/mergepatrol` to `skills/mergeloop`. Self-hosting still reads the `MERGEPATROL_*`
environment variables. The source repo is now `agent-labs-dev/mergeloop`; GitHub redirects the old name.

## Try it

The hosted MergeLoop at https://mergeloop.ai runs the public GitHub App [Merge Loop](https://github.com/apps/merge-loop) (`merge-loop`). You bring your own model API key.

1. Sign in with GitHub at…
