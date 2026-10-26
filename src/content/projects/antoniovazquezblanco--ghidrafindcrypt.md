---
repo: "antoniovazquezblanco/GhidraFindcrypt"
name: "GhidraFindcrypt"
description: "Ghidra analysis plugin to locate cryptographic constants"
readmeQualityOk: true
url: "https://github.com/antoniovazquezblanco/GhidraFindcrypt"
homepage: "https://github.com/antoniovazquezblanco/ghidra-findcrypt"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["criptography", "reverse-engineering", "ghidra", "ghidra-analyzer", "ghidra-extension"]
stars: 99
forks: 7
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2023-04-05T14:29:43Z"
lastCommitAt: "2026-10-26T09:17:45Z"
lastReleaseAt: "2025-08-07T23:37:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 40
maintainers: ["antoniovazquezblanco", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d349540fc5c5c15379d7a5c937e656b7a2635a046969005291f6947199ce1175/antoniovazquezblanco/GhidraFindcrypt"
---

# Ghidra FindCrypt

This is a fork of another [Ghidra FindCrypt](https://github.com/TorgoTorgo/ghidra-findcrypt) that is a re-write of another [Ghidra FindCrypt](https://github.com/d3v1l401/FindCrypt-Ghidra/) script as an auto analysis module. It also takes better advantage of the Ghidra API to label found constants.

## Installing

Go to the [releases page](https://github.com/antoniovazquezblanco/GhidraFindcrypt/releases) and download the latest version for your Ghidra distribution.

In Ghidra main window go to `File` > `Install extensions...`. In the new window press the `+` icon to import the downloaded zip.

## Using

Once the script is installed, a new Analysis is added to the Auto Analyze window called "Find Crypt", it's enabled by default and it's safe to re-run.
If you have an existing file, open the "Analysis" menu in the CodeBrowser tool and click "Auto Analyze".
Select the "Find Crypt" analysis from the list and click Analyze.

Once the analysis is complete, any found crypt constants will be labeled with the algorithm they're associated with.
You can find these labels in the "Labels" folder in the Symbol Tree window.
The labels are prefixed with `CRYPT_` to group them…
