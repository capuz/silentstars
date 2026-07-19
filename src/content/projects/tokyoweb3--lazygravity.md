---
repo: "tokyoweb3/LazyGravity"
name: "LazyGravity"
description: "LazyGravity is a local, secure Discord Bot that lets you remotely operate Antigravity on your home PC — from your smartphone's Discord app, anywhere."
readmeQualityOk: true
url: "https://github.com/tokyoweb3/LazyGravity"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "antigravity", "antigravity-ide", "discord", "discord-bot", "telegram"]
stars: 228
forks: 37
openIssues: 18
closedIssues: 46
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2026-02-23T11:30:59Z"
lastCommitAt: "2026-07-19T06:11:26Z"
lastReleaseAt: "2026-04-11T23:56:32Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 89
undervaluedScore: 26
maintainers: ["dependabot[bot]", "tokyoweb3", "dgomez407"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4523e15dd7e4a5e12b47960077a1eba2495d106ab15a40ae92a8e1858e4e31b/tokyoweb3/LazyGravity"
discussionCount: 1
---

</p>

</p>

# LazyGravity

**LazyGravity** is a local, secure bot that lets you remotely operate [Antigravity](https://antigravity.dev) on your home PC — from your smartphone, anywhere. Supports **Discord** and **Telegram** (optional).

Send natural language instructions like "fix that bug" or "start designing the new feature" from your phone. Antigravity executes them locally on your home PC using its full resources, and reports results back to your chat platform.

https://github.com/user-attachments/assets/08eac63e-5ede-469b-ac6c-1c40ec77b0c0

## Quick Setup

Runtime: **Node >= 18**.

```bash
npm install -g lazy-gravity
lazy-gravity setup
```

The interactive wizard walks you through Discord bot creation, token setup, and workspace configuration. When done:

```bash
lazy-gravity open     # Launch Antigravity with CDP enabled
lazy-gravity start    # Start the bot (Discord by default, or both platforms)
```

Or run directly without installing:

```bash
npx lazy-gravity
```

---

## Features

1. **Fully Local & Secure**
   - **No external server or port exposure** — runs as a local process on your PC, communicating directly with Discord/Telegram.
   - **Whitelist access control**:…
