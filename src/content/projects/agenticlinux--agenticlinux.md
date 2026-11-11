---
repo: "agenticlinux/agenticlinux"
name: "agenticlinux"
description: "An agentic distro with OpenClaw, llmman, Docker Sandboxes and Docker Engine pre-installed"
readmeQualityOk: true
url: "https://github.com/agenticlinux/agenticlinux"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [58, 40]
stars: 47
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-13T18:25:39Z"
lastCommitAt: "2026-11-11T11:21:43Z"
lastReleaseAt: "2026-09-28T12:53:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 44
maintainers: ["ericcurtin", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c08c4bedd62234d6f2278d6a6947734e173941a42fae7665f7fcad439835dcd2/agenticlinux/agenticlinux"
---

A Linux desktop built for working with AI agents. Everything is there on
first boot: the `claude`, `codex`, `opencode`, `openclaw` and `goose` agents,
[herdr](https://herdr.dev) to run them side by side,
[CodexBar](https://codex.bar) to keep an eye on their usage limits, the
[ChatGPT](https://learn.chatgpt.com/docs/app) (with Codex),
[OpenCode](https://opencode.ai) and [Goose](https://goose-docs.ai) desktop
apps, Google Chrome,
[llmman](https://github.com/llmmanorg/llmman) to run models locally or connect
any agent to any provider, [Docker Engine](https://docs.docker.com/engine/)
(rootful and [rootless](https://docs.docker.com/engine/security/rootless/)) and
[Docker Sandboxes](https://docs.docker.com/ai/sandboxes/) to run agents in
isolation, [QEMU](https://www.qemu.org) with KVM for full virtual machines,
GPU runtimes for Vulkan, ROCm and NVIDIA/CUDA, and a full developer
toolset.

AgenticLinux is a [bootc](https://bootc-dev.github.io/bootc/) image: the whole
OS ships as a container, so updates are atomic and rollback is one command.
It is built from Fedora 45 (or Fedora 44) packages on the
[fedora-ostree-desktops](https://quay.io/organization/fedora-ostree-desktops)
images, or…
