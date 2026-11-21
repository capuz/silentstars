---
repo: "kalachbeg/Hearthscan"
name: "Hearthscan"
description: "Find out what is on your home network and what it exposes. Windows, macOS and Linux."
readmeQualityOk: true
url: "https://github.com/kalachbeg/Hearthscan"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cybersecurity", "network-security", "port-scanner", "python", "security", "cross-platform", "home-network", "iot-security", "lan", "network-scanner"]
stars: 241
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-18T13:56:22Z"
lastCommitAt: "2026-11-21T11:33:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 15
maintainers: ["kalachbeg"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcb9398869bed0ceced819be8baf3535a23a94a3e1fe011385f9964c3bda57bf/kalachbeg/Hearthscan"
discussionCount: 2
---

# Hearthscan

Hearthscan looks at the network in your home and tells you, in plain words, what is
on it and what those devices expose.

This is the 2.0 rewrite of the project that used to be called NetShark. It is not
finished yet: device discovery and the checks work, a proper terminal interface and the
desktop window come next.

Hearthscan only scans private networks (192.168.x.x, 10.x.x.x, 172.16-31.x.x and
link-local addresses). Public addresses are refused.

## Working on it

```sh
uv sync
uv run pytest
uv run hearthscan scan
uv run hearthscan scan --lang tr
uv run hearthscan net
uv run hearthscan devices
uv run hearthscan ports 192.168.1.1
```

## Contributing

Bug reports, ideas and pull requests are welcome. Start with
[CONTRIBUTING.md](https://github.com/kalachbeg/Hearthscan/blob/HEAD/CONTRIBUTING.md). Security problems go through
[SECURITY.md](https://github.com/kalachbeg/Hearthscan/blob/HEAD/SECURITY.md), not the issue tracker.

## Star history
