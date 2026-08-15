---
repo: "suketa/ruby-duckdb"
name: "ruby-duckdb"
description: "Ruby binding for DuckDB"
readmeQualityOk: true
url: "https://github.com/suketa/ruby-duckdb"
homepage: "https://github.com/suketa/ruby-duckdb"
language: "Ruby"
languages: ["Ruby", "C"]
languagePcts: [64, 36]
topics: ["hacktoberfest", "database", "ruby"]
stars: 255
forks: 34
openIssues: 10
closedIssues: 216
watchers: 6
contributors: 21
recentReleases: 0
createdAt: "2019-10-28T10:53:24Z"
lastCommitAt: "2026-08-15T04:04:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 42
maintainers: ["suketa", "Watson1978", "otegami"]
openGraphImageUrl: "https://opengraph.githubassets.com/3088f09dd1cf62c621efbb11f89d3f22dac329f2d52aa627e68bcfdbc94cafda/suketa/ruby-duckdb"
fundingLinks: ["GITHUB:https://github.com/suketa"]
---

# ruby-duckdb

## Description

This gem `duckdb` is Ruby client for the [DuckDB](https://www.duckdb.org) database engine.

## Requirement

You must have [DuckDB](https://www.duckdb.org) engine installed in order to use this gem.

## Pre-requisite setup (Linux):
1. Download the latest [C++ package release for DuckDB](https://duckdb.org/install/?platform=linux&environment=c).

2. Move the files to their respective location:
    - Extract the `duckdb.h` and `duckdb.hpp` file to `/usr/local/include`.
    - Extract the `libduckdb.so` file to `/usr/local/lib`.

    ```sh
    unzip libduckdb-linux-amd64.zip -d libduckdb
    sudo mv libduckdb/duckdb.* /usr/local/include/
    sudo mv libduckdb/libduckdb.so /usr/local/lib
    ```

3. To create the necessary link, run `ldconfig` as root:

    ```sh
    sudo ldconfig /usr/local/lib # adding a --verbose flag is optional - but this will let you know if the libduckdb.so library has been linked
    ```

## Pre-requisite setup (macOS):

Using `brew install` is recommended.

```sh
brew install duckdb
```

## Pre-requisite setup (Windows):

Using [Ruby + Devkit](https://rubyinstaller.org/downloads/) is recommended.

1. Download…
