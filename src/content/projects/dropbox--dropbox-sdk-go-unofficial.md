---
repo: "dropbox/dropbox-sdk-go-unofficial"
name: "dropbox-sdk-go-unofficial"
description: ":warning: An UNOFFICIAL Dropbox v2 API SDK for Go"
url: "https://github.com/dropbox/dropbox-sdk-go-unofficial"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["dropbox-api", "dropbox-sdk", "sdk", "golang-sdk"]
stars: 186
forks: 37
openIssues: 3
closedIssues: 46
watchers: 27
contributors: 28
recentReleases: 0
createdAt: "2016-01-25T01:42:35Z"
lastCommitAt: "2026-06-30T06:50:35Z"
lastReleaseAt: "2018-12-07T20:57:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 31
maintainers: ["AndreyVMarkelov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7b9a130a6d2a549340cfc1ea1ccf5300cbd9a22757cf212e3ea57e5db2fefba/dropbox/dropbox-sdk-go-unofficial"
---

# Dropbox SDK for Go [UNOFFICIAL] [](https://pkg.go.dev/github.com/dropbox/dropbox-sdk-go-unofficial/v6/dropbox) [](https://github.com/dropbox/dropbox-sdk-go-unofficial/actions) [](https://github.com/dropbox/dropbox-sdk-go-unofficial/actions)

An **UNOFFICIAL** Go SDK for integrating with the Dropbox API v2. Requires Go 1.23+

:warning: WARNING: This SDK is **NOT yet official**. What does this mean?

  * There is no formal Dropbox [support](https://www.dropbox.com/developers/support) for this SDK at this point
  * Bugs may or may not get fixed
  * Not all SDK features may be implemented and implemented features may be buggy or incorrect

### Uh OK, so why are you releasing this?

  * the SDK, while unofficial, _is_ usable. See [dbxcli](https://github.com/dropbox/dbxcli) for an example application built using the SDK
  * we would like to get feedback from the community and evaluate the level of interest/enthusiasm before investing into official supporting one more SDK

## Installation

```sh
$ go get github.com/dropbox/dropbox-sdk-go-unofficial/v6/dropbox/...
```

For most applications, you should just import the relevant namespace(s) only. The SDK exports the following…
