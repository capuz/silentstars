---
repo: "yuchdev/SmbiosSdk"
name: "SmbiosSdk"
description: "A cross-platform C++20 SDK that reads the SMBIOS/DMI firmware table and reports what it finds: BIOS, motherboard, CPU, memory, other structure types the SMBIOS specification defines"
readmeQualityOk: true
url: "https://github.com/yuchdev/SmbiosSdk"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [66, 31]
stars: 34
forks: 7
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-12-28T10:53:30Z"
lastCommitAt: "2026-11-17T12:15:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 60
maintainers: ["yuchdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/460daa27826a757b06bdedb435505209e77cfc8c56dfdb305c362202b121fb9e/yuchdev/SmbiosSdk"
---

# SMBIOS SDK

A cross-platform C++20 SDK that reads the SMBIOS/DMI firmware table and reports what it finds: BIOS, motherboard, CPU, memory, and 45 of the 49 structure types the SMBIOS 3.9.0 specification defines (the remaining 4 are either the table's own terminator or marked obsolete by the spec itself - see [SMBIOS structure coverage](#smbios-structure-coverage) below). It is more than a library and a CLI: the SDK ships a core library, a command-line tool, a C ABI for other languages, a desktop GUI browser, and (in development) packaging sources.

Windows, Linux, and macOS all have native ways to read the table - no root/admin needed on Windows or macOS; on Linux, sysfs's DMI table is typically root-only (mode 0400), so run as root there (see [CLI usage](https://github.com/yuchdev/SmbiosSdk/blob/HEAD/docs/cli-usage.md#privileges)). Each falls back to a legacy BIOS physical-memory scan only if its native path is unavailable.

* **`libsmbios`** - the core C++ library. All system calls, all structure parsing, no UI.
* **`smbios`** - the command-line front end (`libsmbios`'s own namespace is `smbios::` everywhere; the CLI target happens to share that name).
* **`smbios_gui`** - an…
