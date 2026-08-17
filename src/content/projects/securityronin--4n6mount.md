---
repo: "SecurityRonin/4n6mount"
name: "4n6mount"
description: "Mount forensic disk images, archives & memory dumps as a filesystem on Linux/macOS/Windows — ext4/NTFS/exFAT/HFS+/APFS/ISO, EWF/VMDK/AFF4, AD1, zip/7z/tar, LiME/AVML/crash dumps. FUSE + Dokan, ro/rw COW overlay, deleted-file browsing, NSRL filtering. Pure Rust, Apache-2.0."
readmeQualityOk: true
url: "https://github.com/SecurityRonin/4n6mount"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["dfir", "digital-forensics", "disk-image", "evidence-analysis", "filesystem", "forensics", "fuse", "incident-response", "pure-rust", "rust"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-06T18:06:43Z"
lastCommitAt: "2026-08-17T04:19:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["h4x0r"]
openGraphImageUrl: "https://opengraph.githubassets.com/09d95b4849062106e94d74a0ea3cf08e26fbefcefc0b71f5429afd3e851c23cb/SecurityRonin/4n6mount"
---

# 4n6mount

**Mount forensic images as a filesystem. Browse evidence like files. Write without touching the original.**

One command turns a forensic disk image — or an archive, or a **memory dump** — into a mounted filesystem with read-only evidence access, a writable copy-on-write overlay, deleted file recovery, forensic timelines, and hash-based filtering, all without modifying a single byte of the original. Disk filesystems (ext4, NTFS, exFAT, HFS+, APFS, ISO9660), EWF/VMDK/AFF4 containers, AccessData AD1 and AFF4-Logical images, zip/7z/tar archives, and memory dumps all mount through one command.

## Why this exists

Forensic examiners spend too much time on tooling friction:

- **Mounting images read-only** works, but you can't run grep, save notes, or pipe output to files on the same mount
- **Copying evidence** breaks chain of custody and wastes disk space
- **GUI-only tools** don't fit into scripted workflows or CI pipelines
- **Known-good file filtering** requires separate tools with separate hash databases

4n6mount solves all of these. Mount once. Browse evidence in `ro/`. Run analysis tools against `rw/` (writes go to a sidecar, never the image). Filter out OS noise…
