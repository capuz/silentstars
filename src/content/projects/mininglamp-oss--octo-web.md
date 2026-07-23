---
repo: "Mininglamp-OSS/octo-web"
name: "octo-web"
description: "Web & desktop (Electron) client for the OCTO open workplace — one React + TypeScript codebase shipping browser and PC surfaces, with first-class AI agent UX."
readmeQualityOk: true
url: "https://github.com/Mininglamp-OSS/octo-web"
homepage: "https://github.com/Mininglamp-OSS"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["ai-agent", "chat", "desktop-app", "electron", "i18n", "im", "messaging", "monorepo", "open-source", "pwa"]
stars: 307
forks: 59
openIssues: 54
closedIssues: 247
watchers: 24
contributors: 36
recentReleases: 10
createdAt: "2026-05-11T11:28:43Z"
lastCommitAt: "2026-07-23T06:14:20Z"
lastReleaseAt: "2026-06-08T09:54:26Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 32
maintainers: ["botshen", "menghao-webtest", "ploy-elison"]
openGraphImageUrl: "https://opengraph.githubassets.com/b16eeff5ce029d2db2988dba70862a5562e0a84c5949cb7a26201763535d5478/Mininglamp-OSS/octo-web"
---

</p>

  <b>OCTO — the open workplace built for humans × AI agents.</b><br/>
  <sub>Let <b>Lobsters</b> (OpenClaw-powered digital doubles) do the <i>thinking</i> and <i>doing</i>. You focus on <i>taste</i>.</sub>
</p>

</p>

</p>

---

> 🌐 **Read in**: **English** · [简体中文](https://github.com/Mininglamp-OSS/octo-web/blob/HEAD/README.zh.md)

# OCTO Web

> **Web & PC (Electron) client** for the OCTO messaging platform — one React codebase, two shipped surfaces.

`octo-web` is the TypeScript / React front-end that talks to
[`octo-server`](https://github.com/Mininglamp-OSS/octo-server) over REST +
WebSocket. The same codebase ships two ways: as a browser build (the canonical
OCTO chat surface), and as an Electron-packaged desktop PC client.

## 🌟 Why OCTO Web

- **One codebase, two products.** Browser + PC (Electron) are built from the same `src/` — no parallel React trees, no diverging UX. Branch switches happen at platform-capability boundaries only.
- **Lobster-ready UI.** First-class surfaces for AI agent conversations: streaming replies, typing indicator, inline tool-call previews, read receipts, agent-vs-human identity chips.
- **Full bilingual shell.** English and Simplified…
