---
repo: "agenticode/my"
name: "my"
description: "MemorY: read-only memory error analysis. Turns RAS logs into DIMM-level findings with slot maps, address heatmaps and timelines."
readmeQualityOk: true
url: "https://github.com/agenticode/my"
homepage: "https://my.sh"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 73
forks: 22
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2026-11-14T08:10:20Z"
lastCommitAt: "2026-11-17T14:42:25Z"
lastReleaseAt: "2026-11-16T17:22:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["agenticode"]
openGraphImageUrl: "https://opengraph.githubassets.com/364e426b01f15d52f1c7a7f80b11f7af6d0b2d056e77c9007373d68d410ffcdd/agenticode/my"
---

# MemorY

[English](https://github.com/agenticode/my/blob/HEAD/README.md) | [한국어](https://github.com/agenticode/my/blob/HEAD/README.ko.md)

MemorY reads the memory error records a Linux server already keeps and shows which DIMM is failing, where inside the DIMM the fault sits, how it developed across reboots and repairs, and what the finding rests on.

It is for anyone who has to read memory errors and decide what to do: platform and datacenter engineers, SREs, field and support engineers of hardware vendors, system integrators, kernel and RAS developers.

The command is `my`: one static binary that needs no configuration. It only reads, with one exception that has to be asked for: `my harvest install` puts a systemd unit file on the host (two with `--timer`) and enables it, and `my harvest uninstall` removes them. It never takes a page offline, starts a repair or resets a counter.

## Why

A server records memory errors in several places: the rasdaemon database, the kernel log, the EDAC counters, the event log of the BMC. Each has its own form. The counters start at zero with every boot and the logs rotate. A record names the place of one error; no record shows the fault that the…
