---
repo: "broxhq/qpilot"
name: "qpilot"
description: "AI agent that runs your manual test cases in a real browser"
readmeQualityOk: true
url: "https://github.com/broxhq/qpilot"
homepage: "https://brox.sh/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [74, 25]
topics: ["ai-agent", "browser-automation", "qa-automation", "quality-assurance", "ai-testing", "anthropic", "claude", "e2e-testing", "llm", "manual-testing"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-03T07:37:55Z"
lastCommitAt: "2026-11-27T16:24:14Z"
lastReleaseAt: "2026-11-24T18:46:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["Muhammad-21", "Lord-of-world"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1258004823/200e3b4a-17d7-4e45-88cd-7e4ef78349e8"
discussionCount: 0
---

```bash
npx qpilot
```

That's the whole install. No test code, no selectors, no config files.

**Needs:** Node.js 20.12+, Google Chrome, and an [Anthropic API key](https://console.anthropic.com)
— or any OpenAI-compatible endpoint (Qwen, vLLM, Ollama, a corporate gateway).

## What you get back

Not "the test failed", but which step, what was expected, what the page actually
showed, and a screenshot of that moment:

Every step ends as `pass`, `fail` or `warn`. When the run is over, **Copy report**
gives you Markdown for the ticket and **Download report** one HTML file with the
screenshots inside.

## Why you can trust a green step

Getting an agent to click through a page is the easy part. The hard part is a
`pass` you don't have to re-check yourself. That is what most of qpilot is about:
