---
repo: "aerol-ai/microvm"
name: "microvm"
description: "AerolVM is a self-hosted platform for creating isolated Docker-backed sandboxes on a single Linux host."
readmeQualityOk: true
url: "https://github.com/aerol-ai/microvm"
homepage: "https://microvm.aerol.ai/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 22
forks: 4
openIssues: 30
closedIssues: 11
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-07T04:06:32Z"
lastCommitAt: "2026-10-03T09:23:30Z"
lastReleaseAt: "2026-05-22T22:37:45Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 39
maintainers: ["sumansaurabh", "akanshasinha19"]
openGraphImageUrl: "https://opengraph.githubassets.com/54291d07eb26e49c758d84adfe6c5a735ab19979647c3f9a5558683bf42dec08/aerol-ai/microvm"
fundingLinks: ["GITHUB:https://github.com/aerol-ai"]
discussionCount: 1
---

&nbsp;

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/aerol-ai/microvm/raw/main/docs/public/aerol-logo.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/aerol-ai/microvm/raw/main/docs/public/aerol-logo.svg">
  </picture>
</div>

<h3 align="center">
  Run Untrusted Code Safely.<br/>
  Self-Hosted or Fully-Managed Sandbox Infrastructure for AI Agents and Ephemeral Workloads.
</h3>

</p>

</p>

&nbsp;

AerolVM is open-source sandbox infrastructure for running isolated code environments - self-host it on your own Linux host, or run it as a managed, multi-tenant service. Each sandbox is a fully isolated compute unit with its own filesystem, network stack, and allocated resources - create latency as low as **4ms server-side** (V8 isolate warm path) and supporting OCI containers on **containerd** (default), gVisor, Firecracker, WASM, and V8-isolate runtimes. Built for AI agent pipelines and ephemeral CI, it ships as a single Go binary backed by Caddy for TLS routing and SQLite for state, with no external dependencies and a one-line installer.

What the project intends to do, and not do, through October 2027 is in…
