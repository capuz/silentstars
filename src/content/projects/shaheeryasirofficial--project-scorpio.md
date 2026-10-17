---
repo: "shaheeryasirofficial/project-scorpio"
name: "project-scorpio"
description: "A Windows process injection loader combining PPID spoofing, manual DLL mapping, module stomping, and direct NT syscall"
readmeQualityOk: true
url: "https://github.com/shaheeryasirofficial/project-scorpio"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [60, 40]
topics: ["avira", "offensive-security", "process-injection", "red-team-tools", "wazuh", "windows"]
stars: 38
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-22T16:42:41Z"
lastCommitAt: "2026-10-17T08:00:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 16
maintainers: ["shaheeryasirofficial", "GhostOverflow"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2bd9a5fc265d3b8a221545c75a3c98c2d09cd58552851a26973284a8f954787/shaheeryasirofficial/project-scorpio"
---

# Project Scorpio

A Windows process injection loader combining PPID spoofing, manual DLL mapping, module stomping, and direct NT syscall usage to execute staged shellcode in a remote process.

---

## Architecture Overview

```
FetchPayload()         Pull shellcode from C2 over HTTP
SpawnSpoofed()         Spawn decoy process with spoofed PPID
ManualMapDLL()         Map a System32 DLL into decoy manually
StompTextSection()     Overwrite .text section with shellcode
ExecuteInRemote()      Kick off execution via NtCreateThreadEx
```

---

## Configuration (`#define`)

| Macro | Purpose |
|---|---|
| `C2_HOST` | WinHTTP target hostname for shellcode staging |
| `C2_PORT` | Port (default 8080) |
| `C2_PATH` | URI path to the raw shellcode blob |
| `DECOY_PROC` | Process binary to spawn as the injection host |
| `STOMP_DLL` | DLL from `System32` to manually map and stomp |

---

## Functions

### `ResolveNtFunctions()`

Dynamically resolves four NT functions from `ntdll.dll` at runtime using `GetProcAddress`:

- `NtCreateThreadEx` create remote threads
- `NtWriteVirtualMemory` write to remote process memory
- `NtProtectVirtualMemory` change memory protection
- `NtAllocateVirtualMemory`…
