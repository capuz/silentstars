---
repo: "omegion/db-backup"
name: "db-backup"
description: "Go CLI tool to create database backups on local and S3 bucket."
readmeQualityOk: true
url: "https://github.com/omegion/db-backup"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["backups", "s3-buckets", "database-backup", "open-source"]
stars: 21
forks: 5
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2021-02-28T21:57:15Z"
lastCommitAt: "2026-07-16T05:59:22Z"
lastReleaseAt: "2022-05-30T08:06:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 37
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6140c4e7f0545b010a34bf98c4c8e34d02eb2b419f783d3e478388286aca1fd2/omegion/db-backup"
discussionCount: 2
---

# Database Backup Tool

Dump or Import backups from local or S3 buckets.

## Install Globally

```shell
go get github.com/omegion/db-backup
```

```shell
CLI command to create backup for provider in local or cloud.

Usage:
  db-backup [command]

Available Commands:
  help        Help about any command
  local       dump Management
  s3          dump Management
  version     Print the version/build number

Flags:
  -h, --help              help for db-backup
      --logLevel string   Set the logging level. One of: debug|info|warn|error (default "info")

Use "db-backup [command] --help" for more information about a command.
```

## Custom S3 Endpoint for Scaleway

```shell
export AWS_ACCESS_KEY_ID=X
export AWS_SECRET_ACCESS_KEY=X
export AWS_DEFAULT_REGION=fr-par
export BUCKET_NAME=test

db-backup dump s3 \
  --type=postgres \
  --host=example.com \
  --port=1234 \
  --provider=test \
  --username=test \
  --password="12345" \
  --bucket-name=$BUCKET_NAME \
  --endpoint-url=s3.fr-par.scw.cloud
```
