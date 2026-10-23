---
repo: "projectdiscovery/retryabledns"
name: "retryabledns"
description: "Retryable DNS client in Go"
readmeQualityOk: true
url: "https://github.com/projectdiscovery/retryabledns"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 140
forks: 32
openIssues: 11
closedIssues: 49
watchers: 10
contributors: 28
recentReleases: 0
createdAt: "2020-04-02T23:26:19Z"
lastCommitAt: "2026-10-23T09:32:17Z"
lastReleaseAt: "2021-04-19T17:22:01Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 76
undervaluedScore: 36
maintainers: ["Mzack9999", "dwisiswant0", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/231afab1088cbcf87fd9055fcc5266c6958417cdce9547f07cf131b3770ac48f/projectdiscovery/retryabledns"
discussionCount: 2
---

# Retryable dns resolver

Based on `miekg/dns` and freely inspired by `bogdanovich/dns_resolver`.

## Features

- Supports both system default DNS resolvers and user-provided ones
- Retries DNS requests in case of I/O errors, timeouts, or network failures
- Allows arbitrary query types
- Resolution with random resolvers
- Compatible with various DNS resolver protocols (TCP, UDP, DoH, and DoT)

### Using *go get*

```console
$ go get github.com/projectdiscovery/retryabledns
```

After this command *retryabledns* library source will be in your $GOPATH

## `/etc/hosts` file processing

By default, the library processes the `/etc/hosts` file up to a maximum amount of lines for efficiency (4096). If your setup has a larger hosts file and you want to process more lines, you can easily configure this limit by adjusting the `hostsfile.MaxLines` variable.

For example:

``` go
hostsfile.MaxLines = 10000  // Now the library will process up to 10000 lines from the hosts file
```

## Example

Usage Example:

``` go
package main

import (
    "log"

    "github.com/projectdiscovery/retryabledns"
    "github.com/miekg/dns"
)

func main() {
    // It requires a list of resolvers.
    // Valid…
