---
repo: "confusedalex/GoldEconomy"
name: "GoldEconomy"
description: "A simple gold based Economy plugin that just works"
readmeQualityOk: true
url: "https://github.com/confusedalex/GoldEconomy"
homepage: "https://confusedalex.dev/projects/goldeconomy/"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [55, 45]
topics: ["minecraft", "minecraft-plugin", "spigot", "hacktoberfest", "vaultapi", "modrinth"]
stars: 12
forks: 17
openIssues: 9
closedIssues: 47
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2022-05-21T15:22:20Z"
lastCommitAt: "2026-09-18T08:26:16Z"
lastReleaseAt: "2024-10-03T16:56:50Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 86
maintainers: ["confusedalex", "renovate[bot]", "imide"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/494820093/78f49f28-bab5-4188-bcec-ff8caf689c15"
fundingLinks: ["GITHUB:https://github.com/confusedalex"]
---

## Introduction

TheGoldEconomy is a powerful economy plugin that allows servers to
manage their gold-based currency through a bank system. Players can
deposit and withdraw gold and send money to each other. With support
for both gold nuggets, ingots and raw gold this plugin is designed to
be lightweight, easy to configure, and fully compatible with popular
plugins like Vault and Towny.

## Features

- Different gold translation modes
  - Nugget Mode: 1 Nugget = 1$
  - Ingot Mode: 1 Ingot = 1$
  - Raw Gold Mode: 1 Raw Gold = 1$
- Extensive plugin comatability
  - Vault support to work with other plugins
  - PlaceholderAPI
  - Towny bank plots
- Option to completly remove gold drops from mobs
- Many languages included
- No database required

## Dependencies

-  **[Vault](https://www.spigotmc.org/resources/vault.34315/)**

## Additional Information

<details>
  <summary>Commands</summary>

### Player

- **/bank balance | /balance | /bal**  
  Displays your current bank balance (e.g, `/bank balance`).
- **/bank balance <player>**  
  Shows the balance of the specified player (e.g., `/bank balance Steve`).
- **/bank deposit <gold>**  
  Deposits the specified amount of gold from your…
