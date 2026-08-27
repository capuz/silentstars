---
repo: "sprintberlin/openclaw-cliq"
name: "openclaw-cliq"
description: "SprintCX OpenClaw Channel Plugin for Zoho Cliq — bot-per-agent, markdown conversion, streaming, multi-message chunking, group chat support"
readmeQualityOk: true
url: "https://github.com/sprintberlin/openclaw-cliq"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 8
forks: 0
openIssues: 7
closedIssues: 117
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-04T12:22:00Z"
lastCommitAt: "2026-08-27T14:32:39Z"
lastReleaseAt: "2026-08-20T10:30:25Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 59
maintainers: ["aidercx", "martinalbrecht-berlin", "sprintberlin"]
openGraphImageUrl: "https://opengraph.githubassets.com/004801700c87ed3f2b332385ec4158ceb7abdceda1048de3f8f5e5c99200648c/sprintberlin/openclaw-cliq"
---

</p>

<h1 align="center">Zoho Cliq Channel for OpenClaw</h1>

  Connect your OpenClaw agent to <a href="https://www.zoho.com/cliq/"><b>Zoho Cliq</b></a> —
  reply to DMs and channel @mentions as a native bot, with streaming previews,
  cards, buttons, and message actions.
</p>

  <code>openclaw plugins install clawhub:@sprintcx/openclaw-cliq</code>
</p>

  <b>Public open-source repository:</b>
</p>

  <b>Channel plugin</b> · OAuth 2.0 · multi-data-center · MIT · verified live on a real gateway
</p>

---

## ⚡ Quick start

Get a bot answering **DMs** in four steps (channel @mention replies add one OAuth step — see [Setup guide](#setup-guide) below):

1. **Create a Cliq bot** — Zoho Cliq → *Bots* → *Create Bot*. Note the **Bot Unique Name** (`botId`, not the internal `b-...` bot ID) and display name.
2. **Get OAuth credentials** — [Zoho API Console](https://api-console.zoho.com) ([use your data center's domain](#data-centers)) → *Self Client* → note **Client ID** + **Client Secret**.
3. **Install & configure**
   ```bash
   openclaw plugins install clawhub:@sprintcx/openclaw-cliq
   openclaw setup            # pick "Zoho Cliq" — the wizard writes the account config
   ```
4. **Wire…
