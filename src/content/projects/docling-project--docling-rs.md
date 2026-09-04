---
repo: "docling-project/docling.rs"
name: "docling.rs"
description: "Full Rust port of Python docling"
readmeQualityOk: true
url: "https://github.com/docling-project/docling.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 59
forks: 18
openIssues: 3
closedIssues: 113
watchers: 1
contributors: 27
recentReleases: 10
createdAt: "2026-06-27T16:51:49Z"
lastCommitAt: "2026-09-04T08:10:33Z"
lastReleaseAt: "2026-07-02T11:51:21Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 44
maintainers: ["artiz", "PierreMesure", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f72bc349b6e2557e0d37821bc80a4790c9f37285fe0ed4008967b06015e6f6e8/docling-project/docling.rs"
fundingLinks: ["GITHUB:https://github.com/artiz", "BUY_ME_A_COFFEE:https://buymeacoffee.com/artiz_dev"]
discussionCount: 0
---

# docling.rs

</p>

  <br>
  <br>
</p>

A Rust port of [docling](https://github.com/docling-project/docling): convert
documents into a unified `DoclingDocument` for downstream AI workflows.

**Fast and small:** one static binary, no Python/PyTorch at runtime. The PDF
ML pipeline runs **4.3× faster** than Python docling at **2.3–2.6× less peak
RAM**; declarative formats (DOCX/HTML/XLSX/…) convert **20–60× faster** at
**~60× less memory** — methodology and per-fixture numbers in
[`docs/PDF_CONFORMANCE.md`](https://github.com/docling-project/docling.rs/blob/HEAD/docs/PDF_CONFORMANCE.md).

The format migration is **complete** — every document format in docling's
pipeline is supported, validated byte-for-byte against live docling. See
[`docs/MIGRATION.md`](https://github.com/docling-project/docling.rs/blob/HEAD/docs/MIGRATION.md) for the full architecture, the Python → Rust
mapping, and per-format conformance.

**▶ [Try it in your browser](https://docling-project.github.io/docling.rs/)** —
the whole converter compiled to wasm: drop a DOCX, PDF, XLSX, EPUB … and get
Markdown, docling JSON, DocLang XML or LaTeX back. Nothing is uploaded; the page runs
entirely on your device, phone…
