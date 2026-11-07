---
repo: "ouli-1242/dsh-plugin-tool-management"
name: "dsh-plugin-tool-management"
description: "One settings panel managing MCP, skills, memory, subagents, prompts and sessions; customize scene combos to switch the whole environment; the Agent can also operate this plugin for you."
originalDescription: "一个设置面板，统一管理 MCP、技能、记忆、子智能体、提示词和归档会话；可自定义搭配场景，一个场景即可切换整个环境；Agent也能帮你操作这个插件。 | One settings panel managing MCP, skills, memory, subagents, prompts and sessions; customize scene combos to switch the whole environment; the Agent can also operate this plugin for you."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ouli-1242/dsh-plugin-tool-management"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 38]
topics: ["dsh-plugin", "dsh", "deepseek-harness", "agent-tools", "configuration", "mcp", "plugin", "typescript"]
stars: 43
forks: 5
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-09-12T05:29:48Z"
lastCommitAt: "2026-11-07T10:36:14Z"
lastReleaseAt: "2026-10-15T17:33:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 44
maintainers: ["ouli-1242", "wake1999"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb9c1801489736b03cbde9fd95634c700fc7455d3396eda3313f0efd1c0791ca/ouli-1242/dsh-plugin-tool-management"
---

MCP, skills, subagents, prompts, memory, and archived sessions in DeepSeek Harness are all managed in one panel. Combine them into a set, and that set is a **scene**. Click once to switch the whole set, and exiting restores the snapshot.

```sh
dsh plugin --profile web add dsh-plugin-tool-management@latest      # Browser version
dsh plugin --profile desktop add dsh-plugin-tool-management@latest  # Desktop version
```

After installing, do a hard refresh in the browser (Cmd/Ctrl+Shift+R) or restart the desktop app, then open **Settings → Tool Management**. For the desktop version, open the app once and fully quit it before running the command. If the installed version isn't the latest, it's likely mirror lag or pnpm's `minimumReleaseAge`. Use an exact version number (`@0.X.X`) to get around it.

---

## Core Highlights

## Demo

The player won't start (login state is occasionally blocked by the browser's CSP)? [Watch the same file directly](https://github.com/user-attachments/assets/ff3111c3-4228-45b7-9e28-b85dc60fb6b3).

Every interface in the video is a real device screenshot. No UI was redrawn.

Background music: Kevin MacLeod, "Limit 70", [CC BY…
