---
repo: "dsnger/dev-workflow-kit"
name: "dev-workflow-kit"
description: "Claude Code plugin: spec-driven agentic coding with cross-model review gates (Claude builds, Codex reviews), a self-hardening findings ledger, and repo-enforced quality."
readmeQualityOk: true
url: "https://github.com/dsnger/dev-workflow-kit"
language: "Shell"
languages: ["Shell"]
languagePcts: [77]
topics: ["ai-agents", "claude-code", "code-quality", "code-review", "developer-tools"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-12T12:05:22Z"
lastCommitAt: "2026-10-19T09:14:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 50
maintainers: ["dsnger"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7d6049d5118af544c9d543aba867565ce066c5c57c67acc8092db1083c86db4/dsnger/dev-workflow-kit"
---

# dev-workflow-kit

A Claude Code plugin, `dev-workflow`, for building software with coding agents. A second
model (Codex) reviews the design before code exists and the diff before it lands.

## Quickstart

You need git, Claude Code 2.1.212 or newer, Node with `npx`, and the Codex CLI logged
in ([`docs/setup.md`](https://github.com/dsnger/dev-workflow-kit/blob/HEAD/docs/setup.md)).

**1. Install superpowers.**

Do:
```sh
claude plugin marketplace add obra/superpowers-marketplace
claude plugin install superpowers@superpowers-marketplace
```

You see: no error.

**2. Install this plugin.**

Do:
```sh
claude plugin marketplace add dsnger/dev-workflow-kit
claude plugin install dev-workflow@dev-workflow-kit
```

You see: a new Claude Code session offers `/dev-workflow:workflow-init`.

**3. Keep review calls in the foreground.**

Do: in the shell you start Claude Code from, `export CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS=0`, then restart Claude Code.

You see: `echo $CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS` prints `0`.

**4. Set up your project.**

Do: in Claude Code at the project root, type `/dev-workflow:workflow-init`. When it asks to set up Codex now, say "not now".

You see: a status block,…
