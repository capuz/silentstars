---
repo: "SirYadav1/sonar-bypass"
name: "sonar-bypass"
description: "Minecraft Sonar bypass — Sonar anti-bot bypass (2.1.x) script, packet logger & debug proxy. CubixMC, PoorMC tested. Legacy v1 (MC 26.1)."
readmeQualityOk: true
url: "https://github.com/SirYadav1/sonar-bypass"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["anti-bot", "bot", "bypass", "cubixmc", "fabric-mod", "minecraft", "minecraft-protocol", "nodejs", "packet", "proxy"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-18T02:27:08Z"
lastCommitAt: "2026-10-21T08:48:14Z"
lastReleaseAt: "2026-08-18T02:57:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 28
maintainers: ["SirYadav1"]
openGraphImageUrl: "https://opengraph.githubassets.com/e92042b838e7147d6fc50ffc60ef2e79c60b5ad49ec92f4c4002da633e39653d/SirYadav1/sonar-bypass"
---

---

> **Legacy v1 — looking for more versions?**
> v1 is hard-coded to MC 26.1. Use **[Sonar Bypass v2](https://github.com/SirYadav1/sonar-bypass-v2)** for **23 versions (1.8.8–26.2)** with a fully dynamic client.

---

## **What is This?**

Sonar sits in front of a Minecraft server and runs a verification sequence before letting a player into the lobby. This repo is a **Minecraft Sonar bypass** script — a Sonar verification bypass that gets past that check using `minecraft-protocol` plus a raw socket hook — no captcha solving, no manual clicking.

It was built by watching real traffic (packet captures + a debug build of the Sonar proxy) and copying what a legit client does during each stage.

---

## **What's Inside**

| File | What it is |
|------|------------|
| `verify-pass.js` | The bypass script. Handles login, config, gravity / protocol / vehicle checks, then proves spawn with a chat message. |
| `research.md` | Packet-by-packet write-up of how Sonar verification works on the wire. |
| `main.md` | Stage-by-stage notes + the fix for every error we hit while building it. |
| `resources/Sonar-Paper.jar` | Prebuilt Sonar proxy with packet logging turned on. |
|…
