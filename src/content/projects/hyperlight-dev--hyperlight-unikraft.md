---
repo: "hyperlight-dev/hyperlight-unikraft"
name: "hyperlight-unikraft"
description: "Run Unikraft unikernels on Hyperlight"
url: "https://github.com/hyperlight-dev/hyperlight-unikraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 14
forks: 4
openIssues: 17
closedIssues: 6
watchers: 1
contributors: 6
recentReleases: 7
createdAt: "2026-05-09T15:25:04Z"
lastCommitAt: "2026-06-26T23:42:26Z"
lastReleaseAt: "2026-06-17T13:15:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 47
maintainers: ["danbugs", "cachebag", "squillace"]
openGraphImageUrl: "https://opengraph.githubassets.com/7338fcf2eaa20f8ac7f8fb65274462e780801480477238cfee95f83ebc39ea42/hyperlight-dev/hyperlight-unikraft"
---

<h1>Hyperlight</h1>
    <p><strong>Hyperlight is a lightweight Virtual Machine Manager (VMM) designed to be embedded within applications. It enables safe execution of untrusted code within <i>micro virtual machines</i> with very low latency and minimal overhead.</strong> <br> We are a <a href="https://cncf.io/">Cloud Native Computing Foundation</a> sandbox project. </p>
</div>

# hyperlight-unikraft

Run [Unikraft](https://unikraft.org/) unikernels on [Hyperlight](https://github.com/hyperlight-dev/hyperlight), a lightweight Virtual Machine Manager (VMM) designed for embedded use within applications.

## Overview

This project enables running Linux applications (Python, Node.js, Go, Rust, C/C++) on Hyperlight micro-VMs using Unikraft as the guest kernel. It provides:

1. **hyperlight-unikraft** - A CLI host that loads and runs Unikraft kernels on Hyperlight
2. **Example configurations** - Ready-to-use kraft configs for building various applications

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│  Your Application (Python, Node.js, Go, Rust, C/C++)         │
│  (runs as ELF binary inside the VM)                          │…
