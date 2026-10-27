---
repo: "mapping-commons/sssom-py"
name: "sssom-py"
description: "Python toolkit for SSSOM mapping format"
readmeQualityOk: true
url: "https://github.com/mapping-commons/sssom-py"
homepage: "https://mapping-commons.github.io/sssom-py/index.html#"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["sssom", "obofoundry", "python", "mappings", "ontology-mappings", "linkml"]
stars: 65
forks: 16
openIssues: 109
closedIssues: 179
watchers: 5
contributors: 12
recentReleases: 0
createdAt: "2020-07-05T18:20:09Z"
lastCommitAt: "2026-10-27T12:39:12Z"
lastReleaseAt: "2023-01-26T14:12:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 40
maintainers: ["matentzn", "noelmcloughlin", "cthoyt"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e56b004b844daabba9d1f2bfbe311df4e193f2b251f205c10c34ffc7be0f293/mapping-commons/sssom-py"
discussionCount: 0
---

# Python Utilities for SSSOM

A Python library and command line interface (CLI) for working with
[SSSOM (Simple Standard for Sharing Ontology Mappings)](https://github.com/mapping-commons/sssom).

## Getting Started

A SSSOM TSV can be parsed with

```python
import sssom

# other SSSOM files can be found on https://mapping-commons.github.io
url = "https://raw.githubusercontent.com/mapping-commons/mh_mapping_initiative/master/mappings/mp_hp_eye_impc.sssom.tsv"

# TSV can be parsed into a mapping set dataframe object,
# which includes a pandas DataFrame, a curies.Converter,
# and metadata
msdf = sssom.parse_tsv(url)

# SSSOM comes with several "write" functions
sssom.write_tsv(msdf, "test.tsv")
sssom.write_json(msdf, "test.json")
sssom.write_owl(msdf, "test.owl")
sssom.write_rdf(msdf, "test.ttl")
```

> [!WARNING]  
> The export formats (json, rdf) of sssom-py are not yet finalised! Expect changes in future releases.

## Documentation

See [documentation](https://mapping-commons.github.io/sssom-py/index.html#)

### Deploy documentation

```console
$ make sphinx
$ make deploy-docs
```

## Schema

See the [schema/](https://github.com/mapping-commons/sssom-py/blob/HEAD/schema) folder…
