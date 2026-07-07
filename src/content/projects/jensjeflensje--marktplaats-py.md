---
repo: "jensjeflensje/marktplaats-py"
name: "marktplaats-py"
description: "Small Python package to request listings & users from marktplaats.nl"
readmeQualityOk: true
url: "https://github.com/jensjeflensje/marktplaats-py"
homepage: "https://pypi.org/project/marktplaats/"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["library", "marktplaats", "package", "python", "scraping"]
stars: 68
forks: 15
openIssues: 3
closedIssues: 15
watchers: 4
contributors: 6
recentReleases: 1
createdAt: "2023-02-03T18:31:16Z"
lastCommitAt: "2026-07-07T06:39:24Z"
lastReleaseAt: "2026-05-17T18:42:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 55
maintainers: ["renovate[bot]", "pre-commit-ci[bot]", "GideonBear"]
openGraphImageUrl: "https://opengraph.githubassets.com/51aca18f0dc18728e955129cd252be553f4fd4de82eae1adaf328b1ba74c8ec2/jensjeflensje/marktplaats-py"
---

# marktplaats-py
A small Python package to request listings from marktplaats.nl. It supports python 3.10+.

## Installing
```shell
pip install marktplaats
```

## Example
This is an example on how to use the library:
```py
from datetime import datetime, timedelta

from marktplaats import Condition, SearchQuery, SortBy, SortOrder, category_from_name

search = SearchQuery(
    query="gazelle",  # Search query. Can be left out, but then category must be specified.
    zip_code="1016LV",  # Zip code to base distance from
    distance=100000,  # Max distance from the zip code for listings
    price_from=0,  # Lowest price to search for
    price_to=100,  # Highest price to search for
    limit=5,  # Max listings (page size, max 100)
    offset=0,  # Offset for listings (page * limit)
    sort_by=SortBy.OPTIMIZED,  # DATE, PRICE, LOCATION, OPTIMIZED
    sort_order=SortOrder.ASC,  # ASCending or DESCending
    condition=Condition.NEW,  # NEW, AS_GOOD_AS_NEW, USED or category-specific
    offered_since=datetime.now() - timedelta(days=7),  # Filter listings since a point in time
    category=category_from_name("Fietsen en Brommers"),  # Filter in specific category (L1) or subcategory (L2)…
