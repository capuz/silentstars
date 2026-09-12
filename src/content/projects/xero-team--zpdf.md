---
repo: "Xero-Team/zpdf"
name: "zpdf"
description: "A PDF parsing library written in pure Rust."
readmeQualityOk: true
url: "https://github.com/Xero-Team/zpdf"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 12
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-05-26T12:37:15Z"
lastCommitAt: "2026-09-12T08:04:42Z"
lastReleaseAt: "2026-08-08T11:09:38Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 47
maintainers: ["YUZHEthefool", "dependabot[bot]", "xero-team-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf91b7ee89f7f0d0d3f50129b119b68007947ae7f367859d16bf90307da43617/Xero-Team/zpdf"
---

# zpdf

Pure-Rust PDF parsing and rendering, with interchangeable CPU (tiny-skia) and
GPU (wgpu) renderers whose output matches within <1% of pixels.

## Features

- **Pure Rust** — zero C/C++ dependencies, fully safe.
- **PDF parsing** — header, traditional xref + xref/object streams + hybrid
  `/XRefStm`, trailer chains, lazy xref repair, object model, stream filters
  (Flate / LZW / ASCII85 / ASCIIHex / RunLength / DCT / CCITT G3-G4 +
  predictors) with corrupt-stream salvage.
- **Malformed-input robustness** — opens corrupt, headerless, or garbage-tail
  files via full-file object-scan recovery (catalog inside an `/ObjStm`,
  page-tree synthesis from `/Type /Page` scan, byte-flipped `/Type` tolerance,
  lenient header/dict parsing). Never panics or hangs on adversarial input:
  path/raster/clip budgets plus interpret/render time backstops degrade to a
  partial render instead. Recent hardening: predictor overflow protection,
  safe ObjStm parsing, mesh shading NaN validation, font cache LRU eviction
  (256-font limit) to prevent memory exhaustion attacks.
- **Performance** — CMYK/ColorSpace caching, zero-copy knockout rendering,
  in-place dash pattern optimization, and…
