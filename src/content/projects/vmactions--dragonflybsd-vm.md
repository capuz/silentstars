---
repo: "vmactions/dragonflybsd-vm"
name: "dragonflybsd-vm"
description: "Test your code in a real DragonFly BSD virtual machine on GitHub Actions -- QEMU-powered, with SSH and two-way folder sync"
readmeQualityOk: true
url: "https://github.com/vmactions/dragonflybsd-vm"
homepage: "https://vmactions.org"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bsd", "ci", "dragonflybsd", "github-actions", "qemu", "testing", "virtual-machine", "vm"]
stars: 25
forks: 2
openIssues: 0
closedIssues: 25
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-07-24T16:16:22Z"
lastCommitAt: "2026-10-21T23:36:10Z"
lastReleaseAt: "2023-12-03T13:09:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 65
maintainers: ["github-actions[bot]", "neilpang"]
openGraphImageUrl: "https://opengraph.githubassets.com/4810e0bef6417a9d4290a185cc7a3c1250a0ad7ede76bf36256ab3f021b57ab4/vmactions/dragonflybsd-vm"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/vmactions"]
---

# Run GitHub CI in DragonflyBSD 

See all the supported VMs: [VMActions.org](https://vmactions.org)

Powered by [AnyVM.org](https://anyvm.org)

## :robot: AI Ready

> [!TIP]
> **You don't need to write this workflow by hand.**
>
> These VMs are now AI-ready. With the **[vmactions-ci skill](https://github.com/vmactions/vmactions-skill)**, an AI coding agent -- Claude Code, Codex, Copilot CLI, Gemini CLI, and others -- understands the full vmactions interface and writes the GitHub Actions CI for you, **automatically**.
>
> Just describe what you want in plain language, e.g. *"run my tests on DragonflyBSD"* or *"check that my project builds on DragonflyBSD aarch64"*, and the agent generates a correct, ready-to-commit `test.yml`. It will:
>
> - pick the right action, `release`, and `arch` for your target;
> - install your toolchain and dependencies in the `prepare` step;
> - forward your secrets and environment variables into the VM;
> - sync your source code in and back out; and
> - steer around the common footguns -- the per-OS default shell, the `riscv64` sync method, keeping `runs-on: ubuntu-latest` even for other arches, pinning the action version, and more.
>
> No need to…
