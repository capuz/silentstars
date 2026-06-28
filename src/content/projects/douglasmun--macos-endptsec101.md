---
repo: "douglasmun/macos-endptsec101"
name: "macos-endptsec101"
description: "macOS security monitoring project built on Apple's Endpoint Security C API"
url: "https://github.com/douglasmun/macos-endptsec101"
language: "C"
languages: ["C"]
languagePcts: [92]
topics: ["endpoint-security", "macos"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-06T19:28:58Z"
lastCommitAt: "2026-06-28T06:55:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 19
maintainers: ["douglasmun"]
openGraphImageUrl: "https://opengraph.githubassets.com/a63041a11c705be5ebc193423c3b9b2ac7072e7a1016be3261384877df9438ea/douglasmun/macos-endptsec101"
---

# macos-endptsec101

A chapter-by-chapter macOS security monitoring project built on Apple's [Endpoint Security](https://developer.apple.com/documentation/endpointsecurity) C API — a deliberate analog of [ebpf101](https://github.com/douglasmun/ebpf101), which teaches the same lessons through Linux eBPF.

If you have worked through ebpf101 and want to understand how macOS kernel security works at the same depth, this is that project. If you are coming fresh, it stands alone — but the comparison to eBPF is woven into every chapter because the contrast is where the real learning lives.

---

## The premise

eBPF and Endpoint Security are solving the same problem from opposite directions.

eBPF gives you a programmable hook inside the Linux kernel. You write a small program, load it with the `bpf()` syscall, and it runs at tracepoints, kprobes, or LSM hooks — observing or intercepting system calls with minimal overhead. The power is raw and the surface is enormous, but so is the boilerplate. ebpf101 spends eight chapters just reaching full `execsnoop` output because every step is explicit: ring buffers, perf maps, CO-RE relocation, argv double-pointer walks. You earn each piece of the…
