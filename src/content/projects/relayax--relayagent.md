---
repo: "relayax/relayagent"
name: "relayagent"
description: "A personal substrate for agent packages that ship their own screens. One manifest declares the agent, its verbs, and its UI."
readmeQualityOk: true
url: "https://github.com/relayax/relayagent"
homepage: "https://relayax.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["agent", "agent-framework", "ai-agent", "ai-tools", "claude-code", "codex", "developer-tools", "llm", "local-first", "manifest"]
stars: 17
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-07-31T07:18:54Z"
lastCommitAt: "2026-08-28T12:24:13Z"
lastReleaseAt: "2026-08-26T05:24:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["devhaemin", "yuni-musibe", "team-musibe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0e951c641f0e97b618480aaa6a7f35a41dd00fd99149d7e288cff77d58a44f1/relayax/relayagent"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg" />
  </picture>
</p>

<h1 align="center">RelayAgent</h1>

</p>

</p>

RelayAgent is a personal substrate for agent packages that ship their own screens.

Agents are probabilistic. Collaboration is not. Every agent runtime today hands you a chat box, and a chat box has no surface a human can inspect, verify, or take over mid-flight. A package here ships a screen you can operate and verbs you can replay, judged by one manifest, so the same layer works for both the person and the agent.

One package = one agent + its screen. Installing one gives you software, not a chat window. The view is versioned as one body with its agent, judged by the same manifest, built at install, and hosted by the daemon at `/pkg/<name>/view/`. Chat and channels are just additional doors into that software.

One package is one directory. A single manifest (`relay.yaml`) declares everything the package is: its agents, verbs, screens, channels, services, triggers, and what it must not touch. The substrate reads nothing outside the manifest, installs fail-loud, keeps credentials in a vault, and records every inter-package…
