---
repo: "sebastianbergmann/phpcov"
name: "phpcov"
description: "TextUI frontend for php-code-coverage"
readmeQualityOk: true
url: "https://github.com/sebastianbergmann/phpcov"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 238
forks: 55
openIssues: 1
closedIssues: 90
watchers: 8
contributors: 26
recentReleases: 0
createdAt: "2011-08-28T22:07:36Z"
lastCommitAt: "2026-10-15T08:32:27Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 41
maintainers: ["renovate[bot]", "sebastianbergmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc119f8f97b0fc60990708594509d632872c35db4387358755c12c35903700e7/sebastianbergmann/phpcov"
fundingLinks: ["GITHUB:https://github.com/sebastianbergmann"]
---

# phpcov

**phpcov** is a command-line frontend for the php-code-coverage library.

## Installation

This tool is distributed as a [PHP Archive (PHAR)](https://php.net/phar):

```bash
$ wget https://phar.phpunit.de/phpcov-X.Y.phar

$ php phpcov-X.Y.phar --version
```

Please replace `X.Y` with the version of PHPCOV you are interested in.

Using [Phive](https://phar.io/) is the recommended way for managing the tool dependencies of your project:

```
$ phive install phpcov

$ ./tools/phpcov --version
```

**[It is not recommended to use Composer to download and install this tool.](https://phpunit.readthedocs.io/en/11.0/installation.html#phar-or-composer)**

## Usage

### Merging serialized code coverage data

When you run PHPUnit with `--coverage-php`, it writes serialized code coverage data to a `.cov` file.
The `phpcov merge` command merges multiple `.cov` files into a single code coverage report.

This is useful when you run test suites in parallel or across separate processes and want to combine the results into one report.

#### Example

Run your test suites separately, each writing their own `.cov` file:

```
$ phpunit --coverage-php /tmp/coverage/FooTest.cov tests/FooTest
$…
