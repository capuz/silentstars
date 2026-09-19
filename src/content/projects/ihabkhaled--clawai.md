---
repo: "ihabkhaled/ClawAI"
name: "ClawAI"
description: "Claw is a local-first AI control plane that runs powerful open models on your machine and connects to top LLM providers. It intelligently routes every prompt to the best model, giving you one secure workspace for chat, memory, context, connectors, routing, and full AI orchestration. "
readmeQualityOk: true
url: "https://github.com/ihabkhaled/ClawAI"
homepage: "https://claw-ai.co"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agentic-ai", "ai", "ai-agents", "ai-orchestration", "anthropic", "anthropic-claude", "claude-code", "llm", "open-source", "openai"]
stars: 23
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-04-04T12:14:29Z"
lastCommitAt: "2026-09-19T01:42:27Z"
lastReleaseAt: "2026-08-08T15:20:59Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 53
maintainers: ["ihabkhaled", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1201246330/26a89bc8-9714-4543-bbfc-dbb3bab1525d"
fundingLinks: ["GITHUB:https://github.com/ihabkhaled", "CUSTOM:https://www.paypal.com/paypalme/ihabkhaled259"]
discussionCount: 6
---

```
   _____ _
  / ____| |
 | |    | | __ ___      __
 | |    | |/ _` \ \ /\ / /
 | |____| | (_| |\ V  V /
  \_____|_|\__,_| \_/\_/
```

# ClawAI

**Local-first AI orchestration platform.**

ClawAI is an open-source platform for orchestrating AI models across multiple providers -- cloud and local -- through a unified interface. It routes prompts intelligently, manages provider connections securely, and keeps your data under your control.

---

## Key Features

- **Multi-provider routing** -- OpenAI, Anthropic, Google Gemini, AWS Bedrock, DeepSeek, xAI, and local models via Ollama
- **Intelligent model routing** -- A local judge model selects the best provider/model for each request based on task characteristics, connector health, and learned priors from routing telemetry and replay data
- **Local-first architecture** -- Run entirely on your own hardware with Ollama; cloud providers are optional
- **Microservices backend** -- 17 independent NestJS services with fault isolation and independent scaling
- **Secure secret management** -- Connector API keys encrypted at rest with AES-256-GCM
- **Chat interface** -- Threaded conversations with full message history
- **Memory and context…
