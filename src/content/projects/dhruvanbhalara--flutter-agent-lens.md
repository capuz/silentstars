---
repo: "dhruvanbhalara/flutter_agent_lens"
name: "flutter_agent_lens"
description: "Agent-first Model Context Protocol (MCP) server to debug, profile, and optimize running Flutter apps. Connects AI assistants to Dart VM Service over WebSockets for direct access to widget trees, memory snapshots, network traffic, stateful CPU profiling, and layout diffing."
readmeQualityOk: true
url: "https://github.com/dhruvanbhalara/flutter_agent_lens"
homepage: "https://pub.dev/packages/flutter_agent_lens"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
stars: 41
forks: 4
openIssues: 6
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-05-30T12:41:05Z"
lastCommitAt: "2026-07-25T06:02:18Z"
lastReleaseAt: "2026-06-29T04:21:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 33
maintainers: ["dhruvanbhalara"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2bc55615a8511f26498e64fd14c795b281f4ea389d43c6b5193df0aefaa18ad/dhruvanbhalara/flutter_agent_lens"
---

# Flutter Agent Lens MCP Server

A Model Context Protocol (MCP) server that connects AI assistants to running Flutter applications. It communicates with the Dart VM Service over WebSockets, giving AI tools direct access to application state, performance data, layout constraints, and console logs.

---

## Features

AI assistants (such as Claude or Copilot) can inspect, profile, and debug any Flutter application running in debug or profile mode. You can use this server to:
- Track widget rebuild frequencies.
- Diagnose rendering bottlenecks and frame jank.
- Analyze CPU usage and execution hotspots.
- Audit memory usage and find retaining paths that cause memory leaks.
- Capture console, stdout, stderr, and logging streams.
- Read local build sizes to locate heavy packages and assets.
- Validate App Links and Universal Links configurations.
- Drive scroll behaviors and trigger hot reloads.

---

## Setup

### 1. Install the CLI
Activate the package globally to register the `flutter-agent-lens` binary:
```bash
dart pub global activate flutter_agent_lens
```
*Make sure your global pub cache bin directory is in your system PATH.*

### 2. Configure the MCP Client

#### Claude Desktop…
