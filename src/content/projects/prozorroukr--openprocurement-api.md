---
repo: "ProzorroUKR/openprocurement.api"
name: "openprocurement.api"
description: "API interface to OpenProcurement database"
readmeQualityOk: true
url: "https://github.com/ProzorroUKR/openprocurement.api"
homepage: "https://prozorro-openprocurementapi.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 26
forks: 20
openIssues: 2
closedIssues: 0
watchers: 7
contributors: 58
recentReleases: 0
createdAt: "2018-05-11T06:16:18Z"
lastCommitAt: "2026-11-02T15:16:10Z"
lastReleaseAt: "2019-02-18T16:49:58Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 76
undervaluedScore: 58
maintainers: ["smithumble", "ozamirets", "alekseystryukov"]
openGraphImageUrl: "https://opengraph.githubassets.com/750cfe668d3a0019bde859dcad44de181dbf65a7f04f0e49ad15ee97af4eb049/ProzorroUKR/openprocurement.api"
---

# Prozorro CDB Api (openprocurement.api)

## Installation

```
docker-compose build
docker-compose up
```

## Pre-commit

To install `pre-commit` simply run inside the shell:

```bash
uv run pre-commit install
uv run pre-commit install --hook-type commit-msg
```

`pre-commit` is very useful to check your code before publishing it.
It's configured using `.pre-commit-config.yaml` file.

You can read more about pre-commit here: https://pre-commit.com/

## Run tests

1. Build docker container
    ```
    docker compose build
    ```

2. Run tests
    ```
    docker compose run --rm api pytest src/openprocurement/tender/core -x -vvv
    ```

3. Run tests in parallel (each pytest-xdist worker uses its own database)
    ```
    docker compose run --rm api pytest src/openprocurement/tender/core -n auto
    ```
   
## Docs
   
   1. Update *.http files
      ```
      docker compose run --rm api pytest docs/tests -x -vvv
      ```
  
   2. Generate docs
      ```
      docker compose run --rm api sh -c "cd docs && make html"
      ```
      See docs/build/html for the built doc files
    
   3. [See…
