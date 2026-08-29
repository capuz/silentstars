---
repo: "hawkw/flake"
name: "flake"
description: "eliza's entire computer: the git repo"
readmeQualityOk: true
url: "https://github.com/hawkw/flake"
language: "Nix"
languages: ["Nix"]
languagePcts: [99]
stars: 26
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-12-20T22:23:59Z"
lastCommitAt: "2026-08-29T17:27:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 50
maintainers: ["hawkw"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3815a5f2d1d660de225822527e23ad69de0fad56f4040543a9939b3eee2ce2e/hawkw/flake"
---

# eliza's big nix flake

## layout

- [`hosts/`](https://github.com/hawkw/flake/blob/HEAD/hosts) &mdash; per-machine configuration
    + [`hosts/clavius/`](https://github.com/hawkw/flake/blob/HEAD/hosts/clavius) &mdash; **clavius**: Raspberry Pi 4 (ECLSS node)
    + [`hosts/hekate/`](https://github.com/hawkw/flake/blob/HEAD/hosts/hekate) &mdash; **hekate**: engineering server (AMD, Supermicro X11/X12)
    + [`hosts/noctis/`](https://github.com/hawkw/flake/blob/HEAD/hosts/noctis) &mdash; **noctis**: desktop workstation (AMD Ryzen 3900X)
    + [`hosts/tereshkova/`](https://github.com/hawkw/flake/blob/HEAD/hosts/tereshkova) &mdash; **tereshkova**: infrastructure server
    + [`hosts/theseus/`](https://github.com/hawkw/flake/blob/HEAD/hosts/theseus) &mdash; **theseus**: Framework 13 (AMD Ryzen 7840U)
    + [`hosts/tycho/`](https://github.com/hawkw/flake/blob/HEAD/hosts/tycho) &mdash; **tycho**: Raspberry Pi 4 (ECLSS node)
- [`lib/`](https://github.com/hawkw/flake/blob/HEAD/lib)  &mdash; reusable nix utilities
- [`modules/`](https://github.com/hawkw/flake/blob/HEAD/modules) &mdash; modules used by system configurations
    +…
