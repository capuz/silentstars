---
repo: "TheManticoreProject/Manticore"
name: "Manticore"
description: "A cross platform library to write offensive and defensive security tools in Go"
readmeQualityOk: true
url: "https://github.com/TheManticoreProject/Manticore"
homepage: "https://themanticoreproject.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 169
forks: 8
openIssues: 29
closedIssues: 857
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-05-04T18:47:50Z"
lastCommitAt: "2026-11-02T13:38:14Z"
lastReleaseAt: "2026-06-11T14:23:43Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 44
maintainers: ["p0dalirius"]
openGraphImageUrl: "https://opengraph.githubassets.com/07b57d06669f74fe04856cfaf03e04147800ccdafed0c43bf33e29963f45e795/TheManticoreProject/Manticore"
fundingLinks: ["GITHUB:https://github.com/TheManticoreProject"]
---

Manticore is a framework for working with Windows network protocols (SMB, LDAP, DCE/RPC, and more), cryptography, and authentication, designed for building cross-platform security tooling.

## Features

- [x] **Cross-Platform Support**: Works on Windows, Linux, and macOS — no Windows API dependency.
- [x] **Authentication**: NTLM (v1/v2), SPNEGO/GSSAPI, LDAP bind, and a native Kerberos v5 stack — AS/TGS exchanges, PKINIT, FAST, S4U (S4U2self/S4U2proxy), U2U, AS-REP roasting and Kerberoasting, golden/silver/diamond/sapphire ticket forging, UnPAC-the-hash, and keytab/ccache/kirbi credential I/O.
- [x] **Network Protocols**: SMB 1.0 (CIFS) and SMB 2.0, a full DCE/RPC stack (NDR, EPM, `ncacn_ip_tcp`/`ncacn_np`/`ncacn_http` transports) exposing LSARPC, SAMR, SRVSVC, SVCCTL, DRSUAPI and WINREG, plus LDAP, LLMNR and NetBIOS name services.
- [x] **Cryptography**: [aescts](https://github.com/TheManticoreProject/Manticore/blob/HEAD/crypto/aescts/), [cmac](https://github.com/TheManticoreProject/Manticore/blob/HEAD/crypto/cmac/), [dcc](https://github.com/TheManticoreProject/Manticore/blob/HEAD/crypto/dcc/), [dcc2](https://github.com/TheManticoreProject/Manticore/blob/HEAD/crypto/dcc2/),…
