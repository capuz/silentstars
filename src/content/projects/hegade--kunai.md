---
repo: "HEGADE/kunai"
name: "kunai"
description: "Turns any machine you own into a Claude Code server. Sessions keep running after you close the app, and one phone app drives every machine and account."
readmeQualityOk: true
url: "https://github.com/HEGADE/kunai"
language: "Go"
languages: ["Go", "Svelte"]
languagePcts: [64, 22]
topics: ["claude-code-claude-anthropic-tailscale", "golang-svelte-mobile-remote-development", "self-hosted-ai-agent-coding-agent-pwa"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-10T17:02:00Z"
lastCommitAt: "2026-10-13T10:58:33Z"
lastReleaseAt: "2026-07-13T19:36:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 44
maintainers: ["HEGADE", "shorya-kashyap"]
openGraphImageUrl: "https://opengraph.githubassets.com/e26f1aca4e559c29a1c488c32715c3bfa20e80686503510744cb1b5201022234/HEGADE/kunai"
---

# Kunai

**Turns any machine you own into a Claude Code server.**

Sessions live on your hardware instead of in a terminal, so they keep working
after you close the app. One installable phone app drives every machine and every
Claude account you have, directly over your own Tailscale network.

You are on the bus. You open the app, pick your desk machine, and ask it to fix
the test that was failing when you left. Then you lock your phone. It buzzes when
the turn is done and tells you what it cost.

That is the whole idea. You install one Go binary on each machine you work on,
and your Linux box and your Mac then sit side by side in the same app. Nothing is
proxied through a server in the middle, so your code never leaves hardware you
own. The only thing that crosses the tailnet boundary is a push notification, and
it carries none of your conversation.

---

## New in 1.5

**Several agents on one repository.** Start a session in a git worktree and it
gets its own checkout, on its own branch, sharing one object store. Three agents
can work on the same codebase at once without touching each other's files, and
none of them can derail the branch you have checked out. The agent is told…
