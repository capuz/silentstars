---
repo: "SecurityRonin/memory-forensic"
name: "memory-forensic"
description: "Walk any memory dump. Find what's hidden. Linux + Windows kernel forensics from a single static Rust binary — no Python required."
readmeQualityOk: true
url: "https://github.com/SecurityRonin/memory-forensic"
homepage: "https://securityronin.github.io/memory-forensic/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["avml", "dfir", "digital-forensics", "incident-response", "ioc-detection", "lime", "linux-forensics", "malware-analysis", "memory-analysis", "memory-forensics"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-31T14:57:37Z"
lastCommitAt: "2026-08-17T04:19:42Z"
lastReleaseAt: "2026-06-25T04:28:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 47
maintainers: ["h4x0r"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd347582ec9df1f13a767a2409bd2c6af0b511218d8c1fad203d9365864630d8/SecurityRonin/memory-forensic"
---

# memory-forensic

**A memory forensics toolkit that profiles Windows kernels itself — and is cross-checked, process-for-process, against Volatility 3.**

`mem4n6` reads every common dump format (LiME, AVML, ELF core, Windows crash dumps, hibernation files, VMware save-states, kdump, raw…) and walks processes, threads, modules, network connections, and injected memory — from **one static binary** you compile once and copy anywhere, with **no Python, no runtime, no pre-staged symbol catalog**. On Windows it builds its own profile: locate `ntoskrnl` in physical memory, read its PDB GUID from the CodeView record, resolve the matching Volatility-3 ISF, recover the kernel base under modern KASLR, and reconstruct `PsActiveProcessHead` from the symbol table — the same self-profiling chain Volatility 3 and MemProcFS use, reimplemented in Rust.

Because the bar for an evidence tool is *correctness*, the process walker is cross-checked against an **independent reference implementation** — Volatility 3 — on a real 2 GB Windows 10 image (a reference agreeing is strong evidence, not proof; the raw bytes are the ground truth):

| `windows.pslist` on DESKTOP-SDN1RPT.mem | mem4n6 vs Volatility 3…
