---
repo: "foldit-org/molex"
name: "molex"
description: "Molecular exchange library for parsing, transforming, and serializing protein   structure data across PDB, mmCIF, BinaryCIF, and binary formats."
url: "https://github.com/foldit-org/molex"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-01-23T07:10:27Z"
lastCommitAt: "2026-06-25T01:36:46Z"
lastReleaseAt: "2026-05-30T05:30:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 53
maintainers: ["petridecus"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9ba9ce3b5899a9f29c6e138b5e1717c80d1297628fd074b787be320e3cebaed/foldit-org/molex"
---

# molex

**Mol**ecular **ex**change — a Rust library for parsing, analyzing,
and serializing molecular structure data.

## Features

- **Parse** PDB, mmCIF, BinaryCIF, MRC/CCP4 density maps, and DCD trajectories
- **Entity model** — proteins, nucleic acids, ligands, ions, waters, and cofactors as typed entities
- **Analyze** — DSSP secondary structure, hydrogen bonds, covalent bonds, disulfide bridges
- **Transform** — Kabsch alignment, CA extraction, backbone segments
- **Serialize** — compact binary assembly format for FFI and IPC
- **Python bindings** — PyO3 module with AtomWorks/Biotite interop

## Quick start

```rust
use molex::adapters::pdb::pdb_file_to_entities;

let entities = pdb_file_to_entities("1ubq.pdb".as_ref())?;
for e in &entities {
    println!("{}: {} atoms", e.label(), e.atom_count());
}
```

## Python

```bash
pip install molex
```

The Python API is object-centric: parse a structure into an `Assembly`, walk
its entities and residues, and read atoms as numpy columns.

```python
import molex

asm = molex.Assembly.from_pdb(open("1ubq.pdb").read())
for e in asm.entities():
    print(e.kind, e.chain_id, e.residue_count)

arr = asm.to_arrays()    # per-atom numpy…
