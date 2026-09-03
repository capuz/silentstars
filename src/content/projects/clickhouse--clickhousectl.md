---
repo: "ClickHouse/clickhousectl"
name: "clickhousectl"
description: "The CLI for ClickHouse: local and cloud."
readmeQualityOk: true
url: "https://github.com/ClickHouse/clickhousectl"
homepage: "https://clickhouse.com/cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["clickhouse"]
stars: 74
forks: 5
openIssues: 42
closedIssues: 270
watchers: 2
contributors: 56
recentReleases: 0
createdAt: "2026-02-05T18:05:16Z"
lastCommitAt: "2026-09-03T08:12:45Z"
lastReleaseAt: "2026-03-09T20:54:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 38
maintainers: ["sdairs"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ab0e01fc288c924b05ad7b8ce18417edf44a921cec2840ee7e58ad0f07fa736/ClickHouse/clickhousectl"
---

# clickhousectl

`clickhousectl` (`chctl`) is the official CLI for ClickHouse and Postgres, locally and in ClickHouse Cloud.

With `clickhousectl` you can:
- Install, run, and query ClickHouse locally
- Run Docker-backed Postgres instances for local development
- Create a ClickHouse Cloud account and authenticate from the terminal
- Create and manage ClickHouse and Postgres services in ClickHouse Cloud
- Run SQL against local and cloud ClickHouse services
- Create and manage ClickPipes for data ingestion (S3, Kafka, Kinesis, Postgres, MySQL, MongoDB, BigQuery)
- Install the official ClickHouse agent skills into supported coding agents
- Move local ClickHouse development to ClickHouse Cloud

`clickhousectl` helps humans and coding agents develop with ClickHouse and Postgres.

## Installation

### Quick install

```bash
curl -fsSL https://clickhouse.com/cli | sh
```

The install script will download the correct version for your OS and install to `~/.local/bin/clickhousectl`. A `chctl` alias is also created automatically for convenience.

### `cargo binstall`

If you already have [`cargo-binstall`](https://github.com/cargo-bins/cargo-binstall), this pulls the prebuilt binary from…
