---
repo: "mxenabled/path-core"
name: "path-core"
description: "A connector framework for bringing together disparate systems."
readmeQualityOk: true
url: "https://github.com/mxenabled/path-core"
language: "Java"
languages: ["Java", "Groovy"]
languagePcts: [65, 33]
stars: 6
forks: 1
openIssues: 0
closedIssues: 7
watchers: 8
contributors: 17
recentReleases: 0
createdAt: "2022-06-14T16:58:36Z"
lastCommitAt: "2026-07-09T20:44:14Z"
lastReleaseAt: "2022-12-16T16:09:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 48
maintainers: ["github-actions[bot]", "stevecl5", "meotchwilliams"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dbef32961bbfdc0206e049236d9b5b7d408ba43d323e989b2823ca013feb8fb/mxenabled/path-core"
---

# Path Core - Subprojects

* [Common](https://github.com/mxenabled/path-core/blob/HEAD/common/README.md)
* [Context](https://github.com/mxenabled/path-core/blob/HEAD/context/README.md)
* [Gateway](https://github.com/mxenabled/path-core/blob/HEAD/gateway/README.md)
* [Gateway Generator](https://github.com/mxenabled/path-core/blob/HEAD/gateway-generator/README.md)
* [Http](https://github.com/mxenabled/path-core/blob/HEAD/http/README.md)
* [Messaging](https://github.com/mxenabled/path-core/blob/HEAD/messaging/README.md)
* [Testing](https://github.com/mxenabled/path-core/blob/HEAD/testing/README.md)
* [Utilities](https://github.com/mxenabled/path-core/blob/HEAD/utilities/README.md)

[Documentation](https://docs.mx.com/path-sdk#overview_getting_started)

## Usage

### Using platform (preferred)

_Gradle_

```groovy
dependencies {
  api platform("com.mx.path-core:platform:7.0.1")

  implementation "com.mx.path-core:common"
  implementation "com.mx.path-core:context"
  implementation "com.mx.path-core:gateway"
  implementation "com.mx.path-core:http"
  implementation "com.mx.path-core:messaging"
  implementation "com.mx.path-core:utilities"

  annotationProcessor…
