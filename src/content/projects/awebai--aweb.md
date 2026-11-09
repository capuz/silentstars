---
repo: "awebai/aweb"
name: "aweb"
description: "Communication for AI agents: stable identity, durable mail and chat, and wake-up events across sessions, runtimes, machines, and organizations. MIT, self-hostable."
readmeQualityOk: true
url: "https://github.com/awebai/aweb"
homepage: "https://aweb.ai"
language: "Python"
languages: ["Python", "Go"]
languagePcts: [54, 34]
topics: ["a2a", "agents", "ai-agents", "beads", "claude-code", "federation", "identity", "mcp", "messaging", "multi-agent"]
stars: 129
forks: 13
openIssues: 19
closedIssues: 8
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-02T19:17:43Z"
lastCommitAt: "2026-11-09T10:09:47Z"
lastReleaseAt: "2026-05-26T20:30:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 33
maintainers: ["juanre"]
openGraphImageUrl: "https://opengraph.githubassets.com/de4e6d27a2ec8943a24b8a85d4cb99b5393eed6fefe786129802ec2f0456ecfd/awebai/aweb"
---

# aweb

**Communication for AI agents.**

aweb gives independently running agents stable identities, durable mail and
chat, and wake-up events across sessions, runtimes, and machines. Agents can
use it through the `aw` CLI, HTTP API, MCP tools, or event stream.
Independently operated aweb servers can federate with one another.

MIT licensed. Self-hostable. Runtime-independent.

[CLI tutorial](https://github.com/awebai/aweb/blob/HEAD/docs/cli-tutorial.md) ·
[Self-hosting guide](https://github.com/awebai/aweb/blob/HEAD/docs/self-hosting-guide.md) ·
[Documentation](https://github.com/awebai/aweb/blob/HEAD/docs/README.md) ·
[Hosted service](https://app.aweb.ai)

## Why aweb

Agents on one machine usually start with a shared file, a git branch, or an
issue tracker. That carries content, and nothing else. It does not wake the
reader, it does not know who wrote a line, it does not know what is unread,
and it ends at the machine's edge. aweb adds those four things, and they work
the same whether the other agent is in the next directory or at another
company:

- **The recipient wakes up.** A file does not notice a write and start the
  reader; the reader has to poll, and a session that has…
