---
repo: "reswitched/robocop-ng"
name: "robocop-ng"
description: "Discord bot for handling ReSwitched moderation tasks and such, (n)ext-(g)en rewrite of Robocop"
readmeQualityOk: true
url: "https://github.com/reswitched/robocop-ng"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 61
openIssues: 8
closedIssues: 15
watchers: 9
contributors: 24
recentReleases: 0
createdAt: "2018-12-23T12:42:10Z"
lastCommitAt: "2026-10-24T08:20:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 72
undervaluedScore: 47
maintainers: ["aveao", "TSRBerry"]
openGraphImageUrl: "https://opengraph.githubassets.com/47299c6f65d21f5e44c71406b9b4ae3a02c315bbf62260aba7df6768594b311b/reswitched/robocop-ng"
---

# robocop-ng

Next-gen rewrite of Kurisu/Robocop bot used on ReSwitched bot with discord.py rewrite. Very lightly maintained (as of ~2025).

Code is based on https://gitlab.com/a/dpybotbase and https://github.com/916253/Kurisu-Reswitched.

---

## How to run

- Copy `robocop_ng/config_template.py` to `robocop_ng/config.py`, configure all necessary parts to your server.
- Robocop-NG now uses **slash commands** and works without the privileged
  message-content intent. Configure intents in `config.py`:
  - `intent_message_content` (default `False`): enable only if you are under Discord's privileged intent user limit and want the optional message-scanning features (logs filter, Yubikey OTP scrubbing, and message lists). With it off, those features are inert but everything else works.
  - `intent_members` (default `True`): required for join/leave logging and member lookups. Suggested to leave on unless you specifically cannot enable it. With it off, role changes made through bot commands are still logged, and mutes of users who leave and rejoin are reapplied when they `/verify` again.
- Slash commands are synced automatically to the guilds in `guild_whitelist` on startup. If you…
