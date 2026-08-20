---
repo: "mwakidenis/banknet"
name: "banknet"
description: "Capstone – part of a larger project, with code to be used on a Raspberry Pi; not a website."
readmeQualityOk: true
url: "https://github.com/mwakidenis/banknet"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [56, 44]
stars: 24
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-01T13:55:10Z"
lastCommitAt: "2026-08-20T04:08:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["mwakidenis"]
openGraphImageUrl: "https://opengraph.githubassets.com/341daaae5eb7be83d85f68c3ce7e84a75f02291a3a2cc0b1665a17612f640a3f/mwakidenis/banknet"
---

# ⭐ BankNet — Portable SIM-less ISP Router

**A portable programmable micro-ISP that stores and distributes internet bandwidth.**

</div>

</p>

</p>

---

# 🌍 Overview

**BankNet** is a **battery-powered portable router that functions as a micro-ISP**.  
It introduces the concept of **network banking**, where internet bandwidth can be **stored locally and distributed to connected devices** even when upstream connectivity is unstable.

The project demonstrates **edge networking architecture, traffic shaping, and software-defined routing** built on **Node.js and Linux networking tools**.

BankNet is inspired by modern satellite networking systems like **Starlink**, exploring how **portable ISP nodes** could operate in remote or intermittent-connectivity environments.

---

# 🎥 Project Demo

</p>

**What the demo shows**

• Booting the portable router  
• Connecting to upstream network  
• Banking internet bandwidth  
• Devices connecting to the hotspot  
• Live bandwidth distribution  

---

# ⚙️ Live System Flow

```mermaid
flowchart LR

Internet[Upstream Internet<br>Satellite / WiFi / LTE]
Uplink[Uplink Manager]
Bank[Network Bank Engine]
Traffic[Traffic Control]
Router[NAT…
