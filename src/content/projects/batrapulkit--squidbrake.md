---
repo: "batrapulkit/squidbrake"
name: "squidbrake"
description: "Brakes for your AI agents: every tool call is checked against your rules, held for human approval when risky, and recorded in a tamper-evident audit trail. Works with Claude Code and any MCP app."
readmeQualityOk: true
url: "https://github.com/batrapulkit/squidbrake"
homepage: "https://squidbrake.com"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [73, 23]
topics: ["agent-security", "ai-agents", "ai-safety", "approval-workflow", "audit-log", "claude-code", "fastapi", "guardrails", "human-in-the-loop", "llm-security"]
stars: 11
forks: 11
openIssues: 28
closedIssues: 14
watchers: 0
contributors: 11
recentReleases: 10
createdAt: "2026-09-29T12:56:42Z"
lastCommitAt: "2026-10-04T10:01:31Z"
lastReleaseAt: "2026-10-01T16:05:06Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 66
maintainers: ["batrapulkit", "AtharvRG", "i-sayankh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1395292991/9acbb6a1-ebd3-434b-ac51-940a1c4766b9"
discussionCount: 0
---

# Squidbrake

**Change control for AI agents.** Every action an agent takes (running a command, editing a file, sending an
email, issuing a refund, changing a database) goes through Squidbrake first. It is **checked** against your
team's rules, **held for someone else to approve** when it's risky, **recorded** in a tamper-evident audit trail
your auditor can check, and can be **stopped** instantly. One policy for Claude Code, Cursor, Codex, Gemini CLI,
VS Code Copilot, Antigravity and your MCP tools.

Free and open source (Apache 2.0). Runs on your laptop or your own server; your data never leaves it.

- **Rules, not vibes:** `rules.yaml` says what runs by itself, what's blocked, and what waits for a person.
  No LLM in the decision path.
- **Human approval:** risky actions wait in the dashboard, on your phone (one-tap links, push via ntfy) or in Slack.
  The approver sees *what led to it*, e.g. the email the agent just read.
- **Reads what a command really does:** `ls && rm -rf ~/`, `bash -c "..."`, `rmdir /s /q d:\` or `curl ... | sh` are
  split and read before they run. Wiping a disk or home folder is blocked; `git push --force`, `terraform destroy`,
  `kubectl delete` or…
