---
repo: "IvoryHeart/herdr-world"
name: "herdr-world"
description: "Herdr World — visualize agent work in Office, Tree, Graph, and Spaces; control Herdr agents across local and SSH hosts."
readmeQualityOk: true
url: "https://github.com/IvoryHeart/herdr-world"
homepage: "https://herdr.world/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["herdr", "multi-agent", "herdr-plugin", "agent-runtime", "agent-visualization", "coding-agents", "harness", "harness-engineering"]
stars: 71
forks: 7
openIssues: 104
closedIssues: 384
watchers: 1
contributors: 23
recentReleases: 10
createdAt: "2026-08-25T22:30:05Z"
lastCommitAt: "2026-11-22T02:03:46Z"
lastReleaseAt: "2026-10-02T15:22:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 41
maintainers: ["IvoryHeart", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1346683112/e5afbbd2-0afc-4f0a-88fb-d737fc94c28a"
discussionCount: 2
---

# Herdr World

See your coding agents, answer their questions and review their work from a
browser or phone. World connects to local and SSH hosts and shows them together.

## Runtimes

World works with the **Herdr TUI**, **herdr-core**, or both on one computer.
**herdr-core is primary when installed and connected**: new agents use it unless
you choose a Herdr TUI room. World discovers both on each host; each runtime keeps
its own connection identity for safe operations.

- **herdr-core:** install it with the [official instructions](https://github.com/herdrdev/herdr-core)
  or World's setup below. With core already running and no Herdr TUI, World's
  first run connects to it automatically and makes it the default. With both
  installed, World finds both. Add another host with
  `herdr-world connections add you@host.example`, or use the existing runtime
  controls in **Hosts → Manage connections → Add herdr-core**. Choose **This computer**, **A Unix host over SSH** or
  **A Windows host over SSH** and connect. Keep session **default** unless you changed
  `HC_SESSION`.
