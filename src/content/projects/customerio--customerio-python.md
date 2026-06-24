---
repo: "customerio/customerio-python"
name: "customerio-python"
description: "Official Python Client for the customer.io API"
url: "https://github.com/customerio/customerio-python"
homepage: "https://customer.io/docs/api/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["python", "customerio"]
stars: 65
forks: 42
openIssues: 0
closedIssues: 27
watchers: 31
contributors: 161
recentReleases: 9
createdAt: "2012-10-29T21:23:52Z"
lastCommitAt: "2026-06-24T00:25:38Z"
lastReleaseAt: "2023-05-08T21:22:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 59
maintainers: ["hownowstephen", "avigoldman", "clabland"]
openGraphImageUrl: "https://opengraph.githubassets.com/7638365f46d5829a0704b483af8a6fa23eaffd9775283b65a69b51eb407550ee/customerio/customerio-python"
---

</a>
</p>

![PyPI](https://img.shields.io/pypi/v/customerio)
![Software License](https://img.shields.io/github/license/customerio/customerio-python)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/customerio)
![PyPI - Downloads](https://img.shields.io/pypi/dm/customerio)

# Customer.io Python

This module is tested with Python 3.10 through 3.14. If you're new to Customer.io, we recommend that you integrate with our [Data Pipelines Python library](https://github.com/customerio/cdp-analytics-python) instead.

## Installing

```bash
pip install customerio
```

## Usage

```python
from customerio import CustomerIO, Regions
cio = CustomerIO(site_id, api_key, region=Regions.US)
cio.identify(id="5", email='customer@example.com', name='Bob', plan='premium')
cio.track(customer_id="5", name='purchased')
cio.track(customer_id="5", name='purchased', data={"price": 23.45})
```

### Instantiating customer.io object

Create an instance of the client with your [Customer.io credentials](https://fly.customer.io/settings/api_credentials).

```python
from customerio import CustomerIO, Regions
cio = CustomerIO(site_id, api_key, region=Regions.US)
```
`region` is optional and takes one…
