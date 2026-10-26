---
repo: "hakanaktt/acadrust"
name: "acadrust"
description: "A pure Rust crate for reading, writing,inspecting and manipulating DXF/DWG files."
readmeQualityOk: true
url: "https://github.com/hakanaktt/acadrust"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 145
forks: 84
openIssues: 7
closedIssues: 109
watchers: 3
contributors: 36
recentReleases: 7
createdAt: "2026-01-20T13:06:59Z"
lastCommitAt: "2026-10-26T20:47:00Z"
lastReleaseAt: "2026-10-24T09:07:36Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 45
maintainers: ["hakanaktt", "spdrman", "HakanSeven12"]
openGraphImageUrl: "https://opengraph.githubassets.com/628fc03bb58a55f93e0cd5b601c34d52e3a1f36740f12ff7f56fabf5373b210f/hakanaktt/acadrust"
---

# acadrust

See [third-party notices](https://github.com/hakanaktt/acadrust/blob/HEAD/THIRD_PARTY_NOTICES.md) for DWG code provenance and attribution.

**A pure Rust crate for reading, writing, and inspecting CAD files.**

acadrust handles ASCII and binary DXF plus native binary DWG without requiring
an installed CAD application. File support spans DXF and DWG R12 through R2018+.

## Quick Start

```toml
[dependencies]
acadrust = "0.6.7"
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
