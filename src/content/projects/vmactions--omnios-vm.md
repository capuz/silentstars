---
repo: "vmactions/omnios-vm"
name: "omnios-vm"
description: "Test your code in a real OmniOS virtual machine on GitHub Actions -- QEMU-powered, with SSH and two-way folder sync"
readmeQualityOk: true
url: "https://github.com/vmactions/omnios-vm"
homepage: "https://vmactions.org"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["ci", "github-actions", "illumos", "omnios", "qemu", "testing", "virtual-machine", "vm"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-12-04T20:46:59Z"
lastCommitAt: "2026-08-20T04:09:28Z"
lastReleaseAt: "2024-11-08T18:53:26Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 69
maintainers: ["github-actions[bot]", "neilpang"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c5ef0bf8327cfbef30b2920edc9cf5eff5d3f1cce6c4f04e0b40f23cd592965/vmactions/omnios-vm"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/vmactions"]
---

# Run GitHub CI in OmniOS 

See all the supported VMs: [VMActions.org](https://vmactions.org)

Powered by [AnyVM.org](https://anyvm.org)

## :robot: AI Ready

> [!TIP]
> **You don't need to write this workflow by hand.**
>
> These VMs are now AI-ready. With the **[vmactions-ci skill](https://github.com/vmactions/vmactions-skill)**, an AI coding agent -- Claude Code, Codex, Copilot CLI, Gemini CLI, and others -- understands the full vmactions interface and writes the GitHub Actions CI for you, **automatically**.
>
> Just describe what you want in plain language, e.g. *"run my tests on OmniOS"* or *"check that my project builds on OmniOS aarch64"*, and the agent generates a correct, ready-to-commit `test.yml`. It will:
>
> - pick the right action, `release`, and `arch` for your target;
> - install your toolchain and dependencies in the `prepare` step;
> - forward your secrets and environment variables into the VM;
> - sync your source code in and back out; and
> - steer around the common footguns -- the per-OS default shell, the `riscv64` sync method, keeping `runs-on: ubuntu-latest` even for other arches, pinning the action version, and more.
>
> No need to memorize releases,…
