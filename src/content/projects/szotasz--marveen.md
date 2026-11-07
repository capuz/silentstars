---
repo: "Szotasz/marveen"
name: "marveen"
description: "AI csapatod, ami fut amíg te alszol."
readmeQualityOk: true
url: "https://github.com/Szotasz/marveen"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [66]
topics: ["agent-harness", "ai-agents", "ai-assistant", "claude-code", "multi-agent", "self-hosted", "slack-bot", "telegram-bot", "typescript"]
stars: 130
forks: 172
openIssues: 92
closedIssues: 104
watchers: 4
contributors: 125
recentReleases: 0
createdAt: "2026-04-08T11:00:40Z"
lastCommitAt: "2026-11-07T10:36:57Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 37
maintainers: ["Szotasz", "Marvin", "szivekf"]
openGraphImageUrl: "https://opengraph.githubassets.com/07232fba8d949b60efb0c6e92e33a7bc84a2ff71df09740d89a64dd4448702cc/Szotasz/marveen"
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
- **Kanban**: Feladattábla AI auto-bontással; Jira-szerű nézetek: swimlane (csoportosítás felelős vagy prioritás szerint), oszloponkénti WIP-limit, beakadt-kártya jelzés (card-aging), részfeladat-beágyazás és kártya-szerkesztő
- **Heartbeat**: Csendes háttér-monitorozás, csak fontosnál…
