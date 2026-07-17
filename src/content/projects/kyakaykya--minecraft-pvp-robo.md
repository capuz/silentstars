---
repo: "KyaKayKya/Minecraft-PVP-ROBO"
name: "Minecraft-PVP-ROBO"
description: "PVP ROBO is a windows-first, no-render minecraft PvP reinforcement-learning environment"
readmeQualityOk: true
url: "https://github.com/KyaKayKya/Minecraft-PVP-ROBO"
language: "Python"
languages: ["Python", "Java"]
languagePcts: [46, 31]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-10T07:07:59Z"
lastCommitAt: "2026-07-17T05:57:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 16
maintainers: ["KyaKayKya"]
openGraphImageUrl: "https://opengraph.githubassets.com/b692c39ed6e5c83c3fc93152600b9a727d82105de765a913d8047a2d97391ada/KyaKayKya/Minecraft-PVP-ROBO"
---

# PVP ROBO

</p>

  <strong>A Windows-first, no-render Minecraft PvP reinforcement-learning environment.</strong>
</p>

</p>

PVP ROBO is an open research stack for training and evaluating Minecraft PvP agents on private local servers. It connects a headless PaperMC server, a custom Paper plugin, Mineflayer-controlled bots, and a Gymnasium-compatible Python environment through persistent localhost protocols.

The project is built for efficiency and reproducibility: structured observations, flat `np.float32` vectors, integer action arrays, in-place episode reset, mock-first tests, and Windows PowerShell scripts for setup, training, evaluation, and smoke runs.

This repository is for private local/offline research servers only. Do not use it for public-server cheating, anticheat bypassing, stealth automation, or evasion.

## What Is Inside

```text
server-plugin/        Paper plugin for privileged state, arena reset, and episode control
bot-controller/       Mineflayer headless bot controller
python/               Gymnasium env, protocols, BC/PPO tooling, evaluation, and tests
scripts/              Windows PowerShell setup, build, run, train, and eval tools
configs/…
