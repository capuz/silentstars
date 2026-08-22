---
repo: "metio/yosql"
name: "yosql"
description: "zero dependency database access for java"
readmeQualityOk: true
url: "https://github.com/metio/yosql"
homepage: "https://yosql.projects.metio.wtf/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "sql", "javapoet", "code-generator", "persistence", "dagger2", "jmh", "zero-dependency", "jdbc", "build-tool"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 144
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2017-02-07T19:54:30Z"
lastCommitAt: "2026-08-22T04:07:28Z"
lastReleaseAt: "2022-06-01T04:51:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 82
maintainers: ["sebhoss", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ec3abe6490fb670445ca9f4e7d683fc1dafe8f3215cbf6d037445f3c7e59c1c/metio/yosql"
fundingLinks: ["GITHUB:https://github.com/metio"]
---

# YoSQL

Take a look at the [project website](https://yosql.projects.metio.wtf/) to read the documentation.

## Development

The whole toolchain — JDK, Maven, Hugo, htmltest, Postgres — comes from `flake.nix` and is pinned in `flake.lock`.
CI runs the same shell, so a green gate here is a green gate there.

```console
nix develop --command mvn verify                        # the full gate
nix develop --command hugo server --source docs           # the website, live
nix develop .#native --command mvn -Pnative-image verify # the GraalVM native-image gate
```

## License

```text
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
```
