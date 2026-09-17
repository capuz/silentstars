---
repo: "orange-cpp/yail"
name: "yail"
description: "Yet Another Injection Library — a Windows x64 manual-map DLL injection library written in modern C++23."
readmeQualityOk: true
url: "https://github.com/orange-cpp/yail"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-26T10:05:03Z"
lastCommitAt: "2026-09-17T08:50:35Z"
lastReleaseAt: "2026-07-23T22:49:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 22
maintainers: ["orange-cpp"]
openGraphImageUrl: "https://opengraph.githubassets.com/d30c76e10d270018bc3fcee47ad2bad8c202d115f10e0ada1dad07792d1fceac/orange-cpp/yail"
---

## Features

- Manual PE mapping (no `LoadLibrary` traces)
  - **x64** — full unwind table registration via `RtlInsertInvertedFunctionTable` (with `RtlAddFunctionTable` fallback)
  - **x86** — SEH validation via `RtlInsertInvertedFunctionTable` (handles modern Win11 24H2 internal `__fastcall` convention)
- Maps both **DLLs** and **EXEs** — auto-detected via `IMAGE_FILE_DLL`
  - DLLs invoked as `DllMain(HMODULE, DLL_PROCESS_ATTACH, nullptr)`
  - EXEs invoked as `int __cdecl mainCRTStartup(void)` — works with both `main`-style (console subsystem) and `WinMain`-style (GUI subsystem) entries
- Static TLS via `LdrpHandleTlsData`
- Private `ntdll` routines (`LdrpHandleTlsData`, `RtlInsertInvertedFunctionTable`) resolved from the exact
  loaded image's CodeView RSDS record through the Microsoft symbol server
- TLS callbacks (`.CRT$XLB`)
- Static and delay-loaded imports
- Exception handling (SEH/VEH/C++) compatible with manually-mapped images
- Per-section memory protections (RX, RW, RO, RWX as declared)
- Inject by process ID or process name
- Load from file path or raw bytes in memory
- Returns `std::expected<uintptr_t, yail::Error>` — no exceptions or error-path allocations
- C…
