---
repo: "lasharor/cleanyourtv-WebOS"
name: "cleanyourtv-WebOS"
description: "A clean home screen for rooted LG webOS TVs, with an optional debloat of LG's ads and telemetry."
readmeQualityOk: true
url: "https://github.com/lasharor/cleanyourtv-WebOS"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [58, 36]
topics: ["homescreen", "lg", "rootmytv", "webos"]
stars: 200
forks: 23
openIssues: 5
closedIssues: 22
watchers: 3
contributors: 5
recentReleases: 10
createdAt: "2026-10-21T11:43:47Z"
lastCommitAt: "2026-10-26T08:59:59Z"
lastReleaseAt: "2026-10-22T11:46:46Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 32
maintainers: ["lasharor"]
openGraphImageUrl: "https://opengraph.githubassets.com/463e1c3a1fe142a08b281b2b22f6eea35d642c71f5321d08cfedd02abd2c905b/lasharor/cleanyourtv-WebOS"
---

# CleanYourTV for LG webOS

A fast home screen for rooted LG webOS TVs, with Live TV from your own playlist, an Inputs list on the Input key,
picture notifications, optional on-device voice recognition and an optional debloat of LG's ads and telemetry.

> [!NOTE]
> **LG's system files are not modified.** The launcher takes over Home with a mount that exists only in RAM, so a reboot without the
> boot scripts brings LG's Home back. Everything we install is stored in `/media/developer/cleanyourtv` (plus two boot scripts and
> the key binds), and the uninstall removes it. It runs on the TV: no server and no account of ours, and the project collects no
> data. Optional features contact the services you choose; [Security](https://lasharor.github.io/cleanyourtv-WebOS/security/) lists them.

**CleanYourTV** replaces LG's Home with a launcher: a dock of four apps, a top shelf, an app grid sorted by use, an Inputs
picker, a Settings shortcut and a clock. A small service runs on the TV as root and adds the rest. A manager app on the TV
sets up, updates and removes everything.

### Compatibility at a glance

* **webOS**: 5 and newer (2020 models and later). webOS 4 and older have no systemd…
