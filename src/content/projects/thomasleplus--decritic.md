---
repo: "thomasleplus/decritic"
name: "decritic"
description: "Remove diacritics (accents)"
readmeQualityOk: true
url: "https://github.com/thomasleplus/decritic"
language: "Go"
languages: ["Go"]
languagePcts: [70]
topics: ["golang", "go", "diacritics", "diacritization", "diacritical-signs", "diacritics-removal", "accented-characters", "accentuation", "accentuated-characters"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-12-01T23:11:04Z"
lastCommitAt: "2026-08-29T17:27:50Z"
lastReleaseAt: "2025-09-16T20:48:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 77
maintainers: ["dependabot[bot]", "thomasleplus", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bdce9a650043a3dd719be743d80220072370b06cd052a3e0838a23174f570fe/thomasleplus/decritic"
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
