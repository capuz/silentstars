---
repo: "epam/ai-dial-adapter-bedrock"
name: "ai-dial-adapter-bedrock"
description: "The project implements AI DIAL API for language models from AWS Bedrock"
readmeQualityOk: true
url: "https://github.com/epam/ai-dial-adapter-bedrock"
homepage: "https://dialx.ai"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-dial", "llm"]
stars: 13
forks: 5
openIssues: 11
closedIssues: 82
watchers: 15
contributors: 21
recentReleases: 0
createdAt: "2023-09-18T16:28:49Z"
lastCommitAt: "2026-09-14T09:12:44Z"
lastReleaseAt: "2024-03-05T15:17:05Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 95
undervaluedScore: 67
maintainers: ["dependabot[bot]", "adubovik", "AlexFoxalt"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dcec89fab78646c73c579ffa1e639626bfb9c47ab453c91f1ef7e8d8d4a850f/epam/ai-dial-adapter-bedrock"
---

<h1 align="center">
  DIAL Bedrock Adapter
</h1>
  </a>
</p>
<h4 align="center">
  </a>
</h4>

- [Overview](#overview)
  - [Supported models](#supported-models)
    - [Chat completion models](#chat-completion-models)
      - [Implementation basis](#implementation-basis)
      - [Configurable models](#configurable-models)
        - [Converse API models](#converse-api-models)
          - [Performance configuration](#performance-configuration)
          - [Guardrail configuration](#guardrail-configuration)
          - [Optimized latency mode for Claude models](#optimized-latency-mode-for-claude-models)
        - [Claude models](#claude-models)
        - [Stability AI models](#stability-ai-models)
      - [Prompt caching](#prompt-caching)
        - [Manual prompt caching](#manual-prompt-caching)
        - [Automatic prompt caching](#automatic-prompt-caching)
      - [Cross-region inference](#cross-region-inference)
    - [Embedding models](#embedding-models)
  - [Environment Variables](#environment-variables)
    - [Session Tags](#session-tags)
      - [The Bedrock source](#the-bedrock-source)
      - [The role session name](#the-role-session-name)
      - [The DIAL UserInfo…
