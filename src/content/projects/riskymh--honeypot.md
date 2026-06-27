---
repo: "RiskyMH/honeypot"
name: "honeypot"
description: "🍯 A Discord bot to automatically catch and ban spam bots by monitoring a dedicated \"honeypot\" channel."
url: "https://github.com/RiskyMH/honeypot"
homepage: "https://honeypot.riskymh.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["bun", "discord-bot", "honeypot", "bot", "free", "spam"]
stars: 129
forks: 9
openIssues: 3
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-12-15T13:50:24Z"
lastCommitAt: "2026-06-27T06:22:12Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 29
maintainers: ["RiskyMH"]
openGraphImageUrl: "https://opengraph.githubassets.com/024ea7c8279f71b9a60a030c677672c6a7254872ed3d837da9946af572f5eb43/RiskyMH/honeypot"
fundingLinks: ["GITHUB:https://github.com/RiskyMH"]
---

<h1 align="center">
  </a>
  <br>
  Honeypot Discord Bot
</h1>

> A Discord bot to automatically catch and remove spam bots by monitoring a dedicated "#honeypot" channel.

## Usage

1. [**Invite the bot**](https://discord.com/oauth2/authorize?client_id=1450060292716494940) to your server with appropriate permissions (Ban Members, Manage Channels, etc).
2. The bot will create a `#honeypot` channel on join, or you can set it up with `/honeypot`.
3. Configure the admin log channel and action (kick or ban) using the `/honeypot` command.
4. Ensure the bot’s highest role is above any self-assignable (color/ping) roles.
5. Any user posting in the honeypot channel will be banned or removed, and the action will be logged.
> [**ⓘ**](https://honeypot.riskymh.dev/docs/setup-guide) **Note:** Kick is default and is a softban (bans & unbans) so Discord deletes their immediate messages 

<details>
<summary><strong>Extra info</strong></summary>
  
### Why use a Honeypot Bot?

Spammers and compromised accounts often target all channels at once, especially from accounts already inside your server. This bot makes it easy to automatically spot and remove these accounts. When someone posts in the…
