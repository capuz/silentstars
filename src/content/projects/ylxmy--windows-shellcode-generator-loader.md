---
repo: "Ylxmy/Windows-Shellcode-Generator-Loader"
name: "Windows-Shellcode-Generator-Loader"
description: "Advanced Windows shellcode development framework with position-independent code generation, dynamic API resolution, and cross-architecture support for security research and penetration testing."
readmeQualityOk: true
url: "https://github.com/Ylxmy/Windows-Shellcode-Generator-Loader"
language: "C++"
languages: ["C++", "C"]
languagePcts: [80, 20]
topics: ["api-hashing", "assembly-language", "code-injection", "cybersecurity-tools", "encryption", "evasion-techniques", "exploit-development", "in-memory-execution", "memory-manipulation", "offensive-security"]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-06T19:08:15Z"
lastCommitAt: "2026-08-04T06:10:53Z"
lastReleaseAt: "2025-12-06T19:08:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 58
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/808f5536e2d0c9d1a607b620c2f239f59065e83b0c4a0c4be74b0664de765246/Ylxmy/Windows-Shellcode-Generator-Loader"
fundingLinks: ["CUSTOM:shellCode"]
---

# ShellCode

A comprehensive Windows shell code development framework for creating location-independent executable code with dynamic API analysis. This project provides tools for creating shell code with advanced evasion techniques.

## Features

- **Position-Independent Code Generation**: Creates shellcode that can execute from any memory location
- **Dynamic API Resolution**: Uses hash-based API resolution to avoid static imports
- **Cross-Architecture Support**: Compatible with x86, x64, and ARM architectures
- **Evasion Techniques**: Implements advanced techniques to bypass security mechanisms
- **Complete Toolchain**: Includes both generator and loader components
- **Minimal Dependencies**: Self-contained framework with no external runtime dependencies

## Installation

### Build

- Download the project to your computer.
- Extract the Project to a Folder.
- Download Visual Studio to your computer
- Open the solution file (.sln).

3. **Build the projects:**
   - Set configuration to `Release` for optimized shellcode
   - Build `ShellCodeFrame` project first
   - Build `ShellCodeLoader` project second

4. **Verify build output:**
   ```
   Release/
   ├── ShellCode.bin…
