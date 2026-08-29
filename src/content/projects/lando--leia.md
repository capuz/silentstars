---
repo: "lando/leia"
name: "leia"
description: "A testing utility that tests code blocks in documentation."
readmeQualityOk: true
url: "https://github.com/lando/leia"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["lando", "testing", "mocha", "devops"]
stars: 19
forks: 4
openIssues: 11
closedIssues: 15
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2018-11-27T04:49:23Z"
lastCommitAt: "2026-08-29T17:28:53Z"
lastReleaseAt: "2021-10-19T20:36:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 54
maintainers: ["emoriwan", "dependabot[bot]", "pirog"]
openGraphImageUrl: "https://opengraph.githubassets.com/e28abbfd9f3623063455845b5e2dd0aaaf377fd662b89786099a2b9bcb838af0/lando/leia"
---

# Leia

Leia is a testing utility that tests code blocks in documentation. This makes tests easy to write and also ensures documentation is up to date and working. Behind the scenes documentation is parsed and run as a series of `mocha` tests.

Leia will

* Consolidate code examples and tests into a single, easy to understand and write `markdown` file
* Write functional tests quickly in an accessible and lowest common denominator language (eg `sh/bash/dash` etc)
* Pass on exit status code `0`, fail on anything else
* Work cross platform-ish, with some caveats, see [Shell Considerations](#shell-considerations) below
* Keep [Lando](https://github.com/lando/lando) honest so he can be a real hero who doesn't betray his friends again

## Installation

Leia 1.x requires Node.js 24 or newer.

```bash
# With npm
npm install @lando/leia
```

## Basics

A basic Leia test needs one H1 heading, at least one matching H2 test heading, and a fenced code block.
Inside the code block, a comment describes the test and the following line runs its command.

````md
# Some Example

## Testing

```bash
# Should print a greeting
echo "Hello from Leia"
```
````

## Usage

You can invoke `leia` as a…
