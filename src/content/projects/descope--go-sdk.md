---
repo: "descope/go-sdk"
name: "go-sdk"
description: "Go library used to integrate with Descope"
readmeQualityOk: true
url: "https://github.com/descope/go-sdk"
homepage: "https://docs.descope.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["sdk", "authentication", "golang", "descope", "go", "go-sdk", "golang-sdk", "authorization"]
stars: 60
forks: 10
openIssues: 3
closedIssues: 11
watchers: 15
contributors: 34
recentReleases: 0
createdAt: "2022-05-10T08:24:30Z"
lastCommitAt: "2026-09-27T09:28:56Z"
lastReleaseAt: "2023-05-25T13:09:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 51
maintainers: ["descope[bot]", "dorsha", "descope-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ddff801ade86a3e12cda862256f0f14b61afc8ff824db4882e54215e888e2a6/descope/go-sdk"
---

# Descope SDK for Go

The Descope SDK for Go provides convenient access to the Descope user management and authentication API
for a backend written in Go. You can read more on the [Descope Website](https://descope.com).

## Requirements

The SDK supports Go version 1.18 and above.

## Installing the SDK

Install the package with:

```bash
go get -u github.com/descope/go-sdk
```

## Setup

A Descope `Project ID` is required to initialize the SDK. Find it on the
[project page in the Descope Console](https://app.descope.com/settings/project).

```go
import "github.com/descope/go-sdk/descope/client"

// Initialized after setting the DESCOPE_PROJECT_ID env var
descopeClient, err := client.New()

// ** Or directly **
descopeClient, err := client.NewWithConfig(&client.Config{ProjectID: projectID})
```

### Auth Management Key

It is possible to disable public access to any the Descope authentication method APIs via the
the Descope console. In these cases, private access is still available by using an `Management Key`. This management
key needs to have the correct access control, either `Authentication` or `Full Access`, for the project
or the entire company. Create one in the [Descope…
