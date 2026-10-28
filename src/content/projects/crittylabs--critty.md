---
repo: "crittylabs/critty"
name: "critty"
description: "Terminal UI for code reviews, choices, and approvals with coding agents"
readmeQualityOk: true
url: "https://github.com/crittylabs/critty"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["ai-agents", "claude-code", "code-review", "codex", "go", "terminal", "tmux", "tui", "herdr"]
stars: 104
forks: 17
openIssues: 5
closedIssues: 13
watchers: 1
contributors: 7
recentReleases: 6
createdAt: "2026-03-08T04:03:52Z"
lastCommitAt: "2026-10-28T09:56:26Z"
lastReleaseAt: "2026-10-14T08:38:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 39
maintainers: ["knu", "mergify[bot]", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1175711121/ffa55a7a-ae9e-448b-81d5-6840f4eeb419"
discussionCount: 0
---

# Critty

Review changes, refine documents, make choices, and approve actions with your agent in the terminal.

You can review a diff, file, or document on its own.  Your agent can also attach a document asking for your permission or a decision.  You can agree in advance on which actions need your approval, such as pushing code or deploying.

When your agent needs your input, it prepares the request and opens a review in Critty.  Comment on individual lines, answer questions, confirm details, or authorize actions.  Your comments and answers go back to the agent.

If you chat with your agent in a terminal multiplexer, such as tmux, Herdr, or cmux, the review opens in a pane or tab alongside the chat.  Review the request, send your feedback, and return to the conversation while your agent handles the next step.  This works with both TUI and GUI multiplexers; without one, Critty opens a new terminal emulator window when available.  Local desktop reviews prefer terminals with image previews and try other available terminals if needed.  A failed attempt to identify the invoking pane can still fall back to a desktop or custom launcher; your configured launcher order takes precedence.…
