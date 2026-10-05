---
repo: "jedisct1/turbocrypt"
name: "turbocrypt"
description: "A fast, easy-to-use, and secure command-line tool for encrypting and decrypting files , git repositories and directory trees."
readmeQualityOk: true
url: "https://github.com/jedisct1/turbocrypt"
language: "Zig"
languages: ["Zig"]
languagePcts: [85]
topics: ["crypt", "encryption", "file", "file-encryption", "turbo", "zig-package", "ziglang", "turbocrypt", "git", "repositories"]
stars: 117
forks: 6
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 2
recentReleases: 5
createdAt: "2025-10-21T20:19:23Z"
lastCommitAt: "2026-10-05T10:47:08Z"
lastReleaseAt: "2026-09-16T07:37:54Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 46
maintainers: ["jedisct1"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff8e797736cdd0fd5ec06ee533acbf7295bd39ad4db90f7f87c2dea0be26343f/jedisct1/turbocrypt"
fundingLinks: ["GITHUB:https://github.com/jedisct1"]
---

# TurboCrypt

A universal file encryption tool.

TurboCrypt encrypts anything from a single document to a whole directory of backups. You can also use it to open encrypted folders as local volumes or keep private files in a public Git repository.

- **Easy to use:** create a key, then encrypt and decrypt files with a single command.
- **Small and portable:** written in Zig and runs on Linux, macOS, Windows, and BSD.
- **Fast:** processes files in parallel, whether you're working with a few documents or a large directory tree.
- **Modern cryptography:** built on Argon2, AEGIS, HCTR2, and TurboSHAKE, with no insecure options.
- **Encrypted folders you can work in:** mount a folder and use your usual apps to read and edit its files. The encrypted folder can be on your own disk or on remote storage you've connected to your computer.
- **Private files in Git alongside public code:** commit encrypted notes, scripts, or unfinished work to Git, and optionally share the key with other maintainers who need access.

## Install TurboCrypt

On macOS, install the signed universal binary with Homebrew. Trust the tap first, then install:

```sh
brew trust jedisct1/turbocrypt
brew install…
