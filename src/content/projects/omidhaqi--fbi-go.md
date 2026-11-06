---
repo: "OmidHaqi/FBI-Go"
name: "FBI-Go"
description: "FBI-Go is a utility that lets you force applications to use a specific network interface or IP address for their outgoing connections. It's similar to ForceBindIP on Windows and is useful on systems with multiple network interfaces when you want to control which one an app uses."
readmeQualityOk: true
url: "https://github.com/OmidHaqi/FBI-Go"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["fbi", "forcebindip", "go"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-20T15:22:14Z"
lastCommitAt: "2026-11-06T13:20:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["OmidHaqi"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e888ee800d469331e163915665a3eb2e59a9cb9576e07e428633da8d5863d4e/OmidHaqi/FBI-Go"
---

# FBI-Go 2.0

FBI-Go is a Linux Multi-WAN research backend with a read-only host CLI and an isolated networking laboratory. It discovers devices and builds routing plans. Managed application routing, DNS, IPv6 fail-closed protection, and transactional recovery have been tested in rootless namespaces and a disposable VM. **Production host routing and `HOST_APPLY` remain unsupported.** A plan or saved policy does not change host networking. The legacy ForceBindIP mode remains available.

## Build

Go 1.23 and Linux are required. The legacy shared library additionally needs a C compiler. See [installation and prerequisites](https://github.com/OmidHaqi/FBI-Go/blob/HEAD/docs/install.md).

```sh
make all
go test ./...
go vet ./...
```

The Makefile builds `fbi` and `binder.so` in this directory. For the legacy mode, keep both files together.

## Host inspection

```sh
./fbi version
./fbi multiwan scan
./fbi multiwan status --json
./fbi multiwan doctor --json
./fbi multiwan plan --json
./fbi multiwan plan-m2 internal/routing/testdata/fedora_topology.json --json
```

These commands require no sudo and never change routing, DNS, nftables, NetworkManager, or sysctls. `doctor` reports host…
