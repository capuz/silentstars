---
repo: "anti-matter/Windows_AFP_Server"
name: "Windows_AFP_Server"
description: "Docs and bug reports for the Windows AFP Server"
readmeQualityOk: true
url: "https://github.com/anti-matter/Windows_AFP_Server"
language: "C"
languages: ["C", "C++"]
languagePcts: [64, 30]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-11-29T21:15:59Z"
lastCommitAt: "2026-11-09T03:31:35Z"
lastReleaseAt: "2025-08-19T18:37:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 63
maintainers: ["anti-matter"]
openGraphImageUrl: "https://opengraph.githubassets.com/7db3e3a3b0dd6993218fb9ad2db1df1b1f449693a1d62caa30611f751696e2ac/anti-matter/Windows_AFP_Server"
---

# Windows AFP Server

This is a AFP3.2 over TCP/IP server that runs on Windows clients (up to Windows 11 has been tested) that allows file sharing to vintage Macintosh clients. Classic Mac OS clients show the server's own custom icon (served in `FPGetSrvrInfo`) instead of the generic network-server icon.

See the [Wiki](https://github.com/anti-matter/Windows_AFP_Server/wiki) for additional information and instructions. Report bugs via [GitHub Issues](https://github.com/anti-matter/Windows_AFP_Server/issues).

The project is now open source — the full source code lives in this repository.

## Repository layout

- `afpServer/` — the server source code (Visual Studio C++ project). Protocol
  and server code is under `afpServer/afp-source/`; a vendored OpenSSL 1.1
  dependency lives in `afpServer/deps/`.
- `AfpServerInstaller/` — WiX v7 installer source (`product.wxs`); builds a
  single-file MSI (major-upgrades legacy Installer Projects installs). Not
  part of CI; see `AGENTS.md` for the `wix` build commands.
- `deploy.cmd` / `install.cmd` — packaging and post-install scripts.
- `AGENTS.md` — notes for contributors (and AI coding agents) on building,
  conventions, and gotchas.

##…
