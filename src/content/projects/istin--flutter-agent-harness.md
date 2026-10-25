---
repo: "IstiN/flutter_agent_harness"
name: "flutter_agent_harness"
description: "Fa - Factory Agent. Cross-platform AI agent harness for Dart and Flutter — streaming providers, agent loop with tools, session persistence, compaction; backend agent mode: fa behind product Go backends"
readmeQualityOk: true
url: "https://github.com/IstiN/flutter_agent_harness"
homepage: "https://fa1.dev"
language: "Dart"
languages: ["Dart"]
languagePcts: [91]
topics: ["ai", "ai-agent", "ai-agents", "ai-coding", "ai-governance", "ai-tools", "dart", "factory", "flutter", "flutter-app"]
stars: 84
forks: 8
openIssues: 26
closedIssues: 789
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-07-13T19:36:19Z"
lastCommitAt: "2026-10-25T08:40:30Z"
lastReleaseAt: "2026-07-23T03:47:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 36
maintainers: ["ai-teammate", "vabhzw17eg2qu4m9-bit", "IstiN"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d173c55ce7c948a26c5a8fa411ac77d1865e983e6de63266d24170170bdfe5c/IstiN/flutter_agent_harness"
discussionCount: 0
---

# flutter_agent_harness

Cross-platform AI agent harness for Dart and Flutter — streaming provider
adapters, an agent loop with native tool calling, JSONL session persistence,
context compaction, and a pi-like terminal coding agent (`fa`). Architecture
ported from [pi-mono](https://github.com/badlogicgames/pi-mono)
(`packages/ai` + `packages/agent`), with a pure-Dart core that runs on the
VM, Flutter desktop/mobile, and web.

**[fa1.dev](https://fa1.dev)** — the project website: a live in-browser
demo of the full agent (sandboxed shell, git, interpreters — your key
stays in page memory), the [iOS public
beta](https://testflight.apple.com/join/En1eC9UK) on TestFlight, the
[macOS app](https://github.com/IstiN/flutter_agent_harness/releases/latest),
and the CLI installer below.

## Design contract

- **Pure Dart core.** No `dart:io`, no Flutter imports in `lib/` — platform
  capabilities live behind abstractions (`ExecutionEnv`); the IO
  implementation is a separate entry point (`lib/io.dart`), so the core
  compiles for web.
- **Errors-as-events.** Providers never throw: network failures, 429s,
  malformed SSE — everything arrives as an `error` event with a stop
  reason. The agent…
