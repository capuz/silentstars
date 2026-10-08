---
repo: "medaminkh-dev/MAKH"
name: "MAKH"
description: "MAKH(MAKH Ain’t a Kernel Hack) is an experimental from-scratch operating system built for kernel architecture research, CPU meta-awareness models, and fuzzing-driven security experimentation."
readmeQualityOk: true
url: "https://github.com/medaminkh-dev/MAKH"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T22:26:00Z"
lastCommitAt: "2026-10-08T10:51:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a2a4ce4fa9aa5b6d3c44f809116f0878f1699e352e073e7a434a6cb5a7bae20/medaminkh-dev/MAKH"
---

```
 ███╗   ███╗ █████╗ ██╗  ██╗██╗  ██╗
 ████╗ ████║██╔══██╗██║ ██╔╝██║  ██║
 ██╔████╔██║███████║█████╔╝ ███████║
 ██║╚██╔╝██║██╔══██║██╔═██╗ ██╔══██║
 ██║ ╚═╝ ██║██║  ██║██║  ██╗██║  ██║
 ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
```

### An x86-64 kernel that tests itself — from the inside, in ring 0.

[Quick start](#-quick-start) · [Highlights](#-highlights) · [KFUZZ](#-kfuzz-the-kernel-fuzzes-itself) · [Architecture](#-architecture) · [Docs](#-documentation) · [License](#-license)

---

**MakhOS** is a from-scratch operating system kernel for x86-64, written in
freestanding C and assembly. It boots with GRUB, schedules threads
preemptively, speaks TCP/IP over a real NIC driver — and it carries its own
**coverage-guided fuzzer that attacks the kernel from inside ring 0**,
surviving the faults it provokes and printing the exact seed to reproduce
each one.

It is built **brick by brick**: every phase lands only when its tests are
green.

```console
MakhOS> ping 10.0.2.2 3
PING 10.0.2.2: 3 echo requests
reply from 10.0.2.2: seq=1 time=250 ms
reply from 10.0.2.2: seq=2 time=100 ms
reply from 10.0.2.2: seq=3 time=100 ms
--- 10.0.2.2: 3 sent, 3 received, 0% loss
MakhOS> fuzz netrx 300…
