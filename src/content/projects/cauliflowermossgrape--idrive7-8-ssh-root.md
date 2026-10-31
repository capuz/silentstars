---
repo: "cauliflowermossgrape/idrive7-8-ssh-root"
name: "idrive7-8-ssh-root"
description: "Enable root SSH on BMW MGU head units (iDrive 7 / ID8 BDC3 / ID8 BCP) over ENET - flash the debug image, enroll, persistent SSH with no B7F8E5 DTC, and a unique per-car key."
readmeQualityOk: true
url: "https://github.com/cauliflowermossgrape/idrive7-8-ssh-root"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["developer-mode", "idrive", "idrive7", "root", "ssh", "unlock", "idrive8", "bmw", "car-hacking", "enet"]
stars: 122
forks: 29
openIssues: 2
closedIssues: 8
watchers: 7
contributors: 7
recentReleases: 4
createdAt: "2026-10-22T12:37:32Z"
lastCommitAt: "2026-10-31T18:57:44Z"
lastReleaseAt: "2026-10-30T17:47:00Z"
status: "newborn"
tags: []
healthScore: 95
undervaluedScore: 33
maintainers: ["cauliflowermossgrape", "JackieZ123430", "Noahbg"]
openGraphImageUrl: "https://opengraph.githubassets.com/567f2c23fbdd2e26b544ba8ee277035e11fa37ba87a7bdc06742f52af829e248/cauliflowermossgrape/idrive7-8-ssh-root"
---

**English** | [简体中文翻译](https://github.com/cauliflowermossgrape/idrive7-8-ssh-root/blob/HEAD/README.zh-CN.md)

# iDrive7/8 SSH root

Enable the **root SSH service** on BMW MGU head units (iDrive 7 / MGU ID7,
ID8-BDC3 and ID8-BCP) entirely over the car's **ENET** diagnostic interface -
just an ENET cable and a laptop. It flashes the debug image, enrolls the SSH
identity and keeps SSH running with debug mode **off** (no `B7F8E5` DTC).
Optionally (advanced, off by default) it can give a car its own **unique SSH key**.

> **Disclaimer** - for use on **your own vehicle**, at your own risk. Flashing a
> head unit can wipe its coding, delete its **BMW Digital Key** pairings and,
> in the worst case, brick the module. Read
> **Back up your coding before flashing** (below) first. The authors take no
> responsibility for any damage.

## Requirements

- **Python 3.9+** - only if you run from source. The prebuilt **`.exe` needs no
  Python** (see [GUI app](#gui-app)).
- **A system OpenSSH client** (`ssh` on your `PATH`). It ships with Windows 10/11
  (*Settings → Apps → Optional features → "OpenSSH Client"*) and is standard on
  WSL/macOS/Linux. Check with `ssh -V`.
- **Windows:** run your…
