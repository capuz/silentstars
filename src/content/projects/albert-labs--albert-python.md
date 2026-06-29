---
repo: "albert-labs/albert-python"
name: "albert-python"
description: "The official Python SDK for the Albert Invent platform."
url: "https://github.com/albert-labs/albert-python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 3
openIssues: 9
closedIssues: 34
watchers: 3
contributors: 30
recentReleases: 0
createdAt: "2024-08-06T17:12:33Z"
lastCommitAt: "2026-06-29T07:21:55Z"
lastReleaseAt: "2025-05-28T15:11:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 71
maintainers: ["prasad-albert", "release-catalyst[bot]", "sbernasek"]
openGraphImageUrl: "https://opengraph.githubassets.com/6266686aa408cf82ffde11cdfc1c29235b764faff064c3ba69c083a62fd806b0/albert-labs/albert-python"
---

# Albert Python SDK

Albert Python is the official Albert Invent Software Development Kit (SDK) for Python
that provides a comprehensive and easy-to-use interface for interacting with the Albert Platform.
The SDK allows Python developers to write software that interacts with various platform resources,
such as inventories, projects, companies, tags, and many more.
You can find the latest, most up-to-date documentation
on the supported resources and usage patterns [here](https://docs.developer.albertinvent.com/albert-python).

## Installation

`pip install albert`

This installs the latest stable release from [PyPI](https://pypi.org/project/albert/).

### Contribution

For developers, please see the [contributing guide](CONTRIBUTING.md), which includes setup instructions, testing, and linting guidelines.

## Quick Start

```python

from albert import Albert

client = Albert.from_client_credentials(
    base_url="https://app.albertinvent.com",
    client_id=YOUR_CLIENT_ID,
    client_secret=YOUR_CLIENT_SECRET
)
projects = client.projects.get_all()

```

## Documentation

[Full Documentation can be found here](https://docs.developer.albertinvent.com/albert-python/latest/)
