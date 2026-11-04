---
repo: "dataresearchcenter/ftmq"
name: "ftmq"
description: "An attempt towards a followthemoney query dsl."
readmeQualityOk: true
url: "https://github.com/dataresearchcenter/ftmq"
homepage: "https://docs.investigraph.dev/lib/ftmq"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 13
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-04-04T14:15:21Z"
lastCommitAt: "2026-11-04T13:05:12Z"
lastReleaseAt: "2023-11-12T18:57:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 73
maintainers: ["simonwoerpel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d8f33011292131d05aeab5e3692eebf1381acf25e6ebcd7f0fe654f60c49c2c/dataresearchcenter/ftmq"
---

# ftmq

`ftmq` queries and filters [Follow The Money](https://followthemoney.tech) entities from json files / streams or from a statement-based [nomenklatura](https://github.com/opensanctions/nomenklatura) store.

Its `ftmq.Query` is the backend-agnostic query object of the [OpenAleph](https://openaleph.org) ecosystem: it filters FtM streams and stores, compiles to SQL, and converts to and from OpenAleph API params.

New to Follow The Money? See [this introduction](https://pad.investigativedata.org/s/0qKuBEcsM#).

## Installation

Minimum Python version: 3.11

    pip install ftmq

## Usage

### Command line

```bash
cat entities.ftm.json | ftmq -q 'filter:schema=Company&filter:properties.country=de&filter:gte:properties.incorporationDate=2023' -o s3://data/entities-filtered.ftm.json
```

### Python Library

```python
from ftmq import Query, M, P, G, smart_read_proxies

# legal entities in `companies` based in Germany, or in Austria and incorporated
# since 2020, not dissolved: the 5 most recently incorporated
q = Query().where(
    M(dataset="companies"),
    M(schemata="LegalEntity"),
    G(countries="de") | (G(countries="at") & P(incorporationDate__gte=2020)),…
