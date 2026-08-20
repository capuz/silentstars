---
repo: "vmactions/netbsd-vm"
name: "netbsd-vm"
description: "Test your code in a real NetBSD virtual machine on GitHub Actions -- QEMU-powered, with SSH and two-way folder sync"
readmeQualityOk: true
url: "https://github.com/vmactions/netbsd-vm"
homepage: "https://vmactions.org"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["bsd", "ci", "github-actions", "netbsd", "qemu", "testing", "virtual-machine", "vm"]
stars: 35
forks: 3
openIssues: 2
closedIssues: 24
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-12-25T01:27:15Z"
lastCommitAt: "2026-08-20T04:08:18Z"
lastReleaseAt: "2022-11-05T11:02:56Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 60
maintainers: ["github-actions[bot]", "neilpang"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4a193076d054a04a20cdbf308be2e809f11ba8cb318872a4856272ae0ec86da/vmactions/netbsd-vm"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/vmactions"]
---

# Run GitHub CI in NetBSD 

See all the supported VMs: [VMActions.org](https://vmactions.org)

Powered by [AnyVM.org](https://anyvm.org)

## :robot: AI Ready

> [!TIP]
> **You don't need to write this workflow by hand.**
>
> These VMs are now AI-ready. With the **[vmactions-ci skill](https://github.com/vmactions/vmactions-skill)**, an AI coding agent -- Claude Code, Codex, Copilot CLI, Gemini CLI, and others -- understands the full vmactions interface and writes the GitHub Actions CI for you, **automatically**.
>
> Just describe what you want in plain language, e.g. *"run my tests on NetBSD"* or *"check that my project builds on NetBSD aarch64"*, and the agent generates a correct, ready-to-commit `test.yml`. It will:
>
> - pick the right action, `release`, and `arch` for your target;
> - install your toolchain and dependencies in the `prepare` step;
> - forward your secrets and environment variables into the VM;
> - sync your source code in and back out; and
> - steer around the common footguns -- the per-OS default shell, the `riscv64` sync method, keeping `runs-on: ubuntu-latest` even for other arches, pinning the action version, and more.
>
> No need to memorize releases,…
