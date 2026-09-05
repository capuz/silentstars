---
repo: "A3S-Lab/a3s"
name: "a3s"
description: "AI Native Operating System"
readmeQualityOk: true
url: "https://github.com/A3S-Lab/a3s"
homepage: "https://a3s-lab.github.io/a3s/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 14
forks: 3
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-02-05T13:32:34Z"
lastCommitAt: "2026-09-05T07:47:46Z"
lastReleaseAt: "2026-08-20T14:10:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["ZhiXiao-Lin"]
openGraphImageUrl: "https://opengraph.githubassets.com/b156c5dfff193b8d81bef52afa4c8b34d7a6bc8ced6f3022df6f6f698caa80c6/A3S-Lab/a3s"
---

</p>

</p>

</p>

A3S is an open-source, local-first runtime platform for building, running, and
operating agent work. One interface connects sessions, models, tools,
permissions, durable workflows, isolated execution, and Cloud operations while
keeping authority boundaries and external dependencies explicit.

Start with one local Code session. Add capabilities, orchestration, isolation,
inference, or fleet control only when the work requires them.

> [!IMPORTANT]
> This repository is the reviewed integration snapshot for independently
> versioned A3S products. Most components are pinned here as git submodules;
> the root owns installers, orchestration, compatibility locks, and shared
> documentation. It is not a Rust workspace or a second copy of each product.

## Start local

Install the stable CLI on macOS or glibc Linux, enter a project, and launch an
interactive local session:

```bash
curl --proto '=https' --tlsv1.2 -LsSf \
  https://raw.githubusercontent.com/A3S-Lab/a3s/main/install.sh | sh

cd /path/to/project
a3s code
```

A model-backed session needs a configured provider or compatible local
account. Inspect and select the model explicitly:

```bash
a3s config init
a3s…
