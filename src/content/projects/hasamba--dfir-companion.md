---
repo: "hasamba/DFIR-Companion"
name: "DFIR-Companion"
description: "DFIR forensics companion server + capture extension"
readmeQualityOk: true
url: "https://github.com/hasamba/DFIR-Companion"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 36
forks: 1
openIssues: 0
closedIssues: 1142
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-07T15:51:33Z"
lastCommitAt: "2026-11-05T08:05:53Z"
lastReleaseAt: "2026-09-26T12:47:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 45
maintainers: ["hasamba"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c90f842b8d48e5b176cf2881ecadc0800bf2d99c26abe60304c29d8340855d2/hasamba/DFIR-Companion"
---

# DFIR Companion

> **AI-assisted DFIR triage — on your machine.** Turns investigation screenshots and imported
> artifacts into a forensic timeline, findings, IOCs, an asset↔IoC graph, and shareable reports;
> ask the case questions in plain English and collaborate with other investigators.

A localhost digital-forensics / incident-response companion. A browser extension
captures screenshots of your investigation (Velociraptor, EDR/SIEM dashboards, Security Onion, Splunk4DFIR, VolWeb, VirusTotal, etc.) as
evidence; a local server stores them, runs **windowed AI vision analysis** into an
accumulating per-case investigation state, and serves a **live dashboard** plus
exportable reports.

Everything runs on your machine — the companion binds to `127.0.0.1` only, evidence
stays on disk, and the AI provider is yours to choose.

> **Post-detection analysis layer.** DFIR Companion is NOT a detection engine — it ingests verdicts
> from **Velociraptor, Security Onion, Chainsaw, Hayabusa, THOR, Cyber Triage, EDR/SIEM**,
> correlates them into one forensic timeline, and synthesizes findings, attacker path, IOCs, and reports.
> The value is **"so what"**, not re-deriving alerts.
>

Demo…
