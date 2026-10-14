---
repo: "vmware/etcd-diagnosis"
name: "etcd-diagnosis"
description: " A diagnostic tool for etcd that helps identify and resolve cluster issues efficiently"
readmeQualityOk: true
url: "https://github.com/vmware/etcd-diagnosis"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 37
forks: 3
openIssues: 3
closedIssues: 2
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2025-10-24T18:15:24Z"
lastCommitAt: "2026-10-14T08:57:48Z"
lastReleaseAt: "2025-12-17T15:49:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 61
undervaluedScore: 25
maintainers: ["dependabot[bot]", "ahrtr"]
openGraphImageUrl: "https://opengraph.githubassets.com/f144bd3cf1687be392fdda1725a78d68664973aa0dff2e6af99c316142573ca3/vmware/etcd-diagnosis"
---

# etcd-diagnosis

etcd-diagnosis is a low-level etcd diagnosis tool. See the detailed usage below.

```
$ ./etcd-diagnosis -h
A comprehensive etcd diagnosis tool

Usage:
  etcd-diagnosis [command]

Available Commands:
  bbolt            A simple command line tool for inspecting bbolt databases
  commit-index     commit-index reads the commit index from data directory.
  completion       Generate the autocompletion script for the specified shell
  consistent-index consistent-index reads consistent_index from the meta bucket in the db file.
  hash             hash computes the hash of db file.
  help             Help about any command
  iterate-bucket   iterate-bucket lists key-value pairs in reverse order.
  list-bucket      list-bucket lists all buckets.
  log              log dumps the log from data directory.
  report           report generates a diagnostic report for a running etcd cluster.
  version          Prints the version of etcd-diagnosis

Flags:
  -h, --help               help for etcd-diagnosis
      --timeout duration   time to wait to obtain a file lock on db file, 0 to block indefinitely (default 10s)

Use "etcd-diagnosis [command] --help" for more information about…
