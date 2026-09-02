---
repo: "alphaparkinc/genpark-autonomous-price-negotiation-discount-broker-skill"
name: "genpark-autonomous-price-negotiation-discount-broker-skill"
description: "Autonomous price negotiation discount broker & margin protection (Klarna AI)"
readmeQualityOk: true
url: "https://github.com/alphaparkinc/genpark-autonomous-price-negotiation-discount-broker-skill"
homepage: "https://genpark.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-commerce", "agent-skills", "ai-agents", "claude", "cursor", "ecommerce", "llm-tools", "mcp", "mcp-server", "model-context-protocol"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-02T08:03:50Z"
lastCommitAt: "2026-09-02T08:04:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 18
maintainers: ["alphaparkinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba69c4d8a95dedda3eaf1ebfbe681d55712e7fc4bce2c3d1e34da1f5c9eb59a6/alphaparkinc/genpark-autonomous-price-negotiation-discount-broker-skill"
---

# genpark-autonomous-price-negotiation-discount-broker-skill

   

> **GenPark AI Agent Skill** -- Autonomous price negotiation discount broker & margin protection (Klarna AI)

## Quick Start
```python
python example_usage.py
```

## Architecture
```mermaid
graph LR
  User([User / AI Agent]) -->|JSON Request| Skill[GenPark AI Skill]
  Skill --> CoreEngine[Core Engine]
  CoreEngine -->|Structured Output| User
```

## MCP
```bash
python mcp_server.py
```
