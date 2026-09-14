---
repo: "deepentropy/ibapi"
name: "ibapi"
description: "Automated publisher for the Interactive Brokers TWS API Python client on PyPI"
readmeQualityOk: true
url: "https://github.com/deepentropy/ibapi"
homepage: "https://deepentropy.github.io/ibapi/ibapi.html"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ib-tws-api", "interactive-brokers-api", "python"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-14T15:09:40Z"
lastCommitAt: "2026-09-14T09:12:26Z"
lastReleaseAt: "2026-05-25T10:33:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 47
maintainers: ["github-actions[bot]", "deepentropy", "osjayaprakash"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8d45a2841553fd8a55c02656d24deab30819bd768fd670f893323e9dc22cb84/deepentropy/ibapi"
---

# ibapi

Automated publisher for the Interactive Brokers TWS API Python client on PyPI.

## 📦 Installation

**Two packages available on PyPI:**

### Latest Version (Recommended)
```bash
pip install ibapi-latest
```

### Stable Version
```bash
pip install ibapi-stable
```

You can also install a specific version:
```bash
pip install ibapi-latest==10.40.01
pip install ibapi-stable==10.37.02
```

## 🚀 Usage

```python
from ibapi.client import EClient
from ibapi.wrapper import EWrapper
from ibapi.contract import Contract

class IBApp(EWrapper, EClient):
    def __init__(self):
        EClient.__init__(self, self)

app = IBApp()
app.connect("127.0.0.1", 7497, clientId=1)
app.run()
```

For complete examples and documentation, visit the [official IB API documentation](https://ibkrcampus.com/ibkr-api-page/).

## 📋 About This Package

This is an **unofficial** automated publisher for the Interactive Brokers TWS API Python client. The source code is from Interactive Brokers' official TWS API distribution, packaged and published to PyPI for easy installation.

> **⚠️ DISCLAIMER**
>
> This package is **NOT officially affiliated with, endorsed by, or supported by Interactive Brokers LLC**.…
