---
repo: "vdavid/smb2"
name: "smb2"
description: "Pure-Rust SMB2/3 client. Faster than native macOS SMB on all operations. No C dependencies."
readmeQualityOk: true
url: "https://github.com/vdavid/smb2"
homepage: "https://docs.rs/smb2"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cifs", "file-transfer", "nas", "network", "rust", "samba", "smb", "smb2", "smb3"]
stars: 27
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-08T01:45:06Z"
lastCommitAt: "2026-08-01T06:14:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 25
maintainers: ["vdavid"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8dc4d654f868dfff4b23ae77b7eedd1a5d1fe0dd4a57688ab9148732da6ccd1/vdavid/smb2"
---

# smb2

A pure-Rust SMB2/3 client library with pipelined I/O. No C dependencies, no FFI. Faster than native macOS SMB in all
operations: 1.3-5x faster on uploads, downloads, listings, and deletes.

I built this because I needed fast SMB access for [Cmdr](https://github.com/vdavid/cmdr) (my file manager), and the
existing Rust SMB options weren't good enough. The `smb` crate works fine for listing files but downloads are painfully
slow because it sends one read at a time. Native OS SMB clients pipeline their reads, and so does this library, and here
we have more control to reach even better speeds.

**Why this matters:**

- Cross-compile without system lib headaches (no `libsmbclient`, no `-sys` crates)
- Pipelined I/O by default, not as an afterthought
- Async and runtime-agnostic (uses `futures` traits)
- Works anywhere Rust compiles

## What it does

- Connect to SMB2/3 shares using NTLM or Kerberos authentication
- List directories, read files, write files, delete, rename, stat, create directories
- Compound requests (CREATE+READ+CLOSE in 1 round-trip, 4-way write compounds, compound delete/rename/stat)
- Batch operations (delete, rename, stat multiple files -- all requests…
