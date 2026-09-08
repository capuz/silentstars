---
repo: "ConduitIO/conduit-connector-s3"
name: "conduit-connector-s3"
description: "Conduit connector for Amazon S3"
readmeQualityOk: true
url: "https://github.com/ConduitIO/conduit-connector-s3"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["s3", "go", "golang", "conduit"]
stars: 9
forks: 5
openIssues: 4
closedIssues: 8
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2022-02-17T14:40:01Z"
lastCommitAt: "2026-09-08T08:17:37Z"
lastReleaseAt: "2025-03-20T11:38:26Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 70
maintainers: ["dependabot[bot]", "devarismeroxa"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbf02a0bfecf07de047246f65649107166203eac30ee41ab621dc88cb08319ba/ConduitIO/conduit-connector-s3"
---

# Conduit Connector S3

The S3 connector is one of [Conduit](https://github.com/ConduitIO/conduit)
builtin plugins. It provides both, a source and a destination S3 connectors.

## Source

The S3 Source Connector connects to a S3 bucket with the provided
configurations, using `aws.bucket`, `aws.accessKeyId`,`aws.secretAccessKey` and
`aws.region`. If the bucket doesn't exist, or the permissions fail, then an
error will occur. After that, the `Open` method is called to start the
connection from the provided position.

### Change Data Capture (CDC)

This connector implements CDC features for S3 by scanning the bucket for changes
every `pollingPeriod` and detecting any change that happened after a certain
timestamp. These changes (update, delete, create) are then inserted into a
buffer that is checked on each Read request.

* To capture "delete" and "update", the S3 bucket versioning must be enabled.
* To capture "create" actions, the bucket versioning doesn't matter.

#### Position Handling

The connector goes through two modes.

* Snapshot mode: which loops through the S3 bucket and returns the objects that
  are already in there. The _Position_ during this mode is the object key…
