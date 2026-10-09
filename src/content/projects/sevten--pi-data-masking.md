---
repo: "Sevten/pi-data-masking"
name: "pi-data-masking"
description: "A Pi extension that replaces sensitive data with realistic placeholders before it reaches the LLM provider, then restores it locally for users and tools."
readmeQualityOk: true
url: "https://github.com/Sevten/pi-data-masking"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api-keys", "data-masking", "developer-tools", "llm", "llm-security", "pi", "pi-coding-agent", "pi-extension", "privacy", "prompt-security"]
stars: 11
forks: 5
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-01T07:55:19Z"
lastCommitAt: "2026-10-09T18:55:32Z"
lastReleaseAt: "2026-09-23T12:43:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["Sevten", "zolped", "unrelentingfox"]
openGraphImageUrl: "https://opengraph.githubassets.com/8eb39eb76e3f343142af2fb9fdc368cddf0e211009cb2eb12eda4f7ef3826d5b/Sevten/pi-data-masking"
---

# pi-data-masking

pi-data-masking is a Pi agent extension that replaces configured values—secrets, credentials, customer data—with stable, realistic-looking placeholders before a request reaches the LLM provider.

```text
user/tool data → mask → LLM → restore tool arguments → tool uses real data
                              tool result → mask → next LLM request
```

## Features

- **Model-friendly placeholders** — recognizable token, URL, address, and credential shapes reduce disruption to model reasoning and tool calls without exposing an obvious `[REDACTED]` marker.
- **Integrated rule management** — `/masking` centralizes project and global rules, presets, ordering, testing, import, and redacted export in one UI.
- **Efficient long conversations** — with stable rules, cached masking results avoid repeated regex scans of unchanged history as the conversation grows.
- **Model guidance for placeholders** — an opt-in system-prompt note teaches the model to compare placeholders as exact full strings, pass them verbatim into tools, and route transformations through tools instead of slicing or hashing them.
- **Placeholder disclosure** — optionally list the session's actual…
