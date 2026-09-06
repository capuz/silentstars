---
repo: "skye-harris/llm_intents"
name: "llm_intents"
description: "Exposes internet search tools for use by LLM-backed Assist in Home Assistant"
readmeQualityOk: true
url: "https://github.com/skye-harris/llm_intents"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["homeassistant", "llm-tools", "assist", "hacs", "hacs-integration", "hassio", "hassio-integration", "homeassistant-addons", "homeassistant-integration", "home-assistant"]
stars: 197
forks: 21
openIssues: 0
closedIssues: 29
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2025-07-06T08:21:35Z"
lastCommitAt: "2026-09-06T08:02:38Z"
lastReleaseAt: "2026-01-22T09:28:56Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 97
undervaluedScore: 42
maintainers: ["skye-harris", "dependabot[bot]", "NickM-27"]
openGraphImageUrl: "https://opengraph.githubassets.com/22bb55b83840b186a2eb0b63fb3ba5f49e3921ab80f463168316c605c1df5634/skye-harris/llm_intents"
discussionCount: 34
---

# Tools for Assist _(Custom Integration for Home Assistant)_

Additional tools for LLM-backed Assist for Home Assistant:

* **Web Search** powered by your choice of _Brave_ or _SearXNG_
* **Location Search** powered by Google Places
* **Routes & Travel Time** powered by Google Routes
* **Wikipedia**
* **Weather Forecast**
* **YouTube Search and Playback**
* **Basic Utilities** — Calculator, Kitchen Unit Converter, and Date Information
* **Entity History** — Part of the `Home control` domain

Each tool is optional and configurable via the integrations UI. Some tools require API keys, but are usable on free tiers.
A caching layer is utilised in order to reduce both API usage and latency on repeated requests for the same information within a 2-hour period.

Additionally, a customisable clone of Home Assistants inbuilt `Assist` tooling API can be enabled and used with your Conversation Agents:
- Edit the hidden prompt that the Assist API injects into your system prompt, if this is not to your liking, or conflicts with instructions that you have provided in your own prompt.
- Disable any of the default Assist API tools that you don't want your Conversation Agents to…
