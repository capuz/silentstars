---
repo: "googleapis/librarian"
name: "librarian"
description: "CLI for managing SDK client library configuration, generation and releases"
readmeQualityOk: true
url: "https://github.com/googleapis/librarian"
homepage: "https://cloud.google.com/sdk"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["cloud", "google", "libraries", "sdk"]
stars: 45
forks: 64
openIssues: 190
closedIssues: 3438
watchers: 16
contributors: 70
recentReleases: 0
createdAt: "2024-11-22T08:36:43Z"
lastCommitAt: "2026-10-09T18:56:47Z"
lastReleaseAt: "2026-02-10T21:15:36Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 64
maintainers: ["coryan", "chingor13", "zhumin8"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb471d9ce664397b6364de358c025294579a6dbdbae69f77f64b0d7ca8a7321a/googleapis/librarian"
---

# Librarian

This repository contains command line tools for managing Google Cloud SDK
client libraries. The primary tool is `librarian`, which handles the full
library lifecycle: onboarding new libraries, generating code from API
specifications, bumping versions, and publishing releases.

## Usage

Run `librarian -help` for a list of commands,
or see the [command reference on pkg.go.dev](https://pkg.go.dev/github.com/googleapis/librarian@main/cmd/librarian).

To run without installing:

    go run github.com/googleapis/librarian/cmd/librarian@latest -help

See the [doc/](https://github.com/googleapis/librarian/blob/HEAD/doc/) folder for additional documentation.

## Contributing

This project supports the Google Cloud SDK ecosystem and is not
intended for external use. For contribution guidelines, see
[CONTRIBUTING.md](https://github.com/googleapis/librarian/blob/HEAD/CONTRIBUTING.md).

## License

Apache 2.0 - See [LICENSE](https://github.com/googleapis/librarian/blob/HEAD/LICENSE) for more information.
