---
repo: "Szotasz/marveen"
name: "marveen"
description: "AI csapatod, ami fut amíg te alszol."
readmeQualityOk: true
url: "https://github.com/Szotasz/marveen"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [67]
topics: ["agent-harness", "ai-agents", "ai-assistant", "claude-code", "multi-agent", "self-hosted", "slack-bot", "telegram-bot", "typescript"]
stars: 123
forks: 166
openIssues: 75
closedIssues: 81
watchers: 3
contributors: 120
recentReleases: 0
createdAt: "2026-04-08T11:00:40Z"
lastCommitAt: "2026-10-25T09:00:37Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 37
maintainers: ["kovacsistvanpeter-stack", "Szotasz", "ahimkonkoly"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f43e09c45897c44fa52937d3c6fb7c317ae9ea72653940b9e3788411ce01af0/Szotasz/marveen"
---

# Marveen

> AI csapatod, ami fut amíg te alszol.

Marveen egy AI asszisztens keretrendszer, ami Claude Code-ra épül. Saját AI csapatot építhetsz, akik Telegramon, Slacken vagy Discordon kommunikálnak veled, önállóan dolgoznak, és egymással is együttműködnek.

Marveen is a self-hostable **agent harness** for Claude Code: it runs a team of AI agents, each with its own chat channel (Telegram, Slack or Discord), persistent memory, scheduled tasks, and MCP tools, lets them delegate work to one another, and gives you a web dashboard to watch and steer them.

## Funkciók

- **AI Csapat**: Több ágens, mindegyik saját csatornával (Telegram, Slack vagy Discord), személyiséggel és memóriával
- **Mission Control**: Web dashboard (http://localhost:3420) a csapat kezeléséhez
- **Inter-agent kommunikáció**: Az ágensek delegálhatnak egymásnak feladatokat
- **Ütemezések**: Cron-alapú feladatok automatikus futtatása
- **Kanban**: Feladattábla AI auto-bontással; Jira-szerű nézetek — swimlane (csoportosítás felelős vagy prioritás szerint), oszloponkénti WIP-limit, beakadt-kártya jelzés (card-aging), alfeladat-beágyazás és kártya-szerkesztő
- **Heartbeat**: Csendes háttér-monitorozás, csak fontosnál…
