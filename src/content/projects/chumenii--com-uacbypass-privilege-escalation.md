---
repo: "CHUMENII/COM-UACBypass-Privilege-Escalation"
name: "COM-UACBypass-Privilege-Escalation"
description: "Windows UAC bypass implementation using COM elevation monikers. Leverages ICMLuaUtil interface to execute processes with elevated privileges."
readmeQualityOk: true
url: "https://github.com/CHUMENII/COM-UACBypass-Privilege-Escalation"
language: "C++"
languages: ["C++", "C"]
languagePcts: [56, 44]
topics: ["bypass-technique", "com-elevation", "com-interface", "elevation-moniker", "exploit", "hacking", "icmluautil", "privilege-escalation", "uac-bypass", "uacme"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 0
recentReleases: 0
createdAt: "2026-04-02T14:14:58Z"
lastCommitAt: "2026-07-04T23:15:25Z"
lastReleaseAt: "2026-04-02T14:15:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/df78499c295414ae3edc2de297d6d47a448f333a04630ebd3ad1e81e68b72490/CHUMENII/COM-UACBypass-Privilege-Escalation"
fundingLinks: ["CUSTOM:UAC"]
---

# COM BypassUAC - UAC Bypass Implementation

A Windows UAC (User Account Control) bypass implementation using COM (Component Object Model) elevation monikers. This project demonstrates how to leverage the `ICMLuaUtil` interface to execute processes with elevated privileges without triggering the standard UAC prompt.

## Table of Contents

- [Overview](#overview)
- [How It Works](#how-it-works)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Building the Project](#building-the-project)
- [Usage](#usage)
- [Technical Details](#technical-details)
- [Limitations](#limitations)
- [License](#license)

## Overview

This project implements a UAC bypass technique that exploits Windows COM elevation monikers. Instead of using traditional methods that trigger UAC prompts, this implementation uses the undocumented `ICMLuaUtil` COM interface to execute processes with administrator privileges.

### Features

- **Silent Elevation**: Executes processes with elevated privileges without user interaction
- **COM-Based**: Uses Windows COM elevation monikers for privilege escalation
- **Clean Code**: Well-structured, optimized, and readable C++ implementation
- **RAII…
