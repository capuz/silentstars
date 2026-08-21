---
repo: "novitalabs/NovitaBox"
name: "NovitaBox"
description: "Local AI agent sandbox runtime with Firecracker, gVisor, and NVIDIA GPU sandbox support."
readmeQualityOk: true
url: "https://github.com/novitalabs/NovitaBox"
homepage: "https://novita.ai"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["gpu", "gvisor", "sandbox", "agents", "microvm"]
stars: 46
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-06-22T12:28:37Z"
lastCommitAt: "2026-08-21T04:11:15Z"
lastReleaseAt: "2026-07-22T07:27:34Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 34
maintainers: ["NovitaLee", "young-lee-young"]
openGraphImageUrl: "https://opengraph.githubassets.com/d23bc649b6f171a1aa5367229ae4e2415a44fd850391567f7f3d66eeebeb646a/novitalabs/NovitaBox"
---

<h1 align="center">NovitaBox</h1>

<br />

</div>

**The local edition of Novita Sandbox** — a secure execution environment for AI Agents, with MicroVM and gVisor runtime options.

NovitaBox brings Novita's production sandbox stack to your laptop, on-prem servers, or edge devices. Run AI Agents
locally with millisecond startup times, zero cloud latency, and complete data privacy. Use the standard **Novita Sandbox
SDK** to write your agent code once, then run it locally with NovitaBox or in Novita production.

> Already using E2B SDK? NovitaBox is also API-compatible — point `E2B_API_URL` to your NovitaBox instance and your
> existing code works as-is.

---

## ✨ Features

- **🏠 Local-first** — Built for single-host deployment. Runs on your laptop, on-prem servers, or edge devices, with no
  cloud dependency at runtime.
- **🔒 Privacy by design** — Code, files, and execution traces never leave your machine. Suitable for air-gapped,
  regulated, or data-sensitive workloads.
- **⚡ Fast startup** — Use Firecracker for MicroVM snapshot startup or gVisor for container-style sandboxes.
- **🔁 One codebase, local to production** — Use Novita Sandbox SDK for both NovitaBox local…
