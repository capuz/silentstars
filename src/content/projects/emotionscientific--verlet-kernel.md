---
repo: "emotionscientific/verlet-kernel"
name: "verlet-kernel"
description: "declarative intelligence system"
readmeQualityOk: true
url: "https://github.com/emotionscientific/verlet-kernel"
homepage: "https://verlet.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-29T19:39:09Z"
lastCommitAt: "2026-08-26T04:17:45Z"
lastReleaseAt: "2026-08-04T22:09:11Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 48
maintainers: ["hellosunnyfield", "wyattgill9", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82affa7bbce065101af6a55cd0eb21aac15525d45368500be5a8c3074a4f48aa/emotionscientific/verlet-kernel"
---

# Verlet

> Status: Verlet Kernel is experimental. APIs, behavior, and release
> packaging may change before a stable public release. It is the open-source
> engine under Verlet Cloud, the managed agents service.

## What Is Verlet

Verlet Kernel is a declarative harness that grew into a complete runtime for
agent workloads, written in Rust.

You declare an agent before anything runs. Its manifest is a preset: it carries
model profiles, policies, runtime defaults, workspace requirements, and the
context pipeline, and it proposes tools and resources for binding. When a
thread starts, the kernel expands that preset and records the opening
`binding.attached` events. Those recorded attachments, rather than a standing
manifest document, establish tool authority.

It serves heterogeneous workloads on one machine. Agents, workflows, and
sub-agents run on the same execution machinery and differ only in continuation
policy: a workflow follows a fixed script, an agent chooses its next step.
Bring a harness with you or declare one here; either way the kernel owns
dispatch, authority, and the record.

The engine is modular and recomposes without changing meaning. Embed it in a
process, run it…
