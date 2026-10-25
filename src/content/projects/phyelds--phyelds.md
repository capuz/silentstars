---
repo: "phyelds/phyelds"
name: "phyelds"
description: "🐍 Aggregate computing, reimagined for Python. Develop adaptive, distributed systems with ease."
readmeQualityOk: true
url: "https://github.com/phyelds/phyelds"
homepage: "https://phyelds.github.io/phyelds/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["collective-adaptive-systems", "collective-intelligence", "distributed-systems", "internet-of-things", "large-scale-systems", "swarm-robotics"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-08T08:16:52Z"
lastCommitAt: "2026-10-25T09:00:49Z"
lastReleaseAt: "2025-05-13T17:24:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 76
maintainers: ["cric96", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4bc81370157d6c9b4de1647a722828ffdd2f436cb5dcaafe66123c061cf063f/phyelds/phyelds"
---

Lightweight, pythonic aggregate computing & field calculus toolkit for building, simulating, and experimenting with large scale distributed systems.

**[Documentation](https://phyelds.github.io/phyelds/)** ·
**[Tutorial](https://phyelds.github.io/phyelds/tutorial/)** ·
**[Playground](https://phyelds.github.io/phyelds/playground/)** ·
**[API reference](https://phyelds.github.io/phyelds/reference/calculus/)**

---

You write **one function** for a whole collective (a swarm of robots, a sensor
network, a fleet of devices) and every device runs it in rounds, exchanging values
only with its neighbors. Global behaviour emerges from local state and local
communication, and the library stays small enough to read in an afternoon.

## Installation

```bash
pip install phyelds                         # core: the calculus and the libraries
pip install phyelds-simulator               # the simulator, with a compatible phyelds
pip install "phyelds-simulator[jupyter]"    # live rendering inside Jupyter
pip install phyelds-vmas                    # VMAS integration
pip install phyelds-mesa                    # Mesa integration
pip install phyelds-webots                  # Webots integration
```…
