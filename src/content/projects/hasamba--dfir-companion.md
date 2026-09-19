---
repo: "hasamba/DFIR-Companion"
name: "DFIR-Companion"
description: "DFIR forensics companion server + capture extension"
readmeQualityOk: true
url: "https://github.com/hasamba/DFIR-Companion"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 12
forks: 0
openIssues: 44
closedIssues: 544
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-07-07T15:51:33Z"
lastCommitAt: "2026-09-19T08:13:09Z"
lastReleaseAt: "2026-08-29T10:26:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 55
maintainers: ["hasamba"]
openGraphImageUrl: "https://opengraph.githubassets.com/79b3491ed3843c0f518feda0dc018a18d75f1be03cbff0ff96b5ab385f819739/hasamba/DFIR-Companion"
---

</p>

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
>…
