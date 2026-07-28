---
repo: "AdvDebug/Brovan"
name: "Brovan"
description: "Brovan is a user-mode x86_64 binary emulator for your malware analysis & reverse engineering."
readmeQualityOk: true
url: "https://github.com/AdvDebug/Brovan"
language: "C#"
languages: ["C#", "C++"]
languagePcts: [76, 22]
topics: ["emulator", "csharp", "linux", "malware-analysis", "reverse-engineering", "windows", "antivirus", "malware", "sandbox", "sandboxing"]
stars: 153
forks: 11
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-05-15T02:12:23Z"
lastCommitAt: "2026-07-28T15:03:09Z"
lastReleaseAt: "2026-06-04T14:10:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 33
maintainers: ["AdvDebug", "dependabot[bot]", "ELJoOker2004"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1239342938/35803808-d208-42de-81bf-65401463b9a9"
---

<br/><br/>
  
  
    <b>A user-mode x86_64 binary emulator for inspecting programs, tracing syscalls, and safely running untrusted software.</b>
  </p>
  
</div>

## What is Brovan?

Brovan is an interactive x86_64 emulator that gives you full control over how programs execute. It can be used to reverse engineer binaries, trace API and system calls, capture network traffic, or run software in an isolated environment without executing it directly on your host CPU.

It is designed to support as much software as possible while remaining a safe, efficient, and high-performance option for running software across Windows and Linux. Brovan is still in early development, so it is not yet fully mature or reliable.

Supported backends:
* **Unicorn Engine** for cross-platform emulation
* **WHP** (Windows Hypervisor Platform) for hardware acceleration on Windows
* **KVM** (Kernel-based Virtual Machine) for hardware acceleration on Linux

## Core Features

<table width="100%">
  <tr>
    <td width="50%" valign="top" align="left">
      <p><b>MULTI-FORMAT LOADING</b></p>
      <p>Load and execute binaries directly inside the emulator without host installation.</p>
      <sub><code>PE</code>…
