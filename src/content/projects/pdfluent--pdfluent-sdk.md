---
repo: "pdfluent/pdfluent-sdk"
name: "pdfluent-sdk"
description: "PDF SDK written in Rust: rendering, extraction, forms, PDF/A, signatures, redaction. Bindings for Rust, Python, Node.js, .NET, Java, C and WebAssembly. AGPL-3.0 or commercial."
readmeQualityOk: true
url: "https://github.com/pdfluent/pdfluent-sdk"
homepage: "https://pdfluent.com/sdk/"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["acroform", "digital-signature", "document-processing", "pdf", "pdf-library", "pdf-sdk", "pdfa", "redaction", "rust", "webassembly"]
stars: 40
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-07-15T20:23:56Z"
lastCommitAt: "2026-11-04T11:28:19Z"
lastReleaseAt: "2026-11-03T03:33:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 41
maintainers: ["jasperdew"]
openGraphImageUrl: "https://opengraph.githubassets.com/2421bd2e90116995b3f9c01f39e93ecd2097080825ba0f45976de8d8f62d32e9/pdfluent/pdfluent-sdk"
discussionCount: 1
---

```bash
cargo add pdfluent                  # Rust
pip install pdfluent                # Python and the pdfluent command
npm install @pdfluent/node          # Node.js
```

[`docs/hero/`](https://github.com/pdfluent/pdfluent-sdk/blob/HEAD/docs/hero/), and both panels, and the picture itself, come out
of PDFluent's own rasterizer. The generator refuses to write it if the redacted
text is still extractable or `validate_pdfa()` disagrees.</sup>

## How it scores

PDFluent 1.3.0 ranks above every engine on the published opendataloader-bench leaderboard (as of 3 November 2026)*.

[Full tables, all four measures and how to reproduce](https://pdfluent.com/benchmarks/opendataloader-bench)

---

## In thirty seconds

```rust
use pdfluent::prelude::*;

fn main() -> Result<()> {
    let doc = PdfDocument::open("input.pdf")?;

    for page in doc.pages() {
        println!("{}", page.text()?);
    }

    let report = doc.validate_pdfa(PdfAProfile::A2b)?;
    if report.is_compliant() {
        println!("PDF/A-2B ✓");
    }
    Ok(())
}
```

[QUICKSTART.md](https://github.com/pdfluent/pdfluent-sdk/blob/HEAD/QUICKSTART.md) is the same five minutes in each language, and…
