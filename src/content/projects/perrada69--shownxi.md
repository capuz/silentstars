---
repo: "perrada69/shownxi"
name: "shownxi"
description: "Dot command for ZX Spectrum Next"
readmeQualityOk: true
url: "https://github.com/perrada69/shownxi"
language: "Assembly"
languages: ["Assembly", "Python"]
languagePcts: [59, 28]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-09T09:54:24Z"
lastCommitAt: "2026-10-31T15:57:06Z"
lastReleaseAt: "2026-04-11T17:09:00Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 12
maintainers: ["perrada69"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8a291c7b88aa0c0cd6de946595967ab3cccfc26642215828a45a8685f7bbbdb/perrada69/shownxi"
---

# SHOWNXI — NXI Viewer Dot Command for ZX Spectrum Next

**Credit: Shrek/MB Maniax 2026**

## Popis

Dot command pro NextZXOS, který zobrazí obrázek ve formátu NXI na Layer 2:
256×192 a 320×256 v 256 barvách nebo 640×256 v 16 barvách, s plnou,
zkrácenou nebo žádnou paletou.

## Podporované velikosti souboru

NXI nemá hlavičku: `[paleta P bajtů][pixely]`. P = 0..512, musí být sudé,
paleta má N = P/2 barev.

| Velikost | Rozlišení | Pixely |
|----------|-----------|--------|
| 49 152 + P B (49 152..49 664) | 256×192, 256 barev | 49 152 B po řádcích |
| 81 920 + P B (81 920..82 432) | 320×256, 256 barev | 81 920 B po sloupcích (bajt = x·256 + y) |
| 81 920 + P B (81 920..82 432) | 640×256, 16 barev | 81 920 B po sloupcích dvojic bodů, horní nibble = levý bod |

Obvykle P = 512, u 640×256 často P = 32 (16 barev). Liché P nebo jiná
velikost skončí hláškou `Unsupported NXI size`.

320×256 a 640×256 mají stejnou velikost. Rozlišení se pozná z palety:

1. 1 ≤ N ≤ 16 → 640×256
2. N > 16 a položky 16..N-1 jsou všechny stejné (výplň) → 640×256
3. jinak (i bez palety) → 320×256

Automatiku přebijí volby `-320` / `-640`. Při prohlížení přepíná klávesa
**M** mezi 320×256 a 640×256 (data…
