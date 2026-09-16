---
repo: "eclipse-ankaios/ankaios"
name: "ankaios"
description: "Eclipse Ankaios provides workload and container orchestration for embedded devices like automotive HPCs."
readmeQualityOk: true
url: "https://github.com/eclipse-ankaios/ankaios"
homepage: "https://eclipse-ankaios.github.io/ankaios/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["automotive", "containers", "orchestration", "ankaios", "iot", "rust"]
stars: 125
forks: 31
openIssues: 46
closedIssues: 218
watchers: 7
contributors: 14
recentReleases: 0
createdAt: "2023-05-04T11:48:25Z"
lastCommitAt: "2026-09-16T08:47:38Z"
lastReleaseAt: "2025-07-31T07:58:09Z"
status: "thriving"
tags: ["needs_contributors", "community_hub"]
healthScore: 94
undervaluedScore: 47
maintainers: ["krucod3", "GabyUnalaq", "christoph-hamm"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec22ef897655db3ceb5825582bd292174ab774f955a75b28881d2f786058db08/eclipse-ankaios/ankaios"
discussionCount: 21
---

<picture style="padding-bottom: 1em;">
  <source media="(prefers-color-scheme: dark)" srcset="logo/Ankaios__logo_for_dark_bgrd_clipped.png">
  <source media="(prefers-color-scheme: light)" srcset="logo/Ankaios__logo_for_light_bgrd_clipped.png">
</picture>

# Eclipse Ankaios

Eclipse Ankaios is a workload and container orchestrator purpose-built for
embedded and automotive platforms. Designed to meet the unique demands of
resource-constrained environments and High-Performance Computing (HPC) systems
in vehicles, Ankaios delivers reliable workload management where it matters
most.

Ankaios supports both **Podman** and **containerd** runtimes, giving you the
freedom to choose the container technology that best fits your architecture and
security requirements. Other container runtimes and even native applications can
be added.
Built on a server-agent architecture, Ankaios manages multiple nodes and virtual
machines through a single unified API to start, stop, configure, and update
workloads. The setup consists of one server and multiple agents — typically one
agent per node — with each agent connecting to one or more runtimes that execute
your workloads. This design scales from simple…
