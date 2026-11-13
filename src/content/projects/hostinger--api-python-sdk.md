---
repo: "hostinger/api-python-sdk"
name: "api-python-sdk"
description: "Hostinger API Python SDK"
readmeQualityOk: true
url: "https://github.com/hostinger/api-python-sdk"
homepage: "https://developers.hostinger.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["api", "hostinger", "python", "sdk", "tools"]
stars: 32
forks: 9
openIssues: 0
closedIssues: 2
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2025-04-08T07:26:08Z"
lastCommitAt: "2026-11-13T11:18:22Z"
lastReleaseAt: "2025-04-14T12:08:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 62
maintainers: ["hostingerbot[bot]", "aurimasbutkus", "zygintas"]
openGraphImageUrl: "https://opengraph.githubassets.com/e180618f41adb9ac8f6477c19aded30f2180ca7538e83b7cb611f4e53dcefbe4/hostinger/api-python-sdk"
---

# Hostinger API Python SDK

## About
This is a Python SDK for the [Hostinger API](https://developers.hostinger.com).

For more information, please visit [https://developers.hostinger.com](https://developers.hostinger.com).

## Requirements.

Python 3.11+

## Installation & Usage
### pip install

Setup new virtual environment (optional but recommended):
```sh
python3 -m venv venv
source venv/bin/activate
```

Install the package via [pip](https://pypi.org/project/pip/):
```sh
pip install hostinger_api
```

Then import the package:
```python
import hostinger_api
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import hostinger_api
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import hostinger_api
from hostinger_api.rest import ApiException
from pprint import pprint

# Configure Bearer authorization: apiToken
configuration = hostinger_api.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a…
