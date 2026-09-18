---
repo: "celestiaorg/blobstreamx-monitor"
name: "blobstreamx-monitor"
description: "Simple monitoring tool for BlobstreamX contract"
readmeQualityOk: true
url: "https://github.com/celestiaorg/blobstreamx-monitor"
language: "Go"
languages: ["Go"]
languagePcts: [80]
stars: 5
forks: 13
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2024-01-15T10:16:19Z"
lastCommitAt: "2026-09-18T08:27:46Z"
lastReleaseAt: "2024-03-19T11:38:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 66
maintainers: ["dependabot[bot]", "rach-id"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6165b2d57411bb9ea35ca5b8641bbee97a8c8b379486717e2b31c7498683336/celestiaorg/blobstreamx-monitor"
---

# blobstreamx-monitor

Simple monitoring tool for BlobstreamX contract. It allows provers/relayers for BlobstreamX to monitor the BlobstreamX updates, and be notified.

The tool currently sends OTEL messages whenever a new batch is submitted, verified and committed by the contract:

- A counter `blobstreamx_monitor_submitted_nonces_counter` of type `Int64Counter`.
- A gauge `blobstreamx_monitor_submitted_nonces` of type `Int64ObservableGauge`.
- A gauge `blobstreamx_monitor_submitted_heights` of type `Int64ObservableGauge`.

## Install

1. [Install Go](https://go.dev/doc/install) 1.21
2. Clone this repo
3. Install the BlobstreamX-monitor CLI

 ```shell
make install
```

## Usage

```sh
# Print help
blobstreamx-monitor --help
```

## How to run

To run the monitoring tool, make sure you have access to an [otel collector](https://opentelemetry.io/docs/collector/installation/), by default it targets the `"localhost:4318"` endpoint:

```shell
blobstreamx-monitor start \
  --evm.rpc <evm_chain_rpc> \
  --evm.contract-address <blobstreamx_contract_address> \
  --metrics.endpoint <otel_collector_endpoint> \
  --log.level debug
```

To start a local monitoring environment, refer to the…
