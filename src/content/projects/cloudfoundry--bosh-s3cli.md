---
repo: "cloudfoundry/bosh-s3cli"
name: "bosh-s3cli"
description: "Go CLI for S3"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/bosh-s3cli"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 39
forks: 29
openIssues: 0
closedIssues: 14
watchers: 21
contributors: 85
recentReleases: 0
createdAt: "2013-11-22T21:46:50Z"
lastCommitAt: "2026-08-29T10:01:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 55
maintainers: ["cf-rabbit-bot", "dependabot[bot]", "ay901246"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b5aa28f262549d80238570e2b178573b9549232d540ee0791e36f0e01ffcc53/cloudfoundry/bosh-s3cli"
---

## S3 CLI

A CLI for uploading, fetching and deleting content to/from an S3-compatible
blobstore.

Continuous integration: <https://bosh-cpi.ci.cf-app.com/pipelines/s3cli>

Releases can be found in `https://s3.amazonaws.com/bosh-s3cli-artifacts`. The Linux binaries follow the regex
`s3cli-(\d+\.\d+\.\d+)-linux-amd64` and the windows binaries `s3cli-(\d+\.\d+\.\d+)-windows-amd64`.

## Installation

```
go get github.com/cloudfoundry/bosh-s3cli
```

## Usage

Given a JSON config file (`config.json`)...

``` json
{
  "bucket_name":                                    "<string> (required)",

  "credentials_source":                             "<string> [static|env_or_profile|none]",
  "access_key_id":                                  "<string> (required if credentials_source = 'static')",
  "secret_access_key":                              "<string> (required if credentials_source = 'static')",

  "region":                                         "<string> (optional - default: 'us-east-1')",
  "host":                                           "<string> (optional)",
  "port":                                           "<int> (optional)",

  "ssl_verify_peer":…
