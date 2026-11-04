---
repo: "ArjenSchwarz/awstools"
name: "awstools"
description: "A little application to help with more complex AWS functions"
readmeQualityOk: true
url: "https://github.com/ArjenSchwarz/awstools"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 27
forks: 4
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2016-11-02T23:06:45Z"
lastCommitAt: "2026-11-04T13:05:37Z"
lastReleaseAt: "2025-09-20T05:28:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 35
maintainers: ["ArjenSchwarz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2dafa972ec9b7149b07931282d29e177e42f5d157d3dbd4902f73e4c413565ad/ArjenSchwarz/awstools"
---

# awstools

awstools is a Go application that allows me to more easily do complex actions with AWS data. It doesn't try to replicate things that are already easy to do with the CLI, but instead focuses on more complex actions. This usually involves things that would take multiple CLI calls and a fair bit of scripting or manual work.

## Functionalities

Currently built in features organized by AWS service:

### IAM (Identity and Access Management)
* Get a list of all IAM users, their groups, and the policies active upon them
* Get an overview of IAM roles and their attached policies

### VPC (Virtual Private Cloud)
* Get an overview of VPC routes and route tables
* Analyze VPC peering connections
* Get ENI (Elastic Network Interface) overview with optional subnet splitting
* Get comprehensive VPC IP usage analysis with detailed subnet breakdown
* Find and analyze specific IP addresses across ENIs and resources

### CloudFormation
* Get a list of all the resources in a CloudFormation stack, including those from nested stacks

### AWS Organizations
* Get a graphical overview of your organization's structure
* Generate account name mappings for use in naming files

### SSO (Single…
