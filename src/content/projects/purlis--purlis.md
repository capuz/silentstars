---
repo: "purlis/purlis"
name: "purlis"
description: "Git-native control plane for agentic development where engineers and coding agents work together, at scale."
readmeQualityOk: true
url: "https://github.com/purlis/purlis"
homepage: "https://purlis.com"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [70, 27]
stars: 11
forks: 2
openIssues: 870
closedIssues: 2294
watchers: 0
contributors: 5
recentReleases: 9
createdAt: "2026-09-17T12:49:42Z"
lastCommitAt: "2026-11-06T02:13:52Z"
lastReleaseAt: "2026-11-06T01:20:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 59
maintainers: ["diazoxide"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a722ddc463278246942c07046cc53fee23f43db558e3c62f1ddc379edd07fdd/purlis/purlis"
discussionCount: 0
---

# purlis

**Run many coding-agent chats in parallel, across workspaces and repos, and always know which
one needs you.**

purlis is a desktop app for people who work with coding agents all day. Claude Code, Codex and
opencode chats run side by side, each in its own tab, each in the workspace and repo it works
on. The window tells you which chat is waiting for you, so you stop checking terminals.

Everything purlis knows is in a git repository you own: your workspaces, the roles your agents
play, and what earlier chats learned. A new chat starts already knowing what the last one
learned. purlis is a Tauri app with a Rust core and a React window.

## Why purlis

- **Many agents, one window.** Chats on different harnesses and repos run at once. Each one
  reports its state through its hooks and its exit, never through purlis reading its output, so
  "needs you" means it actually needs you.
- **Memory that carries over.** Each workspace keeps a journal, its todos and its memory. Every
  chat writes a session record when it closes, and the next chat starts with what the earlier
  ones recorded.
- **Plain files in git.** Workspaces, personas, memory and settings are files in a repo.…
