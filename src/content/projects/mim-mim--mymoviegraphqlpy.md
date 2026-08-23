---
repo: "MiM-MiM/MyMovieGraphQLPy"
name: "MyMovieGraphQLPy"
description: "Query IMDb via official GraphQL API"
readmeQualityOk: true
url: "https://github.com/MiM-MiM/MyMovieGraphQLPy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-06-24T19:17:15Z"
lastCommitAt: "2026-08-23T04:08:00Z"
lastReleaseAt: "2026-08-22T02:21:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 45
maintainers: ["MiM-MiM"]
openGraphImageUrl: "https://opengraph.githubassets.com/cedcedb89fd4c77b09aa97ee90310bc97d1e813fecb19c349dd08dad27764287/MiM-MiM/MyMovieGraphQLPy"
discussionCount: 2
---

# General Information
MyMovieGraphQL is a Python3.10 implementation to fetch data from IMDb via their GraphQL interface.

## Features
- Uses a `json` file created from introspecting the types.
- Creates a `limited` version that avoids cyclicle query generation
- Uses arguments in the query generation, allowing the same query to work for multiple variables, caching of the generated query to be added.
- `Name`. `Title`, and `Main` (multiple type) search have been abstracted.

## Planned Features
- Add more known types to the `getID`
- `str(obj)` logic to attempt and print what is expected based on possible keys and types.

# Installation
MyMovieGraphQL is configured as a python module. It is suggested to create a [venv](https://docs.python.org/3/library/venv.html) first.

## General Install
This will always use the latest versions of packages, may encounter bugs.
```bash
# Activate venv first if used.
# Navigate to cloned folder, `cd MyMovieGraphQLPy`
python3 -m pip install .
```

## Secure Install
This install uses the requirements.txt with hashes specified to ensure known good versions get installed.  If the `--require-hashes` argument is not passed it will not perform the hash…
