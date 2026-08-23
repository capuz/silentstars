---
repo: "masasuzu/clrnd"
name: "clrnd"
description: "a command-line tool for deploying services to Google Cloud Run"
readmeQualityOk: true
url: "https://github.com/masasuzu/clrnd"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 9
forks: 0
openIssues: 6
closedIssues: 18
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-06-16T15:25:43Z"
lastCommitAt: "2026-08-23T04:10:23Z"
lastReleaseAt: "2026-06-21T04:05:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 54
maintainers: ["masasuzu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d084c4fa47ee5dc74cd796b372a54bbc964454dba21a5297bfaa32bf9d8aaa1/masasuzu/clrnd"
---

# clrnd

`clrnd` is a command-line tool for deploying services to [Google Cloud Run](https://cloud.google.com/run).
It takes a service name and a manifest file as arguments and provides subcommands to verify, render,
diff, deploy, and initialize Cloud Run services.

## Installation

```sh
go install github.com/masasuzu/clrnd@latest
```

Or build from source:

```sh
git clone https://github.com/masasuzu/clrnd.git
cd clrnd
go build -o clrnd .
```

## Authentication

`clrnd` uses [Application Default Credentials (ADC)](https://cloud.google.com/docs/authentication/application-default-credentials)
to access the Cloud Run Admin API. Authenticate once with:

```sh
gcloud auth application-default login
```

## Configuration file

To avoid repeating arguments and flags, put them in a config file and pass it with `-c` /
`--config`. If `--config` is omitted, `clrnd` looks for `clrnd.yml` then `clrnd.yaml` in the current
directory.

```yaml
# clrnd.yml
project: my-project
region: asia-northeast1
service: my-svc            # optional; overridable by the positional argument
manifest: manifest.yaml    # optional; overridable by the positional argument
tfstate:
  - location:…
