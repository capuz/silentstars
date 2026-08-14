---
repo: "chathamabate/fern-os"
name: "fern-os"
description: "A 32-bit x86 Hobby Operating System"
readmeQualityOk: true
url: "https://github.com/chathamabate/fern-os"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 34
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-10-21T21:59:03Z"
lastCommitAt: "2026-08-14T05:15:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 78
undervaluedScore: 33
maintainers: ["chathamabate"]
openGraphImageUrl: "https://opengraph.githubassets.com/c41e585a8c8579912f4a58cf4c32b8b81a12c24e91178739464f64aac336d5bd/chathamabate/fern-os"
fundingLinks: ["GITHUB:https://github.com/chathamabate"]
---

# FernOS

A hobby 32-bit x86 operating system.

### Building and Running

To run code, edit `src/u_startup/main.c`. This file contains the main function of the first 
user process.

To create more processes and perform other system operations, 
see `src/u_startup/include/u_startup/syscall.h` and `src/u_startup/include/u_startup/syscall_fs.h`.

```bash
# Build and run FernOS in qemu
make run

# Clean all build artifacts
make clean
```

### Requirements

The above `make` commands will only succeed if you have the `i686-elf-binutils`, `qemu`, and `mtools`.

### Contributing

Earlier in this project I'd merge in large branches in entirety. I have decided to move away from
this strategy due to high number of commits.

Feature branches should be small and clear. Branches should be squashed before being merged.
