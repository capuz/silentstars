---
repo: "borestad/static-binaries"
name: "static-binaries"
description: "Static binaries updated hourly"
readmeQualityOk: true
url: "https://github.com/borestad/static-binaries"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["gnu", "static-binaries", "musl", "statically-linked", "upx"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2023-03-26T09:52:58Z"
lastCommitAt: "2026-08-08T04:32:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 64
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7d389c51d2cb47e90fb645be4dc321bb9f70a409d5b2a33228ec582f7a45aa2f/borestad/static-binaries"
---

# static-binaries

**Common static (x64 gnu) binaries & utils used in CI-pipelines**

- Stripped
- Compressed with [UPX v4](https://github.com/upx/upx) when applicable
- Prefer musl over gnu
- Tested in Ubuntu/Debian/Alpine/AlmaLinux
- Prefer new version over backward compatibility

**Motivation:**

- Keep things in _one_ place
- Different binaries releases have different names & compression tools, i.e .zip , \*.tgz , .tar.gz , .lzt , .deb etc
- Compressed binaries are great for slimming down containers.
- apt-get/linuxbrew/go get/cargo is too slow

**TODO:**

- Keep versioning

## License notices

Third-party notices live in [THIRD_PARTY_NOTICES.md](https://github.com/borestad/static-binaries/blob/HEAD/THIRD_PARTY_NOTICES.md).
Binaries with bundled third-party notice requirements also have adjacent
`<binary>.LICENSE.txt` sidecars in `x86_64/` and, when applicable,
`x86_64-upx/`.

## 📦 Available Binaries

> **Last updated:** 2026-08-08 04:32 UTC
>
> **Total size:** x86\_64 → 1.0 GiB · x86\_64-upx → 333.3 MiB

| Binary (plain) | Binary (UPX compressed) |
|---|---|
| [agrind](https://raw.githubusercontent.com/borestad/static-binaries/main/x86_64/agrind)<br/><sub>`a7c53810f863` ·…
