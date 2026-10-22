---
repo: "RhyOrg/RhyDB"
name: "RhyDB"
description: "RhyDB – High-performance analytical database for sequence alignment data"
readmeQualityOk: true
url: "https://github.com/RhyOrg/RhyDB"
homepage: "https://rhydb.org/"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 19
forks: 7
openIssues: 124
closedIssues: 528
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2022-08-30T09:02:58Z"
lastCommitAt: "2026-10-22T08:51:26Z"
lastReleaseAt: "2024-06-25T14:24:14Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 69
maintainers: ["taepper", "fengelniederhammer", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69297c32cc97c993f418b8525a544d9c9fe7191af88957589719ea855372a266/RhyOrg/RhyDB"
---

# RhyDB

High-performance analytical database for sequence alignment data.

Check out [rhydb.org](https://rhydb.org/) to interactively try out this database engine on a few sample instances.

For information on how to build, test, and contribute to RhyDB, see [Contributing](https://github.com/RhyOrg/RhyDB/blob/HEAD/documentation/developer/contributing.md).

## Python Bindings

RhyDB provides Python bindings via Cython. The bindings wrap the core C++ `Database` and are installable by `pip install rhydb`.

See [Contributing](https://github.com/RhyOrg/RhyDB/blob/HEAD/documentation/developer/contributing.md#building-python-bindings) for build instructions.

### Usage

```python
from rhydb import Database

# Create a new database
db = Database()

# Or load from a saved state
db = Database("/path/to/saved/database")

# Create a table with a nucleotide sequence column, whose reference is taken
# from the built-in reference_genomes table
db.append_data_from_string(
    "reference_genomes", '{"name": "main", "type": "nucleotide", "sequence": "ACGT..."}'
)
db.query("createTable(sequences, {id := string, main := nucleotideSequence(reference := main)}, primaryKey := id)")

# Append data from…
