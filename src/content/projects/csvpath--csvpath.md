---
repo: "csvpath/csvpath"
name: "csvpath"
description: "Data Engineering infrastructure that controls inbound tabular data file feeds and validates data contracts"
readmeQualityOk: true
url: "https://github.com/csvpath/csvpath"
homepage: "https://www.csvpath.org"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bronze-layer", "csv", "csv-validation", "csv-validator", "data", "data-contracts", "dataengineering", "excel", "flatfile", "jsonl"]
stars: 18
forks: 3
openIssues: 63
closedIssues: 43
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2024-06-24T21:45:12Z"
lastCommitAt: "2026-11-16T04:21:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 61
maintainers: ["dk107dk"]
openGraphImageUrl: "https://opengraph.githubassets.com/7396b3800997e9aea180fd21fb193eabdd7f19c3b3685a265ab6d714b43a0880/csvpath/csvpath"
---

# <a href='https://www.csvpath.org/'><img src='https://github.com/csvpath/csvpath/blob/main/docs/images/logo-wordmark-4.svg'/></a>

## Make Data Ingestion Higher Quality, Lower Risk, and More Agile

#### CsvPath Framework closes the gap between data arrived and data trusted with a purpose-built, open source solution for validating and staging inbound data files, python objects, and data frames from external data partners.

*See it running in 30 seconds*

```bash
    pip install csvpath
```

Check the headers in `myorders.csv`.

```python
from csvpath import CsvPath

CsvPaths().fast_forward("$myorders.csv[*][ count_headers() == 6 ]").is_valid
```

Load an automated file arrival process and run it.

```python
from csvpath import CsvPaths

paths = CsvPaths()
paths.file_manager.add_named_file(name="orders", path="myorders.csv")
paths.paths_manager.add_named_paths(name="validate-orders", from_file="orders.csvpath")
paths.fast_forward_paths(filename="orders", pathsname="validate-orders")

results = paths.results_manager.get_named_results("validate-orders")
print(f"Valid: {results[0].is_valid}")
```

#### What problem does this solve?
CSV, Excel, JSONL, and XML files are critical to data…
