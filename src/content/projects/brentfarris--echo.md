---
repo: "BrentFarris/echo"
name: "echo"
description: "Local AI / LLM harness for real programmers"
readmeQualityOk: true
url: "https://github.com/BrentFarris/echo"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [59, 24]
topics: ["ai", "coding", "programming", "ai-agents", "ai-assistant", "ai-harness"]
stars: 10
forks: 1
openIssues: 13
closedIssues: 33
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-06-02T14:21:06Z"
lastCommitAt: "2026-08-19T04:08:25Z"
lastReleaseAt: "2026-06-20T09:29:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 55
maintainers: ["BrentFarris", "MrFrenik", "BrentTripwire"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1257272743/cf65b42a-ac62-48aa-875e-53996ede48b8"
---

# Echo

  <strong>A local-first AI coding workspace that runs in your browser.</strong>
</p>

</p>

</p>

Echo brings chat, code editing, source control, and terminals together in one responsive web interface. The Go server works directly with folders on its machine, persists each workspace's conversations and agent configuration, and serves the TypeScript application as part of a single binary.

Connect Echo to a local or remote provider that exposes an OpenAI-compatible `/chat/completions` API. Echo supports streamed responses, reasoning content, and tool calls without requiring an Echo account or hosted Echo service.

> **Project status:** Echo is under active development. Nightly builds are unsigned snapshots of the current `master` branch.

## What Echo can do

| Area | Current capabilities |
| --- | --- |
| **Chat** | Persistent workspace conversations, multiple chat tabs, per-chat model and agent-mode selection, streamed Markdown, reasoning, tool activity, stop and clear controls, and skill creation from a conversation |
| **Agent modes** | Built-in General and read-only Plan modes plus workspace-defined system instructions, tool allowlists, and path restrictions |
|…
