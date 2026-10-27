---
repo: "eclipse-ankaios/ank-sdk-python"
name: "ank-sdk-python"
description: "Eclipse Ankaios Python SDK - provides a convenient Python interface for interacting with the Ankaios platform."
readmeQualityOk: true
url: "https://github.com/eclipse-ankaios/ank-sdk-python"
homepage: "https://eclipse-ankaios.github.io/ank-sdk-python/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ankaios", "automotive", "containers", "orchestration", "sdk", "python"]
stars: 9
forks: 4
openIssues: 8
closedIssues: 20
watchers: 4
contributors: 11
recentReleases: 0
createdAt: "2024-09-12T14:52:23Z"
lastCommitAt: "2026-10-27T12:39:53Z"
lastReleaseAt: "2026-03-13T09:43:58Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 88
undervaluedScore: 76
maintainers: ["GabyUnalaq", "dependabot[bot]", "meheraz1100"]
openGraphImageUrl: "https://opengraph.githubassets.com/926d4eaec43c1aac6f5a5bf2736ac6b9aa1e49e63e64768d28b03cd80d71decf/eclipse-ankaios/ank-sdk-python"
---

# Python SDK for Eclipse Ankaios

[Eclipse Ankaios](https://github.com/eclipse-ankaios/ankaios) provides workload and
container orchestration for automotive High Performance Computing Platforms (HPCs).
While it can be used for various fields of applications, it is developed from scratch
for automotive use cases and provides a slim yet powerful solution to manage
containerized applications.

The Python SDK provides easy access from the container (workload) point-of-view
to manage the Ankaios system. A workload can use the Python SDK to start, stop and
update other workloads and configs and get the state of the Ankaios system.

## Installation

### Install via pip

```sh
pip install ankaios-sdk
```

### Clone and Local Build

```sh
# Clone repository
git clone https://github.com/eclipse-ankaios/ank-sdk-python.git
cd ank-sdk-python

# Install in editable mode
pip install -e .

# If you plan on contributing or running tests locally
pip install -e ".[dev]"
```

> **Note:**  
> Depending on your Linux distribution, it could be that you need to create and
> activate a [virtual environment](https://docs.python.org/3/library/venv.html)
> to run the pip commands.

## Compatibility

Please…
