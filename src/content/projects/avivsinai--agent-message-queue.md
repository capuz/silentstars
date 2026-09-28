---
repo: "avivsinai/agent-message-queue"
name: "agent-message-queue"
description: "File-based message queue for local agent-to-agent communication (Maildir-style)"
readmeQualityOk: true
url: "https://github.com/avivsinai/agent-message-queue"
homepage: "https://github.com/avivsinai/agent-message-queue"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["agents", "ai-agents", "cli", "developer-tools", "golang", "inter-process-communication", "maildir", "message-queue", "agent-skills", "claude-code"]
stars: 87
forks: 13
openIssues: 1
closedIssues: 98
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2025-12-25T07:18:14Z"
lastCommitAt: "2026-09-28T10:06:47Z"
lastReleaseAt: "2025-12-27T20:37:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 43
maintainers: ["avivsinai", "dependabot[bot]", "est7"]
openGraphImageUrl: "https://opengraph.githubassets.com/f74a94aa38e3a7900395470583767299a1c143973eceb18affaf2598a6f5c123/avivsinai/agent-message-queue"
discussionCount: 2
---

# Agent Message Queue (AMQ)

**Messaging between coding agents.**

AMQ lets two coding agents exchange messages through a shared directory.
One agent asks for a review; the other reads the message and replies in the
same thread. Messages are plain files, so the local queue needs no messaging
server or database—and you do not have to relay each request yourself.

Try the queue in a fresh shell on macOS. This example uses two mailbox names;
it does not start agents. [Other installation methods →](https://github.com/avivsinai/agent-message-queue/blob/HEAD/INSTALL.md)

```bash
brew install avivsinai/tap/amq
amq init --root .agent-mail/demo --agents alice,bob  # Create two mailboxes for demo.
amq send --root .agent-mail/demo --me alice --to bob --body "Please review the parser."
amq drain --root .agent-mail/demo --me bob --include-body
```

- **Keep the conversation together.** Reply in threads, attach context, and
  route messages between sessions or projects.
- **Know what happened to a message.** Receipts distinguish a queued message
  from one the recipient drained.
- **Bring your own agents.** Use the CLI from agent tools or scripts;
  optional wake notifications prompt running…
