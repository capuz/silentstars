---
repo: "mandiant/capa-testfiles"
name: "capa-testfiles"
description: "Data to test capa's code and rules."
readmeQualityOk: true
url: "https://github.com/mandiant/capa-testfiles"
homepage: "https://github.com/mandiant/capa"
language: "Python"
languages: ["Python", "Max"]
languagePcts: [76, 24]
stars: 49
forks: 93
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 53
recentReleases: 0
createdAt: "2020-07-14T15:56:49Z"
lastCommitAt: "2026-11-03T11:15:45Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 77
undervaluedScore: 50
maintainers: ["williballenthin", "mr-tz", "corkamig"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b101322b8c6e2df2c1c71d7229f9550b380f34d65de68fdd484bb9367f8aa3e/mandiant/capa-testfiles"
---

# Resources for testing capa
Data to test capa's [code](https://github.com/mandiant/capa) and [rules](https://github.com/mandiant/capa-rules).

## Naming conventions
We use the following conventions to organize the capa test data.

- File name
  - MD5 or SHA256 hash, all lower case, e.g.
    - `d41d8cd98f00b204e9800998ecf8427e`
    - `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`
  - Descriptive name, e.g.
    - `kernel32`
    - `Practical Malware Analysis Lab 01-01`
- File extension
  - `.exe_`
  - `.dll_`
  - `.sys_`
  - `.elf_`
  - `.raw32` (32-bit shellcode)
  - `.raw64` (64-bit shellcode)
  - `.cs_` (C# source code)
  - `.aspx_` (ASP.NET source code)
  - `.py_` (Python source code)
- Directories
  - `/`: native test binaries
  - `/dotnet`: .NET test binaries
  - `/sigs`: test signatures
  - `/source`: source language test files e.g. C# and Python

## File permissions
All files in this repository must be tracked in Git with non-executable permissions (`100644`).
Do not set the executable bit (`+x` / `100755`) on any test files or test scripts.
