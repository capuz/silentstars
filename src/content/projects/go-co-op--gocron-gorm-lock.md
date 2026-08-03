---
repo: "go-co-op/gocron-gorm-lock"
name: "gocron-gorm-lock"
description: "A gocron locker implementation using gorm"
readmeQualityOk: true
url: "https://github.com/go-co-op/gocron-gorm-lock"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["hacktoberfest"]
stars: 20
forks: 7
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 5
recentReleases: 1
createdAt: "2023-07-31T19:33:17Z"
lastCommitAt: "2026-08-03T06:44:05Z"
lastReleaseAt: "2026-05-30T09:50:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 48
maintainers: ["dependabot[bot]", "manuelarte", "JohnRoesler"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e271f0bc37c3f81263e0859f91316b5b3bf0effe751aa2de68d3dbcad099a14/go-co-op/gocron-gorm-lock"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/go-co-op"]
---

# Gocron-Gorm-Lock

A gocron locker implementation using gorm

## ⬇️ Install

```bash
go get github.com/go-co-op/gocron-gorm-lock/v2
```

## 📋 Usage

Here is an example usage that would be deployed in multiple instances

```go
package main

import (
    "fmt"

    "github.com/go-co-op/gocron/v2"
    gormlock "github.com/go-co-op/gocron-gorm-lock/v2"
    "gorm.io/gorm"
    "time"
)

func main() {
    var db * gorm.DB // gorm db connection
    var worker string // name of this instance to be used to know which instance run the job
    // db.AutoMigrate(&gormlock.CronJobLock{}) // We need the table to store the job execution
    locker, err := gormlock.NewGormLocker(db, worker)
    // handle the error

    s, err := gocron.NewScheduler(gocron.WithDistributedLocker(locker))
    // handle the error

    f := func() {
        // task to do
        fmt.Println("call 1s")
    }

    _, err = s.NewJob(gocron.DurationJob(1*time.Second), gocron.NewTask(f), gocron.WithName("unique_name"))
    if err != nil {
        // handle the error
    }

    s.Start()
}
```

To check a real use case example, check [examples](https://github.com/go-co-op/gocron-gorm-lock/blob/HEAD/examples).

##…
