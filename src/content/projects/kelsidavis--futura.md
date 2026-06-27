---
repo: "Kelsidavis/futura"
name: "futura"
description: "A Modern Capability-Based Nanokernel Operating System"
url: "https://github.com/Kelsidavis/futura"
language: "C"
languages: ["C"]
languagePcts: [80]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-11T08:22:06Z"
lastCommitAt: "2026-06-27T06:24:27Z"
lastReleaseAt: "2026-03-10T10:07:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 66
maintainers: ["Kelsidavis"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cda5e0c6880d1d6e046d0650ea9bd21c86fb04785ca1682e9cb390f2d0558d7/Kelsidavis/futura"
---

# Futura OS

**A capability-first nanokernel OS with message-passing userland**

  <p><em>Rory the Ouroboros — Futura's self-contained, eternally evolving mascot</em></p>
</div>

Copyright © 2025 Kelsi Davis
Licensed under Mozilla Public License 2.0 — see [LICENSE](LICENSE)

---

## 🚀 Overview

Futura OS is a capability-based nanokernel that keeps the core minimal (time, scheduling, IPC, and hardware mediation) and pushes policy into userland services connected via FIPC (Futura Inter-Process Communication). The repository includes the kernel, userland services, host tooling, and test harnesses used to validate the end-to-end stack.

### Status Snapshot — v1.0.0 (May 16 2026)

- **Kernel core**: 400+ Linux-compatible syscalls across 260+ implementation files, 280K+ lines of kernel C. PI futex, OOM killer, seccomp-BPF filter chaining, POSIX file locking, real xattr per-vnode, mprotect PROT_NONE, rlimit enforcement (6 limits), ChaCha20 CSPRNG, kernel_oops(), pivot_root(), CLONE_NEWPID/NEWTIME, mremap MAYMOVE, SA_RESTART signals, epoll thread safety, SCM_RIGHTS fd passing, PMM double-free detection.
- **Testing**: **2659 automated kernel self-tests** across 11 test groups, with…
