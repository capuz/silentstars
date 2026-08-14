---
repo: "MonterraByte/libcdio-sys"
name: "libcdio-sys"
description: "Native bindings to the libcdio library"
readmeQualityOk: true
url: "https://github.com/MonterraByte/libcdio-sys"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2018-04-01T22:22:52Z"
lastCommitAt: "2026-08-14T05:14:23Z"
lastReleaseAt: "2023-01-11T17:02:57Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 64
maintainers: ["skr4n", "MonterraByte"]
openGraphImageUrl: "https://opengraph.githubassets.com/94a6e5d13db3a7025d5527dfb80b2ab6fdcbab3e816a14a99d117739e5244553/MonterraByte/libcdio-sys"
---

# libcdio-sys
Native bindings to the libcdio and libcdio-paranoia libraries

[libcdio homepage](https://www.gnu.org/software/libcdio/)  
[libcdio documentation](https://www.gnu.org/software/libcdio/libcdio.html)

# Usage
Run `cargo add libcdio-sys` to add the crate.

libcdio is split into multiple libraries: `libcdio`, `libiso9660` and
`libudf`. Likewise, libcdio-paranoia is split into `libcdio_cdda` and
`libcdio_paranoia`.

Cargo features are provided to control which libraries are included.

## Versioning
The crate's version reflects three things:
For example: `v3.0.0+2.4.0p2.0.2`.
- `v3.0.0`: Crate version
- `+2.4.0`: libcdio's version
- `p2.0.2`: libcdio-paranoia's version (`10.2+2.0.2` in this case)
Everything beyond the `+` is ignored by Cargo during resolution.

## Vendoring
Enable the `vendored` feature to always perform vendored builds.

If disabled, the crate will attempt to use the libraries from the
system before falling back to vendoring if that fails.
To force a non-vendored build, set the `LIBCDIO_NO_VENDOR` environment
variable.

Non-vendored builds use the version metadata as a lower bound
when probing the system, allowing any newer non-major version.
Thus, a…
