---
repo: "secup/ProjectUltra"
name: "ProjectUltra"
description: "Experimental HF modem for amateur radio. Coherent OFDM + multi-carrier DPSK waveforms, LDPC FEC, selective-repeat ARQ, outcome-fitted adaptive rate control. Headless TCP TNC or GUI. Work in progress."
readmeQualityOk: true
url: "https://github.com/secup/ProjectUltra"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["amateur-radio", "arq", "digital-modes", "ham-radio", "ldpc", "ofdm", "signal-processing", "hf-modem"]
stars: 27
forks: 4
openIssues: 3
closedIssues: 17
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2026-01-13T03:38:03Z"
lastCommitAt: "2026-11-23T10:14:16Z"
lastReleaseAt: "2026-05-14T15:52:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["secup"]
openGraphImageUrl: "https://opengraph.githubassets.com/17005c8375ef215df97eed0b044dc2fc8d80886b52587170acd5244be79d78ee/secup/ProjectUltra"
---

# ProjectUltra

**An adaptive HF data modem for amateur radio.**

ProjectUltra moves files and messages byte-exact between two HF stations over SSB. It picks its
waveform, modulation and code rate from the channel it measures, and keeps adapting as
conditions change. Use it headless as a TCP TNC that speaks the command/data interface of
existing HF data clients, or as a desktop application with a waterfall and a constellation
view.

> **Pre-alpha.** Under active development. The over-the-air protocol can change between
> versions, so both stations must run the same build. Performance is measured on software and
> hardware HF channel simulators; it is not yet characterized over the air at scale.

*Updated 2026-11-23. Latest release: [`v0.6.4-pre-alpha`](https://github.com/secup/ProjectUltra/releases/tag/v0.6.4-pre-alpha).*

---
