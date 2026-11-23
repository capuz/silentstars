---
repo: "BioImage-Archive/bia-ro-crate-validator"
name: "bia-ro-crate-validator"
description: "This package contains definitions of the structure of RO-Crates when documenting submissions to the BioImage Archive (BIA)."
readmeQualityOk: true
url: "https://github.com/BioImage-Archive/bia-ro-crate-validator"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-05-21T13:27:03Z"
lastCommitAt: "2026-11-23T12:21:13Z"
lastReleaseAt: "2026-08-24T14:37:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 46
maintainers: ["sherwoodf", "bijux", "AybukeKY"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fea2f765b8fac963773b520cb11efe8f88e71ff604b0966b0cafcb3d4dc4567/BioImage-Archive/bia-ro-crate-validator"
---

# BIA RO-Crate Validator

This package contains definitions of the structure of RO-Crates when documenting submissions to the BioImage Archive (BIA).

## Installation

The package requires Python 3.13 or newer.

Install the package with pip:

```sh
pip install bia-ro-crate-validator
```

From a source checkout, install the package with:

```sh
pip install .
```

## Validator

This package contains validation logic for BIA RO-Crates. The validator can be run on an RO-Crate using the CLI provided:

```sh
bia-ro-crate validate <path to the directory root of the RO-Crate>
```

Use `-h` or `--help` to see options for the CLI.

For local development, install the project with Poetry:

```sh
poetry lock
poetry install
```

Then run the CLI from the Poetry environment:

```sh
poetry run bia-ro-crate validate <path to the directory root of the RO-Crate>
```

## Development tests

Install JDK 17 or newer separately (`PATH` or `JAVA_HOME`), then download the
pinned ROBOT JAR containing OWLAPI and HermiT:

```sh
poetry run python scripts/ontology/check_ontology.py --install
poetry run pytest
```
