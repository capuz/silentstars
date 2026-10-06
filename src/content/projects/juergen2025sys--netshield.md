---
repo: "juergen2025sys/NETSHIELD"
name: "NETSHIELD"
description: "Automated IPv4 threat intelligence: combined blacklist from 100+ feeds with confidence scoring. Updated every 3h."
readmeQualityOk: true
url: "https://github.com/juergen2025sys/NETSHIELD"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["blocklist", "ip-blocklist", "ipv4", "opnsense", "security", "threat-intelligence", "ip", "ipblacklist", "cybersecurity", "github-actions"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 18
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-02-28T16:12:53Z"
lastCommitAt: "2026-10-06T10:42:20Z"
lastReleaseAt: "2026-08-31T19:18:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a591a6fd68bbc58dedd416af2dce1450a60adb16604194ba11d6e22e77d1e68d/juergen2025sys/NETSHIELD"
---

&nbsp;
&nbsp;
&nbsp;

[**⚡ Quick Start**](#-quick-start--opnsense-alias) · [**📊 Blocklisten**](#-blocklisten) · [**🎯 Scoring**](#-wie-funktioniert-die-bewertung) · [**🏗️ Architektur**](#%EF%B8%8F-architektur) · [**⚙️ Workflows**](#%EF%B8%8F-workflows) · [**📡 Feeds**](#-feed-quellen)

---

## 📊 Key Statistics

> NETSHIELD aggregiert, bewertet und bereinigt täglich IP-Bedrohungsdaten aus **über 160 Quellen** (dynamisch, wächst laufend durch Auto-Discovery): rund 120 öffentliche Remote-Feeds, 6 lokale Sub-Workflow-Feeds (CVE, Honeypot, Honigtopf, Bot-Detector, TweetFeed und laufend neu per GitHub-Discovery entdeckte Feeds. Das System unterscheidet aktive Bedrohungen von veralteten statischen Listen und liefert daraus qualitativ hochwertige Blocklisten für OPNsense, pfSense und iptables.

---

## 📋 Blocklisten

| Datei | Zweck | Einträge | Empfohlen für |
|---|---|---:|---|
| 🛡️ [`active_blacklist_ipv4.txt`](https://github.com/juergen2025sys/NETSHIELD/blob/HEAD/active_blacklist_ipv4.txt) | Aktive Bedrohungen · letzte 30 Tage · Score ≥ 65 | **1,025,911**…
