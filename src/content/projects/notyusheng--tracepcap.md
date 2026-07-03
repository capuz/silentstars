---
repo: "NotYuSheng/TracePcap"
name: "TracePcap"
description: "Self-hosted PCAP analysis platform with LLM-powered incident triage, signature-based threat detection, and AI-generated incident narratives. Features network change monitoring across captures, deep packet inspection via nDPI, and automated Wireshark filter generation. Runs fully offline with local LLMs (Ollama, LM Studio)."
url: "https://github.com/NotYuSheng/TracePcap"
homepage: "https://notyusheng.github.io/TracePcap/"
language: "TypeScript"
languages: ["TypeScript", "Java"]
languagePcts: [45, 40]
topics: ["cybersecurity", "llm", "network-forensics", "network-monitoring", "packet-analysis", "pcap", "pcap-analyzer", "protocol-analysis", "wireshark", "blue-team"]
stars: 27
forks: 0
openIssues: 56
closedIssues: 125
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-01-31T11:53:19Z"
lastCommitAt: "2026-07-03T12:39:31Z"
lastReleaseAt: "2026-04-10T14:06:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 92
undervaluedScore: 45
maintainers: ["NotYuSheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c753b4619aa691674fc4eb23f2ace4f929968530f035251071a630339d7383a/NotYuSheng/TracePcap"
discussionCount: 0
---

<h1 align="center">TracePcap</h1>

  <strong>Black-box network analysis from PCAP captures — no prior knowledge of the network required</strong>
</p>

</p>

</p>

---

TracePcap is a self-hosted PCAP analysis workbench designed for situations where you work from the **traffic itself** — with no prior knowledge of the network. Upload one or more PCAP captures and the tool characterises devices, maps topology, reconstructs sessions, tracks changes over time, and generates AI-powered narratives — all derived purely from observed traffic.

This makes it well-suited for:

- **Network audits and third-party assessments** — handed a PCAP with no documentation; build the picture from scratch
- **Incident response** — incomplete network records; reconstruct what happened from packet evidence
- **Penetration test reconnaissance** — map an unknown or scarcely-documented network from captured traffic
- **Research and education** — explore any capture without needing context about the environment

</div>

## Features

| Feature | Description |
|---------|-------------|
| **PCAP Upload & Management** | Upload and manage PCAP/PCAPNG/CAP files (upload limit derived from `APP_MEMORY_MB`, 512MB by…
