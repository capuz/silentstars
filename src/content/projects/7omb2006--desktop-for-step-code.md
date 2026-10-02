---
repo: "7oMB2006/desktop-for-step-code"
name: "desktop-for-step-code"
description: "Community Windows desktop client for Step Code"
readmeQualityOk: true
url: "https://github.com/7oMB2006/desktop-for-step-code"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [50, 43]
stars: 7
forks: 1
openIssues: 6
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-09-25T10:14:18Z"
lastCommitAt: "2026-10-02T09:59:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 40
maintainers: ["7oMB2006", "ZiY1Ming"]
openGraphImageUrl: "https://opengraph.githubassets.com/94941fadd035fc222e276908cb10241bac968c4df3fbf3b9b088be16994d6386/7oMB2006/desktop-for-step-code"
---

</p>
<br>
</p>
<hr>
</p>

A Windows desktop client for Step Code. It provides desktop workspaces, conversations, and session management; Step Code powers agent execution.

### Why This Project

The original idea was to explore a community-built desktop client for Step Code while no official Step Code desktop app has been released. Given my love for StepFun, I also look forward to its official release.

### Features

- Streaming conversations, model and thinking-level selection
- Independent sessions and project workspaces, with session history and renaming
- Image attachments, tool-call confirmations, and recoverable session deletion
- Step account sign-in, MCP configuration, and resource discovery
- Chinese and English UI, with light and dark themes

The app keeps its data in a dedicated directory (`%APPDATA%\Desktop for Step Code`) instead of reusing a personal Step Code CLI profile. Agent execution stays with Step Code; this project does not add another harness.

Step login credentials are encrypted for the current Windows user in `step-runtime/auth.dpapi`. Existing desktop `auth.json` data is migrated on startup, and the plaintext file is removed after the encrypted copy is…
