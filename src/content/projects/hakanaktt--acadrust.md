---
repo: "hakanaktt/acadrust"
name: "acadrust"
description: "A pure Rust crate for reading, writing,inspecting and manipulating DXF/DWG files."
readmeQualityOk: true
url: "https://github.com/hakanaktt/acadrust"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 171
forks: 111
openIssues: 11
closedIssues: 200
watchers: 3
contributors: 54
recentReleases: 8
createdAt: "2026-01-20T13:06:59Z"
lastCommitAt: "2026-11-13T05:40:54Z"
lastReleaseAt: "2026-10-27T19:30:21Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 46
maintainers: ["HakanSeven12", "PandemRus", "assamaral"]
openGraphImageUrl: "https://opengraph.githubassets.com/1691e0e2bc9680dad286adc668dadf8d557402fcc197fc96c4312b843521b9cb/hakanaktt/acadrust"
---

# acadrust

See [third-party notices](https://github.com/hakanaktt/acadrust/blob/HEAD/THIRD_PARTY_NOTICES.md) for DWG code provenance and attribution.

**A pure Rust crate for reading, writing, and inspecting CAD files.**

acadrust handles ASCII and binary DXF plus native binary DWG without requiring
an installed CAD application. File support spans DXF and DWG R12 through R2018+.

## Quick Start

```toml
[dependencies]
acadrust = "0.6.8"
```

```rust
use acadrust::{DxfReader, DxfWriter};

fn main() -> acadrust::Result<()> {
    let doc = DxfReader::from_file("input.dxf")?.read()?;
    println!("{} entities", doc.entities().count());

    DxfWriter::new(&doc).write_to_file("output.dxf")?;
    Ok(())
}
```

`DxfReader` detects ASCII and binary input automatically. To produce binary
DXF, use `DxfWriter::new_binary(&doc)`.

### Cargo features

| Feature | Default | Adds |
|---------|---------|------|
| `parallel` | Yes | Rayon parallelism for native DWG reading and writing |
| `serde` | No | `Serialize` and `Deserialize` implementations for document types |
| `import` | No | STL, COLLADA, OBJ, glTF/GLB, and FBX importers |

Enable optional features as needed:

```toml
[dependencies]…
