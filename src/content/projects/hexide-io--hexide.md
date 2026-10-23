---
repo: "hexide-io/HexIDE"
name: "HexIDE"
description: "An open, cross-platform IDE for Visual Basic 6. Forms, toolbox, properties and project explorer, running natively on Windows, macOS and Linux."
readmeQualityOk: true
url: "https://github.com/hexide-io/HexIDE"
homepage: "https://hexide.io"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["avalonia", "cross-platform", "csharp", "dotnet", "ide", "language-server", "retrocomputing", "vb6", "vba", "visual-basic"]
stars: 14
forks: 7
openIssues: 534
closedIssues: 442
watchers: 3
contributors: 5
recentReleases: 2
createdAt: "2026-07-06T23:13:34Z"
lastCommitAt: "2026-10-23T12:04:13Z"
lastReleaseAt: "2026-09-24T02:10:49Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["imojenisys"]
openGraphImageUrl: "https://opengraph.githubassets.com/67968fbcd37aa584680351a72912cb9bccf26a89f4770790dc0f1a3e3ea6ffff/hexide-io/HexIDE"
discussionCount: 0
---

# HexIDE

**An open, cross-platform IDE for Visual Basic 6 & VBA.**

HexIDE reads and writes native `.vbp`/`.frm`/`.bas`/`.cls` files and layers on a modern,
LSP-backed editor — IntelliSense, diagnostics, code folding, rename, and formatting — over a
form designer and project manager. It runs on Windows, macOS, and Linux. No COM, no registry,
no Visual Studio required.

> **Status: Pre-alpha — early developer preview.** HexIDE is a working cross-platform VB6
> *editor and form designer*. It is **not a compiler** — the built-in interpreter runs only a
> subset of VB6, and producing a real `.exe` currently shells out to an installed copy of the
> original VB6 (Windows only). Treat it as an early preview, not a finished product.
> Contributions and feedback are very welcome.
>
> **Work on a copy.** The file-format work has come a long way — 21 of VB6's own 22 template forms now
> survive a save byte-for-byte, and the one that does not is refused rather than damaged — but that
> corpus is Microsoft's templates, not your project. Anything hosting a third-party OCX is the known
> weak edge. See [Opening real VB6 projects](#real-projects) for exactly what it does and does not
> preserve.…
