---
repo: "impalasys/talon"
name: "talon"
description: "Talon is a cloud-native control plane for autonomous agent fleets"
readmeQualityOk: true
url: "https://github.com/impalasys/talon"
homepage: "https://impala.systems/talon/docs"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [68, 20]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-14T00:56:00Z"
lastCommitAt: "2026-08-04T06:11:08Z"
lastReleaseAt: "2026-06-06T23:35:33Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 53
maintainers: ["ShukantPal"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1238259397/05e3b636-f93d-4bdf-bda7-d42b683e4e9e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061337Z&X-Amz-Expires=300&X-Amz-Signature=009546eaae7ee870e39674955687ce6c94d5c5b29425c03b830a05a42f293156&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMxNywibmJmIjoxNzg1ODI0MDE3LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.CGizuUNMAI5Rz-4jwhbID9gX5hz6F3xQcMu_DxPE8Iw"
---

</a>
</p>

</p>

Talon is a cloud-native control plane for autonomous agent fleets. It provides the infrastructure needed to operate long-lived agents in production, including durable execution, declarative configuration, namespace isolation, and a browser-native fleet view.

Agent threads survive crashes, deployments, and cold starts while prompts, tools, workflows, and policies stay explicit in a Kubernetes-style resource model.

## Capabilities

Talon bridges raw LLM inference and production-grade agent operations through a few core pillars:

- **Durable execution**: persisted sessions can resume across worker restarts, failures, deploys, and cold starts.
- **Declarative configuration**: agents, tools, workflows, knowledge, and policies are defined as YAML manifests and managed with `talon-cli`.
- **Fleet observability**: Sightline provides a browser-native view for inspecting running sessions, resource state, schedules, and execution history.
- **Extensible tooling**: namespace-scoped MCP support lets agents use approved external tools, data sources, and services.

<table>
  <tr>
    <td align="center">
      <strong>AWS</strong>
    </td>
    <td align="center">…
