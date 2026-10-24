---
repo: "minervacomputing/harness"
name: "harness"
description: "Governed AI agents for sensitive data and business-critical apps. Agents never hold credentials: a gateway checks every call against per-resource permissions, and each answer runs in a sealed container."
readmeQualityOk: true
url: "https://github.com/minervacomputing/harness"
homepage: "https://minervacomputing.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-security", "ai-agents", "django", "llm", "openai-compatible", "permissions", "react", "sandbox", "self-hosted"]
stars: 27
forks: 1
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-29T09:55:50Z"
lastCommitAt: "2026-10-24T08:20:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 37
maintainers: ["SzymonNastaly"]
openGraphImageUrl: "https://opengraph.githubassets.com/c337f1b5167a1210c669d900eab19c44978a19fd7734002d4f31d06e001d3ce6/minervacomputing/harness"
---

The agent never holds a key, and never decides its own permissions.

This repository is **Minerva's open harness**: the engine that runs each agent turn, with its sandbox, its permission checks and its connectors, on Cloudflare. It holds the engine alone. Minerva itself is a hosted product, and the product's side (accounts, organizations, connections and the app people use) is a private Laravel application that starts each turn here. **Self-hosting is not supported.**

## Why Minerva

Most agents are given the keys and asked to behave. They hold Gmail, Slack and Stripe tokens with broad access, and a prompt asks them to stay within bounds. One persuasive email or web page is enough to change their mind.

Minerva turns this around:

- **Keys stay out of the agent's reach.** The agent's commands run in a sealed microVM that holds no key and has no network. Credentials are encrypted at rest and never reach the sandbox, the model or the browser.
- **Every call is checked.** Each action goes through Minerva's permission check, against the permissions you set, before it reaches the app.
- **Access is set per resource.** You allow or deny per folder, label, channel, project, customer or…
