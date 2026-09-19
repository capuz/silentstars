---
repo: "rar-file/claude-rpc"
name: "claude-rpc"
description: "Discord Rich Presence (RPC) for Claude Code — live model, project, tokens, and lifetime stats in your Discord profile. Driven by Claude Code hooks."
readmeQualityOk: true
url: "https://github.com/rar-file/claude-rpc"
homepage: "https://claude-rpc.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [77]
topics: ["anthropic", "claude-code", "discord", "discord-rpc", "hooks", "nodejs", "rich-presence", "claude", "claude-code-hooks", "cli"]
stars: 22
forks: 3
openIssues: 1
closedIssues: 18
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-20T23:21:35Z"
lastCommitAt: "2026-09-14T02:22:18Z"
lastReleaseAt: "2026-05-22T15:50:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 48
maintainers: ["rar-file", "dependabot[bot]", "TheGamer3514"]
openGraphImageUrl: "https://opengraph.githubassets.com/cec79f582a40b79ae230df515499784527e1d1a3836a4f319ab0d530e3bbdf2f/rar-file/claude-rpc"
discussionCount: 0
---

<br/><br/>

<sub>the card's live states — <b>working</b> · <b>thinking</b> · <b>waiting</b> · <b>idle</b></sub>

<br/>

**Discord Rich Presence for [Claude Code](https://claude.com/claude-code)** — your live model, project, tokens, and lifetime stats, driven by the hooks Claude Code already fires.

**[claude-rpc.com →](https://claude-rpc.com)** — see it in one page.

<sub>live — on by default for fresh installs, opt out any time. see [community totals](#community-totals)</sub>

</div>

---

</div>

A small Node daemon that takes the lifecycle events Claude Code already fires and pipes them into the Discord rich-presence card on your profile. Your friends see what you're building; your future self gets lifetime stats. Built solo, on weekends.

## install

**macOS / Linux / any Node 18+** — one command:

```sh
npx claude-rpc@latest setup
```

(The `@latest` matters — bare `npx claude-rpc` will happily reuse a stale cached copy.)

That installs `claude-rpc` globally, wires the hooks into Claude Code, and starts the daemon — no separate `start` step. Open Claude Code in any project and the card appears within a second. Something looks wrong? `claude-rpc doctor` (or `claude-rpc doctor…
