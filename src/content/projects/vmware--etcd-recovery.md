---
repo: "vmware/etcd-recovery"
name: "etcd-recovery"
description: "Enables engineers to inspect cluster data, analyze issues, and reconstruct clusters in a controlled manner. "
readmeQualityOk: true
url: "https://github.com/vmware/etcd-recovery"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 9
forks: 2
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 21
recentReleases: 0
createdAt: "2025-10-24T18:23:23Z"
lastCommitAt: "2026-09-29T10:04:58Z"
lastReleaseAt: "2025-12-09T17:08:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 37
maintainers: ["dependabot[bot]", "ahrtr", "pthangad"]
openGraphImageUrl: "https://opengraph.githubassets.com/40096859969eebc097f61a7ad8da00b10acfb9e1c6e2b1781608e81490f7dbf1/vmware/etcd-recovery"
---

# etcd-recovery

Recovering etcd clusters can be manual, time-consuming, and error-prone. **etcd-recovery** is a generic tool
that simplifies and automates the recovery process, even when quorum is lost, helping engineers restore
etcd clusters safely and efficiently. See the detailed usage below.

```
$ ./etcd-recovery -h
A tool to automatically recover an etcd cluster when quorum is lost

Usage:
  etcd-recovery [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  exec        Execute command against host(s)
  help        Help about any command
  repair      Perform etcd repair operations
  select      Select the best member to recover the cluster from
  version     Prints the version of etcd-recovery

Flags:
  -c, --config string    path to etcd cluster hosts config file (default "hosts.json")
  -h, --help             help for etcd-recovery
  -v, --verbose          enable verbose output

Use "etcd-recovery [command] --help" for more information about a command.
```

The `exec` subcommand accepts a `--command` flag specific to it:

```
$ ./etcd-recovery exec -h
Execute command against host(s)

Usage:
  etcd-recovery exec [flags]…
