---
repo: "GenSpectrum/LAPIS-SILO"
name: "LAPIS-SILO"
description: "RhyDB – High-performance analytical database for sequence alignment data"
readmeQualityOk: true
url: "https://github.com/GenSpectrum/LAPIS-SILO"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 19
forks: 5
openIssues: 128
closedIssues: 489
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2022-08-30T09:02:58Z"
lastCommitAt: "2026-09-25T09:01:28Z"
lastReleaseAt: "2024-06-25T14:24:14Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 64
maintainers: ["taepper", "fengelniederhammer", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4da63ad354229ba91041cb21a058cd7d6dc1ddf2a858373f8c33ae296265e03/GenSpectrum/LAPIS-SILO"
---

# RhyDB

High-performance analytical database for sequence alignment data

RhyDB was formerly named SILO. The rename is still in progress: the repository is still `GenSpectrum/LAPIS-SILO`.
Documentation refers to those by their actual names.

For information on how to build, test, and contribute to RhyDB, see [Contributing](https://github.com/GenSpectrum/LAPIS-SILO/blob/HEAD/documentation/developer/contributing.md).

## Python Bindings

RhyDB provides Python bindings via Cython. The bindings wrap the core C++ `Database` and are installable by `pip install rhydb`.

See [Contributing](https://github.com/GenSpectrum/LAPIS-SILO/blob/HEAD/documentation/developer/contributing.md#building-python-bindings) for build instructions.

### Usage

```python
from rhydb import Database

# Create a new database
db = Database()

# Or load from a saved state
db = Database("/path/to/saved/database")

# Create a nucleotide sequence table
db.create_nucleotide_sequence_table(
    table_name="sequences",
    primary_key_name="id",
    sequence_name="main",
    reference_sequence="ACGT..."
)

# Append data from file
db.append_data_from_file("sequences", "/path/to/data.ndjson")

# Get reference sequence…
