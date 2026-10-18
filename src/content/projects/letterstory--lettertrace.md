---
repo: "letterstory/lettertrace"
name: "lettertrace"
description: "Open source BYOK AEO telemetry"
readmeQualityOk: true
url: "https://github.com/letterstory/lettertrace"
homepage: "https://lettertrace.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 75
forks: 12
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2026-07-21T14:55:14Z"
lastCommitAt: "2026-10-18T08:17:10Z"
lastReleaseAt: "2026-09-02T17:41:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 40
maintainers: ["cmillstein1", "mahirkhan0828", "mohammed3bbas"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d3be8b15b5bf15805a8fdcaae975fca7b5b714b2bd85216f312e7af7f1bef72/letterstory/lettertrace"
---

**Open-source, bring-your-own-key monitoring for how your brand shows up in AI assistant answers.**

Track topics · auto-generate the questions people actually ask AI · watch trends over time · benchmark competitors' share of voice.

---

Lettertrace is a self-hostable AEO tool, focused purely on **diagnosing and monitoring AI mentions** (a.k.a. Answer Engine Optimization / Generative Engine Optimization). You describe your brand and a few topics; Lettertrace generates realistic prompts a person might ask ChatGPT or Claude, runs them against those models **with your own API key**, detects when your brand and your competitors get mentioned, and charts how your visibility, sentiment, and share of voice move over time.

- 🔓 **Open source** (MIT) and **BYOK**, you bring your own Anthropic / OpenAI / Google / Perplexity keys — or a single **LLM router** key ([Concentrate](https://concentrate.ai/)) instead. Either way they're encrypted at rest and never leave your infrastructure.
- 🧠 **Multi-model**, query Claude (Anthropic), ChatGPT (OpenAI), Gemini and Google AI Overviews (both on your Google key), and Perplexity Sonar. Add more providers easily.
- 🧩 **Topics → variations**,…
