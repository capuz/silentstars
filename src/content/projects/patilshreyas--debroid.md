---
repo: "PatilShreyas/debroid"
name: "debroid"
description: "Autonomous, headless Android debugger designed for AI coding agents. Inspect runtime memory, set breakpoints, and debug live apps."
readmeQualityOk: true
url: "https://github.com/PatilShreyas/debroid"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["agentic-ai", "android", "antigravity", "claude-code", "cli", "codex", "debugger", "debugging", "debugging-tool", "developer-tools"]
stars: 255
forks: 13
openIssues: 7
closedIssues: 29
watchers: 3
contributors: 2
recentReleases: 5
createdAt: "2026-08-02T15:58:29Z"
lastCommitAt: "2026-09-06T08:04:41Z"
lastReleaseAt: "2026-09-06T08:05:37Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 30
maintainers: ["PatilShreyas", "github-actions[bot]", "theapache64"]
openGraphImageUrl: "https://opengraph.githubassets.com/95f57284a3356216452d07547d0ab6c49104c25c384f57f4ce8129f617fe6f35/PatilShreyas/debroid"
---

<h1>Debroid 🤖⚡</h1>
  <p><b>The Headless Android Debugger for AI Agents</b></p>

  <p>
  </p>
</div>

**Debroid** (*DEBug + AnDROID*) is a headless CLI that speaks the Java Debug Wire protocol (JDWP) so AI agents — Claude Code, Grok Build, Codex, OpenCode, Cursor, Antigravity, or anything with a terminal — can debug a live Android app the way a human would in Android Studio: set breakpoints, catch exceptions, step through code, inspect and mutate variables, and watch fields — all without a GUI, and all through strict, machine-parseable JSON.

## ❓ Why it exists

Traditional Android development environments are highly visual. While AI coding assistants can write code, they are effectively "blind" when it comes to runtime debugging because they cannot click through the Android Studio UI to inspect memory or pause execution.

**Debroid closes this gap.** It acts as a translation layer between the raw terminal (which AI agents are great at using) and the Android Virtual Machine. By providing a CLI that outputs deterministic JSON, an AI agent can autonomously hypothesize a bug, launch the app, trap the exact line of code, read the live state of the device, and evaluate a fix —…
