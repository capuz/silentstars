---
repo: "thomasleplus/decritic"
name: "decritic"
description: "Remove diacritics (accents)"
readmeQualityOk: true
url: "https://github.com/thomasleplus/decritic"
language: "Go"
languages: ["Go"]
languagePcts: [68]
topics: ["golang", "go", "diacritics", "diacritization", "diacritical-signs", "diacritics-removal", "accented-characters", "accentuation", "accentuated-characters"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-12-01T23:11:04Z"
lastCommitAt: "2026-08-12T05:14:24Z"
lastReleaseAt: "2025-09-16T20:48:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 77
maintainers: ["dependabot[bot]", "thomasleplus", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ba01edbc4839c253353447f2dd624c67c9b72b7e80a86a8018c0f4610f2bec6/thomasleplus/decritic"
---

# Decritic

Remove diacritics (accents)

## Installation

```shell
go install github.com/thomasleplus/decritic@latest
```

Make sure that your Go path (meaning the output of the command `go env GOPATH`, e.g. "${HOME}/go/bin") is included in your PATH environment variable.

## Usage

To get help, run the following:

```shell
decritic -h
```

In short, `decritic` can either read from files or from `stdin`:

```shell
cat input.txt | decritic > output.txt
decritic input.txt > output.txt
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/thomasleplus/decritic/blob/HEAD/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Security

Please read [SECURITY.md](https://github.com/thomasleplus/decritic/blob/HEAD/SECURITY.md) for details on our security policy and how to report security vulnerabilities.

## Code of Conduct

Please read [CODE_OF_CONDUCT.md](https://github.com/thomasleplus/decritic/blob/HEAD/CODE_OF_CONDUCT.md) for details on our code of conduct.

## License

This project is licensed under the terms of the [LICENSE](https://github.com/thomasleplus/decritic/blob/HEAD/LICENSE) file.
