---
repo: "MedShift/bigc"
name: "bigc"
description: "Unofficial Python client for the BigCommerce API"
readmeQualityOk: true
url: "https://github.com/MedShift/bigc"
homepage: "https://pypi.org/project/bigc/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["pypi", "bigcommerce", "python", "sdk"]
stars: 9
forks: 14
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2022-04-22T17:32:56Z"
lastCommitAt: "2026-11-02T15:16:59Z"
lastReleaseAt: "2022-08-23T17:32:25Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 91
undervaluedScore: 70
maintainers: ["r-thomson", "dependabot[bot]", "AndriiHrimov"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea300a26b5c6f0e2b3bb1f6f4158f40efb1ee23428acd69413097750a99a7d58/MedShift/bigc"
---

# bigc

An unofficial Python client for the BigCommerce API.

## Installation

```shell
pip install bigc
```

## Usage

To authenticate, you'll need the BigCommerce store's hash and an access token.

```python
from bigc import BigCommerceAPI

store_hash = '000000000'
access_token = '0000000000000000000000000000000'
bigcommerce = BigCommerceAPI(store_hash, access_token)

order = bigcommerce.orders_v2.get(101)
list_of_orders = list(bigcommerce.orders_v2.all(params={'customer_id': 1}))
```

The following resources are currently supported:

- `carts_v3`
- `categories_v3`
- `checkouts_v3`
- `currencies_v2`
- `customers_v3`
- `customer_groups_v2`
- `orders_v2`
- `orders_v3`
- `pricing_v3`
- `products_v3`
- `product_variants_v3`
- `webhooks_v3`

### Exceptions

If a request is not successful, `bigc` will raise an exception inheriting from `BigCommerceException`. The full exception hierarchy is available in `bigc.exceptions`. Most exceptions correspond to a specific status code (e.g. `DoesNotExistError` will be raised for 404s).

If BigCommerce provides an error message in its response, it will be available as `exc.message`. More detailed error information may be available as…
