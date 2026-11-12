---
repo: "eupassarin/simplesign"
name: "simplesign"
description: "Enterprise digital signatures for .NET — PAdES · CAdES · XAdES. Zero external crypto deps. Native AOT. MIT."
readmeQualityOk: true
url: "https://github.com/eupassarin/simplesign"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["digital-signature", "etsi", "icp-brasil", "library", "pades", "pdf", "aot", "cades", "cryptography", "dotnet"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-14T19:39:49Z"
lastCommitAt: "2026-11-12T11:37:35Z"
lastReleaseAt: "2026-06-19T13:40:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 45
maintainers: ["eupassarin"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb819187a941d2a1694cb38f1c1e9ad939c33a92e828e4e162ba146538ccf825/eupassarin/simplesign"
fundingLinks: ["GITHUB:https://github.com/eupassarin"]
---

PAdES · CAdES · XAdES — sign, validate, inspect.

SimpleSign creates and validates **PAdES** (ETSI EN 319 142), **CAdES** (ETSI EN 319 122) and
**XAdES** (ETSI EN 319 132) signatures.

- All cryptography uses `System.Security.Cryptography`: no BouncyCastle, no third-party crypto.
- Native AOT compatible; .NET 8 and .NET 10 on Windows, macOS and Linux.
- MIT licensed.

## Installation

```bash
dotnet add package SimpleSign                  # PAdES + CAdES + XAdES
dotnet add package SimpleSign.Brazil.IcpBrasil # ICP-Brasil, Lei 14.063
dotnet add package SimpleSign.Brazil.GovBr     # Gov.br
dotnet add package SimpleSign.Peru.Iofe        # IOFE (Peru), INDECOPI policies
dotnet add package SimpleSign.Signers.Pkcs11   # A3 tokens, smartcards, HSMs
dotnet add package SimpleSign.Signers.Cloud    # cloud certificates (PSC, CSC v2)
dotnet tool install -g SimpleSign.Cli          # command line
```

| Package | What it does |
|---|---|
| `SimpleSign` | Meta-package: PAdES, CAdES and XAdES |
| `SimpleSign.PAdES` | PDF signing, validation and inspection (B-B/T/LT/LTA) |
| `SimpleSign.CAdES` | Standalone CMS/PKCS#7 signatures |
| `SimpleSign.XAdES` | XML signatures; ETSI trusted lists…
