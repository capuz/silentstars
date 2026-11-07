---
repo: "johannesPettersson80/trust-platform"
name: "trust-platform"
description: "truST Platform — IEC 61131‑3 Structured Text tooling suite"
readmeQualityOk: true
url: "https://github.com/johannesPettersson80/trust-platform"
language: "Rust"
languages: ["Rust"]
languagePcts: [70]
topics: ["codesys", "dap", "debugger", "ethercat", "iec-61131-3", "industrial-automation", "language-server", "lsp", "plc", "plc-programming"]
stars: 228
forks: 26
openIssues: 0
closedIssues: 44
watchers: 9
contributors: 7
recentReleases: 0
createdAt: "2026-02-03T20:04:06Z"
lastCommitAt: "2026-11-07T13:55:40Z"
lastReleaseAt: "2026-02-10T23:37:16Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 34
maintainers: ["johannesPettersson80", "mikolaj-kow"]
openGraphImageUrl: "https://opengraph.githubassets.com/2686936aaa1e12943bb996889d0ea39d109a19700ca318c011cc11e56d5945c3/johannesPettersson80/trust-platform"
fundingLinks: ["GITHUB:https://github.com/johannesPettersson80"]
discussionCount: 5
---

Write, run and debug PLC programs on Linux, macOS, Windows and microcontrollers.

truST is an open platform for IEC 61131-3 Structured Text. You write programs in VS Code with a
complete language server. `trust-runtime` compiles each program ahead of time into native machine
code for the computer or chip that runs it, and runs it in a scan cycle. The debugger, Live Values
and the operator screens all work on the running program.

The aim is PLC programming as open and dependable as modern software: one plain-text project that
you review, version and test like any other code.

## Why truST

| If you need | truST gives you |
| --- | --- |
| A modern editor for Structured Text | a language server in VS Code: diagnostics as you type, completion, hover, go to definition, references, rename across files and formatting |
| PLC programs on ordinary computers | `trust-runtime`: native code on Linux and macOS, on x86-64 and AArch64, and on Windows x86-64 |
| A small controller | the ESP32-C6 firmware, a complete truST runtime that you install over USB |
| Code from another PLC | vendor profiles for CODESYS and TwinCAT, Siemens SCL and Mitsubishi GX Works3, and PLCopen XML import and export…
