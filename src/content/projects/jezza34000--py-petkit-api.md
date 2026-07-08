---
repo: "Jezza34000/py-petkit-api"
name: "py-petkit-api"
description: "Petkit client API library"
readmeQualityOk: true
url: "https://github.com/Jezza34000/py-petkit-api"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["api", "client-api", "petkit", "smartdevices"]
stars: 40
forks: 13
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2024-12-08T20:24:55Z"
lastCommitAt: "2026-07-08T05:46:58Z"
lastReleaseAt: "2024-12-14T20:12:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["Jezza34000", "renovate[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfa87b95321bafeed44620b10375907e2a72ba7941043711fe5897ad4a463a93/Jezza34000/py-petkit-api"
---

# Petkit API Client

---

---

---

[pypi_]: https://pypi.org/project/pypetkitapi/
[python version]: https://pypi.org/project/pypetkitapi
[pre-commit]: https://github.com/pre-commit/pre-commit
[black]: https://github.com/psf/black

### Enjoying this library?

---

## ℹ️ Overview

PetKit Client is a Python library for interacting with the PetKit API. It allows you to manage your PetKit devices, retrieve account data, and control devices through the API.

## 🚀 Features

- Login and session management
- Fetch account and device data
- Control PetKit devices (Feeder, Litter Box, Water Fountain, Purifiers)
- Fetch images & videos produced by devices
  > Pictures are available **with or without** Care+ subscription, Videos are only available **with** Care+ subscription

## ⬇️ Installation

Install the library using pip:

```bash
pip install pypetkitapi
```

## 💡 Usage :

Here is a simple example of how to use the library to interact with the PetKit API \
This example is not an exhaustive list of all the features available in the library.

```python
import asyncio
import logging
import aiohttp
from pypetkitapi.client import PetKitClient
from pypetkitapi.command import DeviceCommand,…
