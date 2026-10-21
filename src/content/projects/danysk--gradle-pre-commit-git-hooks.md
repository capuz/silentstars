---
repo: "DanySK/gradle-pre-commit-git-hooks"
name: "gradle-pre-commit-git-hooks"
description: "A Gradle plugin enforcing pre-commit and commit-msg Git hooks configuration. Conventional-commits-ready."
readmeQualityOk: true
url: "https://github.com/DanySK/gradle-pre-commit-git-hooks"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [90]
stars: 78
forks: 7
openIssues: 4
closedIssues: 12
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2022-01-04T09:54:34Z"
lastCommitAt: "2026-10-21T08:49:13Z"
lastReleaseAt: "2022-04-19T19:50:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 47
maintainers: ["renovate[bot]", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/68f0ee8a62f52438c416e2cf3ac81b8da875656845f1a1187df5b56589d5f75a/DanySK/gradle-pre-commit-git-hooks"
---

# Gradle pre-commit Git Hooks

A Gradle plugin enforcing pre-commit and commit-msg Git hooks configuration. Conventional-commits-ready.

Hooks are created upfront, before the execution of any task.
This implies that even when importing the project into a gradle-aware IDE,
the hooks are generated automatically.

## Usage

This plugin must be applied to `settings.gradle.kts`.

```kotlin
plugins {
    id("org.danilopianini.gradle-pre-commit-git-hooks") version "<version>"
}

gitHooks {
    // Configuration
    createHooks() // actual hooks creation
}
```

The Groovy syntax is not officially supported.
However, since Groovy can call Kotlin, it is still possible
(though pretty cumbersome)
to use the plugin from a Groovy `settings.gradle` file:

```groovy
plugins {
    id('org.danilopianini.gradle-pre-commit-git-hooks') version '<version>'
}

gitHooks { extension ->
    extension.with {
        commitMsg { context ->
            context.with {
                conventionalCommits { conventionalCommits ->
                    conventionalCommits.with {
                        defaultTypes()
                    }
                }
            }
        }
        createHooks(true)
    }
}…
