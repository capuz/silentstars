---
repo: "dreamingmoths/memory-of-alessa"
name: "memory-of-alessa"
description: "In-progress matching decompilation of Silent Hill 3"
readmeQualityOk: true
url: "https://github.com/dreamingmoths/memory-of-alessa"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["decompilation", "reverse-engineering", "silent-hill"]
stars: 169
forks: 16
openIssues: 10
closedIssues: 9
watchers: 8
contributors: 30
recentReleases: 0
createdAt: "2026-01-02T01:08:34Z"
lastCommitAt: "2026-11-09T04:34:21Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 89
undervaluedScore: 33
maintainers: ["dreamingmoths", "Piccio23", "Eletonyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/118d16d0fb44cc58557fcd5a4f37bfb52da24c72dacccb476dfc3219595a37e1/dreamingmoths/memory-of-alessa"
---

### project goals

⋆˙⟡ 100% byte-matching decompilation of Silent Hill 3, a survival horror
masterpiece.

⋆˙⟡ 100% byte-matching decompilation of Silent Hill 2 engine, the
foundation for Silent Hill 3.

⋆˙⟡ Learning & documenting the technical history of Team Silent's PS2 engine.

🔴 This project is in early stages. Things are likely to change and may be wrong.

### setup

0. `python3`, `wget`, and essential build packages are prerequisites.

1. Insert the disc of Silent Hill 3 v1.02 (NTSC-U) for the PlayStation 2 into
   your computer. It has serial number `SLUS_206.22` and its ISO's SHA1 is
   `0f7b0d5d75fe34ddf72e26aae1b4f5e7891282b0`.

2. Copy the `SLUS_206.22` file as well as `B0.MFA` into the folder at
   `rom/SLUS_206.22` in this repository.

Then proceed below depending on your operating system.

#### linux (x86-64) & macOS (aarch64)

On first setup, run the following commands in the root directory of this
repository. They will set up a virtual environment and install the required
Python packages.

```sh
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
```

Then run `make`. This will download the toolchain, extract files, and build…
