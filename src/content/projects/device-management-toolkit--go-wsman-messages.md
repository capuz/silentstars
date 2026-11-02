---
repo: "device-management-toolkit/go-wsman-messages"
name: "go-wsman-messages"
description: "This repository contains a Go library that creates properly formatted wsman messages to send to Intel® Active Management Technology (AMT) capable platforms. These messages are based on the AMT SDK documentation."
readmeQualityOk: true
url: "https://github.com/device-management-toolkit/go-wsman-messages"
homepage: "https://pkg.go.dev/github.com/device-management-toolkit/go-wsman-messages/v2"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 9
forks: 8
openIssues: 3
closedIssues: 15
watchers: 2
contributors: 24
recentReleases: 0
createdAt: "2022-09-01T19:17:47Z"
lastCommitAt: "2026-11-02T15:16:59Z"
lastReleaseAt: "2023-08-07T23:02:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 87
maintainers: ["dependabot[bot]", "madhavilosetty-intel", "rsdmike"]
openGraphImageUrl: "https://opengraph.githubassets.com/e05f32fc74bd6f5c459ee84083b6e20be042a1744971e3b6b165bc0ebe918e5d/device-management-toolkit/go-wsman-messages"
---

# go-wsman-messages

> Disclaimer: Production viable releases are tagged and listed under 'Releases'.  All other check-ins should be considered 'in-development' and should not be used in production.

This repository contains a Go library that implements APIs for communicating with Intel® Active Management Technology (AMT) capable platforms. These APIs are based on the AMT SDK documentation, which can be found [here](https://www.intel.com/content/www/us/en/developer/tools/active-management-technology-sdk/overview.html)

## How to use it

A few steps are required to use the library in your code.

1. Import the library in your project
1. Provide the connection parameters
1. Create the desired messages to act on the AMT device.

See the commented source code as follows:

``` go
package main

import (
    "fmt"
    // 1. Import the library
    "github.com/device-management-toolkit/go-wsman-messages/v2/pkg/wsman"
    "github.com/device-management-toolkit/go-wsman-messages/v2/pkg/wsman/client"
)

func main() {
    // 2. Provide the connection parameters
    clientParams := client.Parameters{
        Target:            "192.168.1.164",
        Username:          "admin",…
