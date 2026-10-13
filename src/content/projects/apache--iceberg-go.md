---
repo: "apache/iceberg-go"
name: "iceberg-go"
description: "Apache Iceberg - Go"
readmeQualityOk: true
url: "https://github.com/apache/iceberg-go"
homepage: "https://go.iceberg.apache.org/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["apache", "golang", "iceberg"]
stars: 472
forks: 250
openIssues: 60
closedIssues: 338
watchers: 24
contributors: 144
recentReleases: 0
createdAt: "2023-08-11T06:07:45Z"
lastCommitAt: "2026-10-13T10:57:15Z"
lastReleaseAt: "2025-09-24T15:50:42Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 96
undervaluedScore: 40
maintainers: ["fallintoplace", "Revanth14", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc5392e1b2243625413e2319adc68e5fc0b8e4e0ecb341caa926b80a8b6576df/apache/iceberg-go"
---

# Iceberg Golang

`iceberg` is a Golang implementation of the [Iceberg table spec](https://iceberg.apache.org/spec/).

## Build From Source

### Prerequisites

* Go 1.26 or later

### Build

```shell
$ git clone https://github.com/apache/iceberg-go.git
$ cd iceberg-go/cmd/iceberg && go build .
```

## Running Tests

Use the [Makefile](https://github.com/apache/iceberg-go/blob/HEAD/Makefile) so commands stay in sync with CI (e.g. golangci-lint version).

### Unit tests

```shell
make test
```

### Linting

```shell
make lint
```

Install the linter first 

```shell
make lint-install
# or: go install github.com/golangci/golangci-lint/v2/cmd/golangci-lint@v2.14.0
```

### Integration tests

**Prerequisites:** Docker, Docker Compose

1. Start the Docker containers using docker compose:

   ```shell
   make integration-setup
   ```

2. Export the required environment variables:

   ```shell
   export AWS_S3_ENDPOINT=http://$(docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' object-store):9000
   export AWS_REGION=us-east-1
   export SPARK_CONTAINER_ID=$(docker ps -qf 'name=spark-iceberg')
   export DOCKER_API_VERSION=$(docker version -f…
