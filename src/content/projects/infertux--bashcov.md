---
repo: "infertux/bashcov"
name: "bashcov"
description: "Code coverage tool for Bash"
readmeQualityOk: true
url: "https://github.com/infertux/bashcov"
language: "Ruby"
languages: ["Ruby", "Nix"]
languagePcts: [66, 25]
topics: ["ruby", "simplecov", "coverage", "bash", "testing", "coverage-report", "rubygems", "code-coverage", "tdd", "shell"]
stars: 176
forks: 24
openIssues: 0
closedIssues: 72
watchers: 6
contributors: 16
recentReleases: 1
createdAt: "2012-12-08T20:31:11Z"
lastCommitAt: "2026-10-26T03:02:50Z"
lastReleaseAt: "2026-08-25T07:58:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 41
maintainers: ["infertux", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/9748907fd49dcff02bd46147d22db626c81f2c3d6b94d197a0bc4778831b07cf/infertux/bashcov"
fundingLinks: ["GITHUB:https://github.com/infertux", "LIBERAPAY:https://liberapay.com/infertux", "PATREON:https://patreon.com/infertux"]
---

# Bashcov

Bashcov is a **code coverage analysis tool for Bash**.

In most cases, you'll want overall coverage results for your project from
[shUnit2](https://github.com/kward/shunit2),
[Bats](https://github.com/bats-core/bats-core),
[bash_unit](https://github.com/pgrange/bash_unit),
[assert.sh](https://github.com/lehmannro/assert.sh),
[bashaspec](https://github.com/d10n/bashaspec),
etc.
Bashcov automatically takes care of this by caching and merging results when generating reports,
so your report includes coverage across your test suites and thereby gives you a better picture of blank spots.

It uses the [SimpleCov](https://github.com/colszowka/simplecov) coverage library to generate HTML reports.
SimpleCov gets installed automatically when you install Bashcov.

## Installation

`gem install bashcov`

If the `gem` command is unavailable, you need to [install Ruby](https://www.ruby-lang.org/en/documentation/installation/) first.

For more information, including other installation methods, see [`INSTALL.md`](https://github.com/infertux/bashcov/blob/HEAD/INSTALL.md).

## Usage

`bashcov --help` prints all available options. Here are some examples:

    bashcov ./script.sh…
