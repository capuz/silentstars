---
repo: "alexdlaird/amazon-orders"
name: "amazon-orders"
description: "A Python library (and CLI) for Amazon order history, line items, and transactions"
readmeQualityOk: true
url: "https://github.com/alexdlaird/amazon-orders"
homepage: "https://amazon-orders.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["amazon", "cli", "python", "order-history", "receipts", "web-scraping", "beautifulsoup", "transactions"]
stars: 200
forks: 60
openIssues: 1
closedIssues: 93
watchers: 6
contributors: 22
recentReleases: 0
createdAt: "2024-01-05T16:21:11Z"
lastCommitAt: "2026-10-25T22:10:47Z"
lastReleaseAt: "2024-01-18T14:33:17Z"
status: "thriving"
tags: ["funded"]
healthScore: 100
undervaluedScore: 45
maintainers: ["alexdlaird", "alexdlaird-bot[bot]", "benjamin-di"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/739464341/5a393905-ee40-432a-bbf7-02480fe5e732"
fundingLinks: ["GITHUB:https://github.com/alexdlaird", "PATREON:https://patreon.com/alexdlaird", "CUSTOM:https://www.paypal.me/alexdlaird"]
discussionCount: 2
---

`amazon-orders` is an unofficial library that provides a Python API (and CLI) for Amazon order history, line items, and transactions.

> **Note:** This package works by parsing data from Amazon's consumer-facing website. A periodic build validates
> functionality to ensure its stability, but as Amazon provides no official API to use, older versions of this
> package may break at any time, so it's recommended that you use the latest version.

## Installation

`amazon-orders` is available on [PyPI](https://pypi.org/project/amazon-orders/) and can be installed and/or upgraded using `pip`:

```sh
pip install amazon-orders --upgrade
```

That's it! `amazon-orders` is now available as a package to your Python projects and from the command line.

If pinning, be sure to use a wildcard for the [minor version](https://semver.org/) (e.g. `==5.2.*`, not `==5.2.0`) to
ensure you always get the latest stable release.

## Basic Usage

You'll use [`AmazonSession`](https://amazon-orders.readthedocs.io/api.html#amazonorders.session.AmazonSession) to
authenticate your Amazon account, then [`AmazonOrders`](https://amazon-orders.readthedocs.io/api.html#amazonorders.orders.AmazonOrders),…
