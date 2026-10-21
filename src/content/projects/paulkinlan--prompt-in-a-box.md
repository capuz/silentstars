---
repo: "PaulKinlan/prompt-in-a-box"
name: "prompt-in-a-box"
description: "A Chrome extension whose entire logic is a prompt. Swap prompt.md for a different behaviour; the manifest's permissions define the capabilities; the agent loop is generic. Built on agent-do."
readmeQualityOk: true
url: "https://github.com/PaulKinlan/prompt-in-a-box"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [69]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-24T13:31:39Z"
lastCommitAt: "2026-10-21T17:31:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 32
maintainers: ["PaulKinlan", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/416e963052003faf119b9bd056ad9f972fa503fefce4ecdfbbc5a18f8101a44d/PaulKinlan/prompt-in-a-box"
---

# Prompt in a Box

A Chrome extension whose entire behaviour lives in a markdown file. First-time users get an onboarding flow that picks a provider and validates an API key; returning users get a full options page with a per-run audit log (tool calls, token counts, cost per run, exportable JSON).

A `.crx` is a zip plus a manifest. It already has a permission model, a sandbox, a distribution channel, and an event-driven runtime that wakes on schedule. Drop a prompt into that zip alongside a generic agent loop, and you have a distributable prompt-program. The manifest declares what the agent can reach. The prompt declares what the agent should do. Swap `prompt.md` for a different set of instructions and the same extension becomes a different tool.

This repo is a working minimum of that pattern. It uses [agent-do](https://www.npmjs.com/package/agent-do) as the loop, exposes Chrome APIs as tools (one file per tool), keeps state in OPFS and `chrome.storage.local`, and ships with one example prompt (a tab-hygiene agent) so you can see the end-to-end shape.

## Layout

```
manifest.json           – permissions, host_permissions, CSP, alarm defaults
prompt.md               – the…
