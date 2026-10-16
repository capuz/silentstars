---
repo: "stackitcloud/stackit-sdk-go"
name: "stackit-sdk-go"
description: "The STACKIT SDK for Go"
readmeQualityOk: true
url: "https://github.com/stackitcloud/stackit-sdk-go"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 106
forks: 46
openIssues: 7
closedIssues: 22
watchers: 4
contributors: 65
recentReleases: 0
createdAt: "2023-09-05T11:34:51Z"
lastCommitAt: "2026-10-16T08:27:24Z"
lastReleaseAt: "2024-03-20T16:15:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 48
maintainers: ["stackit-pipeline", "Fyusel", "rubenhoenle"]
openGraphImageUrl: "https://opengraph.githubassets.com/30f34500b6bb44f70fd7d702c139bc15391b8bbc5b8d22a1c222ac20130d8927/stackitcloud/stackit-sdk-go"
discussionCount: 1
---

# STACKIT SDK for Go


This repository contains the published SDKs and [SDK releases](https://github.com/stackitcloud/stackit-sdk-go/releases/).
The modules are structured into a [core module](https://github.com/stackitcloud/stackit-sdk-go/tree/main/core) with service clients, authentication and shared functionality as well as the different STACKIT [services](https://github.com/stackitcloud/stackit-sdk-go/tree/main/services).
The usage of the SDK is shown in some [examples](https://github.com/stackitcloud/stackit-sdk-go/tree/main/examples).

## Getting started

Requires `Go 1.25` or higher.

To download the `core` module:

```
go get github.com/stackitcloud/stackit-sdk-go/core
```

To download the `services/dns` module:

```
go get github.com/stackitcloud/stackit-sdk-go/services/dns
```

## Examples

This is an example on how to do create a client and interact with the STACKIT DNS service for reading and creating DNS zones. As prerequisite, you need a STACKIT project with its project ID.
The setup of the authentication is described below in section [Authentication](#authentication) in more detail.

```go
package main

import (
   "context"
   "fmt"…
