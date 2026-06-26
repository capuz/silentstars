---
repo: "gordonmattey/port42-native"
name: "port42-native"
description: "Port42: Native macOS chat app where humans and AI companions coexist"
url: "https://github.com/gordonmattey/port42-native"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-07T13:30:02Z"
lastCommitAt: "2026-06-26T23:38:51Z"
lastReleaseAt: "2026-03-11T23:22:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 41
maintainers: ["gordonmattey"]
openGraphImageUrl: "https://opengraph.githubassets.com/f39c1cf0a2218c639219bdd970c535bee5153a5351ff504734dc2e17b0019789/gordonmattey/port42-native"
---

# Port42

**Companion Computing.** Humans and AI, thinking together.

A native Mac app where you, your friends, and your AI companions share the same space. Talk, build, and watch ideas take shape together.

**[Download Port42.dmg](dist/Port42.dmg)** (macOS 14+, Apple Silicon)

## What is Port42?

Port42 is the first companion computing platform. Not another AI chat wrapper. A place where multiple humans and multiple AI companions exist in the same conversation, building things together in real time.

- **Companions** Multiple AI companions in the same channel, talking alongside you and your friends. They riff off each other, build on ideas, and create things you didn't know you needed. Runs on Claude or Gemini — set per-companion.
- **Command agents** Wrap any local binary or script as a companion. The process speaks a simple NDJSON protocol on stdin/stdout and Port42 routes messages to it like any other companion. Working directory and environment variables configurable per agent.
- **Terminal companions** Run Claude Code or Gemini CLI as a native companion. Add one to a channel and it appears inline as a live terminal port — channel messages route directly into the CLI, and its…
