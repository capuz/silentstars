---
repo: "tc4dy/ironshell-x86"
name: "ironshell-x86"
description: "Bare-metal x86 shellcode execution & analysis environment in pure 16-bit Assembly. 2-stage bootloader, TUI shell, 8 injectable payloads, sandbox layer with 4 enforcement policies, opcode scanning, IVT diffing & register integrity checks - all at ring 0, before any OS. "
readmeQualityOk: true
url: "https://github.com/tc4dy/ironshell-x86"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [92]
topics: ["assembler", "assembly", "assembly-x86", "bare-metal", "bare-metal-programming", "baremetal", "blue-team", "exploit-analysis", "low-level", "malware-analysis"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-05T04:29:57Z"
lastCommitAt: "2026-10-09T18:55:45Z"
lastReleaseAt: "2026-08-21T18:25:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 45
maintainers: ["tc4dy"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4635604afd5a2e768478002e07f140eec0015e4da04ce3ea582069e1e9b3480/tc4dy/ironshell-x86"
---

# ironshell-x86 – Bare-Metal Shellcode Sandbox

**ironshell-x86** is a bare-metal x86 shellcode execution and analysis environment written entirely in 16-bit Assembly. It runs directly from a bootable disk image — no OS, no runtime, no libc. Just raw silicon.

---

## [>>] Features

- [+] **2-Stage Bootloader** — Stage 1 MBR loads Stage 2 + Sandbox + Shellcode + Theme + Filter modules from disk with retry logic
- [+] **TUI Shell** — Full interactive terminal UI with dual-panel VGA layout, command history (↑↓), page scroll (PgUp/PgDn), and live execution log
- [+] **8 Injectable Payloads** — MSGBOX, MEMWALK, PORTPROBE, STACKSMASH, NXPROBE, CPUINFO, IVTDUMP, MEMMAP
- [+] **Sandbox v2.1** — 4 enforcement policies, pre-execution opcode scanning (STI/HLT/IO/PRIV), IVT snapshot diffing with auto-restore, register integrity checks, CPUID support detection
- [+] **Theme Engine** — 5 color themes (COLOR, MONO, HACKER, RETRO, STEALTH) loaded as a separate module at 0xB000
- [+] **Log Filter System** — 6 filter modes (ALL, INFO, WARN, ERROR, SUCCESS, ACCENT) loaded as a separate module at 0xC000
- [+] **Hardware Analysis** — CPUID vendor/brand/feature detection, A20 gate test, E820 memory…
