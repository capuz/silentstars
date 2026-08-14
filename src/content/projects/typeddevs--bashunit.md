---
repo: "TypedDevs/bashunit"
name: "bashunit"
description: "A simple yet powerfull testing library for bash scripts."
readmeQualityOk: true
url: "https://github.com/TypedDevs/bashunit"
homepage: "https://bashunit.com/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["bash", "bash-script", "testing", "testing-framework", "unittesting", "assertions", "mocking", "tdd", "test-driven-development", "unittest"]
stars: 424
forks: 56
openIssues: 2
closedIssues: 397
watchers: 6
contributors: 46
recentReleases: 0
createdAt: "2023-09-04T08:12:23Z"
lastCommitAt: "2026-08-14T05:15:00Z"
lastReleaseAt: "2023-11-09T17:16:32Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 39
maintainers: ["Chemaclass", "ColumbusLabs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/686916383/b73fcbe9-76a1-46eb-80d5-1626eca62438"
fundingLinks: ["CUSTOM:https://chemaclass.com/sponsor"]
---

</a>
    </a>
    </a>
    </a>
</p>
<br>
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/TypedDevs/bashunit/main/docs/public/logo-name-dark.svg">
    </picture>
</p>

<h1 align="center">A simple testing framework for bash scripts</h1>

    Test your bash scripts in the fastest and simplest way.
</p>

## Why bashunit

A lightweight, fast testing framework for **Bash 3.0+**, focused on developer experience.
It ships 93 assertions plus spies, mocks, data providers, snapshots and more.

## Quick start

Install the latest version into your project:

```bash
curl -s https://bashunit.com/install.sh | bash
```

Write a test in `tests/example_test.sh`:

```bash
#!/usr/bin/env bash

function test_bashunit_is_working() {
  assert_same "bashunit is working" "bashunit is working"
}
```

Run it:

```bash
./lib/bashunit tests/
```

Prefer learning by doing? Run `./lib/bashunit learn` for an interactive tutorial.

## Assertions at a glance

One representative example per family — the full catalogue and every signature is at
[bashunit.com/assertions](https://bashunit.com/assertions), or run `bashunit doc` locally:

| Family | Example |…
