---
repo: "ns2switch/irmind"
name: "irmind"
description: "IRMind - Assisted Incident Response. Terminal AI client for security incident investigation , with strict policy enforcement, signed chain of custody, and pluggable per-product modules."
readmeQualityOk: true
url: "https://github.com/ns2switch/irmind"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 37
closedIssues: 90
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-25T17:41:34Z"
lastCommitAt: "2026-11-24T14:07:32Z"
lastReleaseAt: "2026-11-13T00:34:14Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine", "under_pressure"]
healthScore: 92
undervaluedScore: 59
maintainers: ["ns2switch"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f996e63389c3abd18a7e8e76b78ccc42ce485952b11eefb383a5da629c7a2d9/ns2switch/irmind"
---

[Spanish version](https://github.com/ns2switch/irmind/blob/HEAD/README.es.md)

# IRMind — terminal investigations with a signed record

IRMind is an open-source terminal assistant for DFIR analysts evaluating incident response workflows. Investigate local and remote evidence in a conversation, load forensic **skills** on demand and delegate bounded tasks to parallel **subagents**. The model proposes, **policy** decides, and a **signed custody record** preserves what happened.

**Pre-1.0 · evaluation software; not validated for real incidents.** An analyst has tested a multi-turn investigation with a real DeepSeek model on a public CloudTrail dataset, including a skill and confirmed findings. This is [partial validation](https://github.com/ns2switch/irmind/blob/HEAD/docs/development/manual-validation.md#partial-real-model-investigation-2026-11-17); real-connector and verification checks remain pending.

## Try the offline demo in two minutes

After [installing a verified release](https://github.com/ns2switch/irmind/blob/HEAD/docs/platforms.md#verify-a-release-before-installing), run:

```sh
irmind demo
```
