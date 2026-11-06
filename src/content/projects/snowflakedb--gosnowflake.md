---
repo: "snowflakedb/gosnowflake"
name: "gosnowflake"
description: "Go Snowflake Driver"
readmeQualityOk: true
url: "https://github.com/snowflakedb/gosnowflake"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["golang", "snowflake"]
stars: 367
forks: 174
openIssues: 20
closedIssues: 368
watchers: 21
contributors: 134
recentReleases: 0
createdAt: "2016-09-29T22:09:11Z"
lastCommitAt: "2026-11-06T12:17:46Z"
lastReleaseAt: "2018-01-25T01:16:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 40
maintainers: ["sfc-gh-pfus", "sfc-gh-boler", "sfc-gh-mhofman"]
openGraphImageUrl: "https://opengraph.githubassets.com/d97addee7365dc394af9cec6488f9fc698bf52be9ddcb6316eafe7d320c1661a/snowflakedb/gosnowflake"
---

## Migrating to v2

**Version 2.0.0 of the Go Snowflake Driver was released on March 3rd, 2026.** This major version includes breaking changes that require code updates when migrating from v1.x.

### Key Changes and Migration Steps

#### 1. Update Import Paths

Update your `go.mod` to use v2:

```sh
go get -u github.com/snowflakedb/gosnowflake/v2
```

Update imports in your code:

```go
// Old (v1)
import "github.com/snowflakedb/gosnowflake"

// New (v2)
import "github.com/snowflakedb/gosnowflake/v2"
```

#### 2. Arrow Batches Moved to Separate Package

The public Arrow batches API now lives in `github.com/snowflakedb/gosnowflake/v2/arrowbatches`.
Importing that sub-package pulls in the additional Arrow compute dependency only for applications
that use Arrow batches directly.

**Migration:**

```go
import (
    "context"
    "database/sql/driver"

    sf "github.com/snowflakedb/gosnowflake/v2"
    "github.com/snowflakedb/gosnowflake/v2/arrowbatches"
)

ctx := arrowbatches.WithArrowBatches(context.Background())

var rows driver.Rows
err := conn.Raw(func(x any) error {
    rows, err = x.(driver.QueryerContext).QueryContext(ctx, query, nil)
    return err
})
if err != nil {
    //…
