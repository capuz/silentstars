---
repo: "x10lab/xpair"
name: "xpair"
description: "Run Claude Code as a worker on a dedicated Mac. It keeps working after you close your laptop."
url: "https://github.com/x10lab/xpair"
homepage: "https://x10lab.ai/xpair?utm_source=github&utm_medium=repository_detail"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [27, 24]
topics: ["agent", "claude-code", "remote-control"]
stars: 31
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 40
recentReleases: 10
createdAt: "2026-06-02T13:47:44Z"
lastCommitAt: "2026-06-27T00:51:29Z"
lastReleaseAt: "2026-06-12T11:10:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 45
maintainers: ["ghyeongl", "maxswjeon"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c2a2ddd8844a5a055b73b104ecbe0bf910997f7af2413d92620bc08204b1661/x10lab/xpair"
---

</p>

<h1 align="center">Xpair</h1>

Run the agent you already subscribe to — **Claude**, **Codex**, or **OpenCode** — on an always-on Mac, with full macOS **computer-use** (screenshot, click, type) intact, and attach to it from your laptop or phone over mosh/SSH. Your work keeps running while you're away; you bring your own subscription, so there are no extra AI credits.

</p>

- **Host Mac** — runs your agent inside persistent tmux sessions, 24/7, with computer-use working.
- **Client** — **Xpair**, the desktop app (a VSCodium-based fork), or the `xpair` CLI; attach with a Finder right-click.
- **Mobile** — reach the same sessions from any SSH/mosh client, including Claude Code on your phone.

---

## Quick start — let Claude Code install it

Already have Claude Code? Paste the block below into a session **on the Mac you're setting up** and it drives the whole install end-to-end — figuring out the role, installing, wiring SSH, and walking you through the one manual permission step.

```text
Set up Xpair (https://github.com/x10lab/xpair) on this Mac. Fetch and read its README, then follow it. Figure out whether this Mac is the host or the client, explain each command before you…
