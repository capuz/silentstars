---
repo: "stepchowfun/paxos"
name: "paxos"
description: "An implementation of single-decree Paxos."
readmeQualityOk: true
url: "https://github.com/stepchowfun/paxos"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["paxos", "rust"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-03-15T05:39:50Z"
lastCommitAt: "2026-07-15T05:53:00Z"
lastReleaseAt: "2026-04-06T07:32:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 52
maintainers: ["stepchowfun"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0619e62a49ac11541d901367147dbeba682922428d9c47ab6dbd153772e218e/stepchowfun/paxos"
---

# Paxos

This is a reference implementation of single-decree Paxos.

## Configuration

By default, the program looks for a configuration file named `config.yml` in the working directory. This file describes the cluster membership. An [example configuration](https://github.com/stepchowfun/paxos/blob/main/config.yml) is provided in this repository.

## Usage

For a simple demonstration, run the following commands from separate terminals in the repository root:

```sh
paxos --node 0 --propose foo
paxos --node 1 --propose bar
paxos --node 2 --propose baz
```

The cluster will likely achieve consensus immediately after two of the three nodes have been started. The chosen value will be printed to STDOUT by each node in the cluster.

Here are the supported command-line options:

```
Usage: paxos [OPTIONS] --node <INDEX>

Options:
  -v, --version             Print version
  -n, --node <INDEX>        Set the index of the node corresponding to this instance
  -x, --propose <VALUE>     Propose a value to the cluster
  -c, --config-file <PATH>  Set the path to the config file [default: config.yml]
  -d, --data-dir <PATH>     Set the path to the directory in which to store persistent data…
