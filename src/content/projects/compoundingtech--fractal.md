---
repo: "compoundingtech/fractal"
name: "fractal"
description: "declarative agents, missions, and resources addressable and message-able from everywhere"
readmeQualityOk: true
url: "https://github.com/compoundingtech/fractal"
homepage: "https://fractal.how/"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
stars: 8
forks: 2
openIssues: 568
closedIssues: 336
watchers: 0
contributors: 8
recentReleases: 2
createdAt: "2026-07-24T07:33:39Z"
lastCommitAt: "2026-10-29T12:00:34Z"
lastReleaseAt: "2026-10-02T20:57:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 55
maintainers: ["myobie", "schickling-assistant"]
openGraphImageUrl: "https://opengraph.githubassets.com/e39f6b0f9353e939f82f4598d1369495f854bf23290e533718bcfb8a2d21b051/compoundingtech/fractal"
---

# Build your own software factory

Fractal is an open framework for building a software factory: a system that produces
software to meet a set of goals. Give your agents a mission with goals, constraints
and checks; durable agents carry it through and bring you the decisions that need you.

Use the `fractal` CLI to talk to your coding agents and follow their work.

```sh
curl --proto '=https' --tlsv1.2 -fsSL https://raw.githubusercontent.com/compoundingtech/fractal/main/install.sh | sh
```

The installer selects your platform, verifies the downloaded archive and opens `fractal`.
On the first run, choose your name and this machine's name, accept the background
service, and choose an installed coding harness. Before it starts, setup says that the
built-in Fractal Assistant runs an agent on your own harness account (using its usage and quota) and
asks; it then guides you through your first mission and stays available afterward. Nothing
is started on an installation that already has a configuration.

After quitting the interface with **Ctrl+Q**, open it again:

```sh
export PATH="$HOME/.local/bin:$PATH"
fractal
```

Supported platforms are Linux x86_64 with glibc 2.35+ (Ubuntu 22.04+)…
