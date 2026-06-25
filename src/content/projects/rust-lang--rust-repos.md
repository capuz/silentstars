---
repo: "rust-lang/rust-repos"
name: "rust-repos"
description: "Dataset of Rust source code repositories"
url: "https://github.com/rust-lang/rust-repos"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["rust-infra"]
stars: 135
forks: 43
openIssues: 7
closedIssues: 0
watchers: 9
contributors: 17
recentReleases: 0
createdAt: "2018-08-18T13:41:11Z"
lastCommitAt: "2026-06-25T01:38:01Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 78
undervaluedScore: 37
maintainers: ["rust-highfive"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad1d08caa7cbbddd83e9327e729f72285bcf4b01b0d0080b93fa3da4676e7f85/rust-lang/rust-repos"
---

# Rust repositories list

This repository contains a scraped list of all the public GitHub repos with source code
written in the [Rust programming language][rust]. The source code for the scraper is
also included.

Everything in this repository, unless otherwise specified, is released under
the MIT license.

[rust]: https://www.rust-lang.org

## Running the scraper

To run the scraper, execute the program with the `GITHUB_TOKEN` environment
variable (containing a valid GitHub API token -- no permissions are required)
and the data directory as the first argument:

```
$ GITHUB_TOKEN=foobar cargo run --release -- data
```

The scraper automatically saves its state to disk, so it can be interrupted and
it will resume where it left. This also allows incremental updates of the list.

## Using the data

The data is available in the `data/github.csv` file, in CSV format. That file
contains the GitHub GraphQL ID of the repository, its name, and whether it
contains a `Cargo.toml` and `Cargo.lock`.

All the repositories contained in the dataset are marked as using the language
by GitHub. Some results might be inaccurate for this reason.
