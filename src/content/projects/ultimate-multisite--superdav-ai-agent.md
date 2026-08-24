---
repo: "Ultimate-Multisite/superdav-ai-agent"
name: "superdav-ai-agent"
description: "AI Agent for WordPress — agentic AI loop with tool-calling via the Abilities API"
readmeQualityOk: true
url: "https://github.com/Ultimate-Multisite/superdav-ai-agent"
language: "PHP"
languages: ["PHP"]
languagePcts: [78]
stars: 27
forks: 4
openIssues: 10
closedIssues: 1320
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-01T23:49:42Z"
lastCommitAt: "2026-08-24T04:23:23Z"
lastReleaseAt: "2026-04-20T19:36:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["superdav42"]
openGraphImageUrl: "https://opengraph.githubassets.com/f22cc83d8266ca7011b512598271b5c4808420781737901e024e799d7066cd2a/Ultimate-Multisite/superdav-ai-agent"
---

# SD AI Agent for WordPress

[Documentation](https://github.com/Ultimate-Multisite/sd-ai-agent/wiki)

SD AI Agent is your AI teammate for the WordPress site you already run. Ask one assistant to improve content, prepare products, review SEO and site information, and automate repeatable work — while keeping your existing theme, plugins, and AI provider. The technical foundation below lets compatible plugins add tools the assistant can use as your site grows.

## How it works

WordPress 7.0 introduced two core APIs that make this possible:

- **AI Client SDK** — A unified interface for AI providers. Any connector plugin (OpenAI, Anthropic, Google, Ollama, etc.) registered through the Connectors API works automatically. Switch providers or models at any time.
- **Abilities API** — A standard way for plugins to register actions an AI can take. AI Agent discovers every registered ability on your site and makes it available to the AI. Install a WooCommerce extension that registers abilities and the agent can manage orders without any extra configuration.

This means the agent gets more capable as your site grows. Every plugin that registers abilities expands what the AI can do — no glue…
