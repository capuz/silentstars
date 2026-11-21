---
repo: "naver/spring-batch-plus"
name: "spring-batch-plus"
description: "Add useful features to spring batch"
readmeQualityOk: true
url: "https://github.com/naver/spring-batch-plus"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [68, 32]
topics: ["kotlin", "spring-batch", "java", "kotlin-dsl", "dsl"]
stars: 130
forks: 10
openIssues: 1
closedIssues: 22
watchers: 4
contributors: 9
recentReleases: 2
createdAt: "2022-10-27T02:33:44Z"
lastCommitAt: "2026-11-21T11:36:02Z"
lastReleaseAt: "2026-11-10T00:34:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 47
maintainers: ["acktsap"]
openGraphImageUrl: "https://opengraph.githubassets.com/a31625a600a3bd45f8e4f640f3afb894ac0db13a5576a0ba9449800f8fed7612/naver/spring-batch-plus"
---

# Spring Batch Plus

Spring Batch Plus provides extension features to [Spring Batch](https://github.com/spring-projects/spring-batch).

## Features

### Kotlin DSL

```kotlin
@Bean
fun testJob(batch: BatchDsl): Job =
    batch {
        job("testJob") {
            step("jobStep1") {
                jobBean("subJob1")
            }
            step("jobStep2") {
                jobBean("subJob2")
            }
        }
    }

@Bean
fun subJob1(batch: BatchDsl, transactionManager: PlatformTransactionManager): Job =
    batch {
        job("subJob1") {
            step("testStep1") {
                tasklet({ _, _ -> RepeatStatus.FINISHED }, transactionManager)
            }
        }
    }

@Bean
fun subJob2(batch: BatchDsl, transactionManager: PlatformTransactionManager): Job =
    batch {
        job("subJob2") {
            step("testStep2") {
                tasklet({ _, _ -> RepeatStatus.FINISHED }, transactionManager)
            }
        }
    }
```

### Single class reader-processor-writer

- ItemStreamFluxReaderProcessorWriter
- ItemStreamIterableReaderProcessorWriter
- ItemStreamIterableReaderProcessorWriter
- ItemStreamSimpleReaderProcessorWriter
