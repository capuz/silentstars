---
repo: "GenSpectrum/LAPIS-SILO"
name: "LAPIS-SILO"
description: "High-performance analytical database for sequence alignment data"
url: "https://github.com/GenSpectrum/LAPIS-SILO"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 19
forks: 5
openIssues: 108
closedIssues: 416
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2022-08-30T09:02:58Z"
lastCommitAt: "2026-06-30T06:54:29Z"
lastReleaseAt: "2024-06-25T14:24:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 64
maintainers: ["taepper", "dependabot[bot]", "fengelniederhammer"]
openGraphImageUrl: "https://opengraph.githubassets.com/793fe92e044e11b5d67b9018e3e1237857f7b5158f067985518abf8a5e73a2aa/GenSpectrum/LAPIS-SILO"
---

# LAPIS-SILO

High-performance analytical database for sequence alignment data

For information on how to build, test, and contribute to SILO, see [Contributing](documentation/developer/contributing.md).

## Python Bindings

SILO provides Python bindings via Cython. The bindings wrap the core C++ `Database` and are installable by `pip install silodb`.

See [Contributing](documentation/developer/contributing.md#building-python-bindings) for build instructions.

### Usage

```python
from silodb import Database

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

# Get reference sequence
ref = db.get_nucleotide_reference_sequence("sequences", "main")

# Get filtered bitmap (list of matching row indices)
indices = db.get_filtered_bitmap("sequences", "some_filter")

# Query data through the SaneQL front-end
table = db.query("sequences.filter(true)")

#…
