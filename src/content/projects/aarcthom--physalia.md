---
repo: "aarcThom/Physalia"
name: "Physalia"
description: "An open-source Grasshopper AI plugin"
readmeQualityOk: true
url: "https://github.com/aarcThom/Physalia"
language: "C#"
languages: ["C#"]
languagePcts: [90]
stars: 23
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-01T01:53:11Z"
lastCommitAt: "2026-08-19T04:06:57Z"
lastReleaseAt: "2026-04-24T14:44:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 36
maintainers: ["aarcThom"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8a789fc84302667f5b58c511e60c1fdcb25970c95c0eb76d3cfbc3c4b689f9f/aarcThom/Physalia"
---

Physalia is a tool for composing agentic loops (and broader orchestrations) where the tool surface is the Rhino/Grasshopper document. In other words, you can customize not only the output of the LLM, but also the process by which the LLM interacts with Grasshopper.

---

## What it does

- Generates Python Script components with correct inputs and outputs from a natural language prompt
- Generates node-based components
- Automatically detects and fixes runtime errors in generated components
- Supports iterative refinement — prompt back and forth to tweak generate components
- Supports the following APIs:
   - OpenAI
   - Anthropic
   - Google Gemini (generous free tier)
   - OpenAI API protocol (OpenRouter, Deepseek, and many more.)
- Runs local models via Ollama — no API key or internet connection required
- Runs via the Claude Code SDK — if you have Claude Code installed, no API key is needed.

---

## License

Physalia is designed as a free, auditable alternative to paid LLM plugins for Grasshopper. The AGPL-3.0 license means it stays open — any fork that ships must also stay open.

[AGPL-3.0](https://github.com/aarcThom/Physalia/blob/HEAD/LICENSE)
