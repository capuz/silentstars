---
repo: "cloud-copilot/iam-data-go"
name: "iam-data-go"
description: "IAM Data for Actions, Resources and Condition Keys packaged in a Go module; updated daily."
readmeQualityOk: true
url: "https://github.com/cloud-copilot/iam-data-go"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-07T17:20:18Z"
lastCommitAt: "2026-08-14T05:15:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 56
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8cf56ebc6a1d83ad61360f96fd99245ac36b9fa3826861b85e0fcef10776de82/cloud-copilot/iam-data-go"
---

# AWS IAM Data for Go

## Description
Contains IAM data for AWS actions, resources, and conditions based on IAM policy documents. This is intended to be used in downstream projects to provide a reference for IAM policy documents.

## Data Updates
Data is scanned daily and a new version is published if there are changes. The version number is updated to reflect the date of the last update and the function `UpdatedAt()` returns the date of the last data update. This process is managed outside this repo.

## Usage

```go
package main

import (
  "fmt"
  "github.com/cloud-copilot/iam-data-go/iamdata"
)

func main() {
  serviceKeys, _ := iamdata.ServiceKeys()
  for _, serviceKey := range serviceKeys {
    serviceName, _ := iamdata.ServiceName(serviceKey)
    fmt.Println("Getting Actions for", serviceName)
    actions, _ := iamdata.ActionsForService(serviceKey)
    for _, action := range actions {
      actionDetails, _ := iamdata.ActionDetails(serviceKey, action)
      fmt.Println(actionDetails)
    }
  }
}
```

## API
### Services
* `ServiceKeys()` - Returns a slice of all service keys such as 's3', 'ec2', etc.
* `ServiceName(serviceKey string)` - Returns the service name for a given…
