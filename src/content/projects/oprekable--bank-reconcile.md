---
repo: "oprekable/bank-reconcile"
name: "bank-reconcile"
description: "A simple command-line tool for bank statement reconciliation, designed to demonstrate software development best practices using the Go programming language."
readmeQualityOk: true
url: "https://github.com/oprekable/bank-reconcile"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["bank-reconciliation", "bank-statements", "command-line", "golang", "bank-reconcile", "oprekable"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-04T16:39:20Z"
lastCommitAt: "2026-11-07T16:11:26Z"
lastReleaseAt: "2025-04-30T05:29:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 62
maintainers: ["oprekable", "dependabot[bot]", "firstlabstudio"]
openGraphImageUrl: "https://opengraph.githubassets.com/42dd73424a064d676b1e6a674f17aee7d20f4fc6540e7125f9cfbda4d529267c/oprekable/bank-reconcile"
---

# What is this?

This code repository demonstrates how to create an application using the Go programming language while adhering to common software development best practices.

The implementation covers the following aspects:

- Logic abstractions using SQL (SQLite) to handle the business logic of transaction reconciliation. For enhanced scalability, the database can be switched to another DB.
- Implementation of unit tests to maximize code coverage across various aspects, including SQL mocks, common interface mocks, file system mocks, time mocks, and IO mocks.
- Optimization of the codebase to meet [SonarQube](https://sonarcloud.io) standards, focusing on code quality, bug detection, code smells, duplicate lines, and coverage.
- Utilization of development tools such as:
    - Code linter ([golangci-lint](https://github.com/golangci/golangci-lint/cmd/golangci-lint))
    - Dependency injection ([wire](https://github.com/google/wire/cmd/wire))
    - Code mock ([mockery](https://github.com/vektra/mockery/v2))
    - Dead code checker ([deadcode](https://golang.org/x/tools/cmd/deadcode))
    - Go import checker ([goimports](https://golang.org/x/tools/cmd/goimports))
    - Go struct…
