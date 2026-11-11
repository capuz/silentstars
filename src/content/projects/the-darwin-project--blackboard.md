---
repo: "The-Darwin-Project/Blackboard"
name: "Blackboard"
description: "Autonomous multi-agent orchestration engine implementing the blackboard architectural pattern in Python & Redis."
readmeQualityOk: true
url: "https://github.com/The-Darwin-Project/Blackboard"
homepage: "https://the-darwin-project.github.io/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [42, 40]
topics: ["agentic-ai", "blackboard-architecture", "llm-agents", "multi-agent-systems", "orchestration"]
stars: 8
forks: 1
openIssues: 3
closedIssues: 153
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-04T07:26:44Z"
lastCommitAt: "2026-11-11T10:24:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 69
maintainers: ["github-actions[bot]", "tal-hason"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1149503159/3ae68cb8-5fc5-4d89-ab22-7ab4440587aa"
---

# Darwin Blackboard (Brain)

The central nervous system of Darwin -- an autonomous closed-loop cloud operations system.

> **Contributing?** See [CONTRIBUTING.md](https://github.com/The-Darwin-Project/Blackboard/blob/HEAD/CONTRIBUTING.md) for development setup. Report security issues via [SECURITY.md](https://github.com/The-Darwin-Project/Blackboard/blob/HEAD/SECURITY.md). Community standards in [CODE_OF_CONDUCT.md](https://github.com/The-Darwin-Project/Blackboard/blob/HEAD/CODE_OF_CONDUCT.md).

## Architecture

The Brain orchestrates multi-agent conversations via the **Blackboard Pattern** with bidirectional WebSocket communication across Dashboard, Slack, and Generic WS Clients (External Portals/BFFs):

```mermaid
graph TD
    subgraph pod [Darwin Brain Pod]
        Brain["Brain - Vertex AI Pro"]
        Redis["Redis - State + Queue"]
        Aligner["Aligner - In-process + Flash Lite"]
        Archivist["Archivist - Deep Memory"]
        Nightwatcher["Nightwatcher - In-process + Flash"]
        Headhunter["Headhunter - GitLab + GitHub"]
        HeadhunterJira["Headhunter Jira - Jira Missions"]
        Qdrant["Qdrant - Vector Store"]
        Slack["Slack - Socket Mode"]…
