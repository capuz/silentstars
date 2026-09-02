---
repo: "cloudfoundry/go-loggregator"
name: "go-loggregator"
description: "Go Client Library for Loggregator"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/go-loggregator"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 11
forks: 18
openIssues: 0
closedIssues: 34
watchers: 23
contributors: 38
recentReleases: 0
createdAt: "2017-04-03T20:50:06Z"
lastCommitAt: "2026-09-02T08:03:45Z"
lastReleaseAt: "2020-10-05T16:15:45Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 63
maintainers: ["dependabot[bot]", "jorbaum"]
openGraphImageUrl: "https://opengraph.githubassets.com/1abcf20db7748e943a8c66dced25e14848c23feedd8e2e98060ce89821f7de10/cloudfoundry/go-loggregator"
---

# go-loggregator

This is a golang client library for [Loggregator][loggregator].

If you have any questions, or want to get attention for a PR or issue please reach out on the [#logging-and-metrics channel in the cloudfoundry slack](https://cloudfoundry.slack.com/archives/CUW93AF3M)

## Versions

At present, Loggregator supports two API versions: v1 (UDP) and v2 (gRPC).
This library provides clients for both versions.

Note that this library is also versioned. Its versions have *no* relation to
the Loggregator API.

## Usage

This repository should be imported as:

`import loggregator "code.cloudfoundry.org/go-loggregator/v10"`

## Examples

To build the examples, `cd` into the directory of the example and run `go build`

### V1 Ingress

Emits envelopes to metron using dropsonde.

### V2 Ingress

Emits envelopes to metron using the V2 loggregator-api.

Required Environment Variables:

* `CA_CERT_PATH`
* `CERT_PATH`
* `KEY_PATH`

### Runtime Stats

Emits information about the running Go proccess using a V2 ingress client.

Required Environment Variables:

* `CA_CERT_PATH`
* `CERT_PATH`
* `KEY_PATH`

### Envelope Stream Connector

Reads envelopes from the Loggregator API (e.g.…
