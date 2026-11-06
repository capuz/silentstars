---
repo: "arx-oioi/-AntiCheat-Anogs-Tencent-"
name: "-AntiCheat-Anogs-Tencent-"
description: "Explain Anogs Tencent AntiCheat"
originalDescription: "อธิบาย Anogs Tencent AntiCheat "
descriptionLang: "th"
readmeQualityOk: true
url: "https://github.com/arx-oioi/-AntiCheat-Anogs-Tencent-"
language: "Smalltalk"
languages: ["Smalltalk"]
languagePcts: [100]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-13T06:43:26Z"
lastCommitAt: "2026-11-06T12:19:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 41
maintainers: ["arx-oioi"]
openGraphImageUrl: "https://opengraph.githubassets.com/3107d41b2ee4c81aae621a94a89988c1def8350ef9020d6e47e6cf095e8470dd/arx-oioi/-AntiCheat-Anogs-Tencent-"
---

# Tencent Protection (ANO / GP / TSS / ACE)

## Author @Tg ARXMODER

---

## 🌐 Overview / System Overview (TH / EN)

The following are commonly found in `libanogs.so`. / Core modules inside `libanogs.so`:

### 🔍 1. Detection System (Detection Core)
* **scan `/proc/self/maps`** — checks the process's memory mapping list (`sub_4DA108` decodes the strings `"/proc/self/maps"` and `"rb"`)
* **scan memory region** — checks memory region boundaries and permissions (abnormal `rwxp`)
* **hook check (PLT / inline)** — checks for modifications to the GOT/PLT tables or ARM64 instruction patches in the middle of a function
* **GG / Frida / ptrace check** — detects memory scanners, hooking frameworks, and debugger attachment (`sub_259670`)
* **abnormal syscall check** — checks for abnormal System Call invocations via the Dynamic Syscall Dispatcher (`sub_4A9A00`)

### 🧬 2. Self-Defense System (Self-Defense)
* **anti-debug** — stops and detaches the debugger (`SIGSTOP` → `PTRACE_DETACH` → `SIGCONT` in `sub_259670`)
* **anti-dump** — encrypts all strings with per-function XOR tables (~95 functions) and generates JIT code in temporary memory pages
* **anti-inject** — verifies code integrity…
