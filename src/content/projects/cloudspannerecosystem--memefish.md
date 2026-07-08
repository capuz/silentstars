---
repo: "cloudspannerecosystem/memefish"
name: "memefish"
description: "memefish is the foundation to analyze Spanner SQL"
readmeQualityOk: true
url: "https://github.com/cloudspannerecosystem/memefish"
homepage: "https://cloudspannerecosystem.dev/memefish/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 94
forks: 26
openIssues: 24
closedIssues: 108
watchers: 5
contributors: 21
recentReleases: 1
createdAt: "2019-08-30T00:52:46Z"
lastCommitAt: "2026-07-08T05:43:36Z"
lastReleaseAt: "2026-05-30T14:39:43Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 42
maintainers: ["apstndb", "renovate-bot", "makenowjust"]
openGraphImageUrl: "https://opengraph.githubassets.com/144e0249d59cf580e5b2ac76b77af7823ace115bd584310d91eb9bea7afd9641/cloudspannerecosystem/memefish"
---

</p>

# méméfish

> méméfish is the [Spanner][] [SQL][Spanner SQL] parser for Go.

[Spanner]: https://cloud.google.com/spanner/
[Spanner SQL]: https://cloud.google.com/spanner/docs/query-syntax

## News

<table>
  <tr><th>ℹ️</th><td>

Since 2023/4/1, this repository has been moved from [MakeNowJust](https://github.com/makenowjust) to [cloudspannerecosystem](https://github.com/cloudspannerecosystem).
You may need to migrate import paths from `github.com/MakeNowJust/memefish` to `github.com/cloudspannerecosystem/memefish` like:

```diff
 import (
-	"github.com/MakeNowJust/memefish/pkg/parser"
+	"github.com/cloudspannerecosystem/memefish/pkg/parser"
 )
```

  </td></tr>

  <tr><th>ℹ️</th><td>

Since 2023/4/12, the layout of this repository has been changed.
Now, the old `parser` package has been moved to the top of the repository as the new `memefish` package, and sub-packages in the `pkg` directory are placed under the top.
You may need to migrate import paths like:

```diff
 import (
-	"github.com/cloudspannerecosystem/memefish/pkg/token"
-	"github.com/cloudspannerecosystem/memefish/pkg/parser"
+	parser "github.com/cloudspannerecosystem/memefish"
+…
