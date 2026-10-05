---
repo: "ArcadeData/arcadedb-docs"
name: "arcadedb-docs"
description: "ArcadeDB Documentation"
readmeQualityOk: true
url: "https://github.com/ArcadeData/arcadedb-docs"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [72, 26]
stars: 9
forks: 28
openIssues: 7
closedIssues: 48
watchers: 4
contributors: 31
recentReleases: 0
createdAt: "2021-07-06T16:18:56Z"
lastCommitAt: "2026-10-05T02:16:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 83
maintainers: ["lvca", "github-actions[bot]", "robfrank"]
openGraphImageUrl: "https://opengraph.githubassets.com/75039404b52ed1e982c6b2d714062c1a367d3eef64ce10335993d6e93e72efbf/ArcadeData/arcadedb-docs"
postedAt: "2026-09-07T08:39:00.385Z"
---

# ArcadeDB Documentation

Generate html and pdf documentation:

```shell
mvn generate-resources
```

> **Tip:** You can build the documentation without installing Maven locally by using Docker:
> ```sh
> docker run --rm -v "$PWD":/docs -w /docs maven:3.8.8 mvn generate-resources
> ```

Documentation is generated under `target/generated-docs` folder

Serve documentation on local http server:

```shell
mvn jetty:run
```

> **Tip:** You can also serve the documentation using Docker without installing Maven:
>
> ```sh
> docker run --rm -it -p 8080:8080 -v "$PWD":/docs -w /docs maven:3.8.8 mvn jetty:run
> ```
>
> Then open your browser to [http://localhost:8080](http://localhost:8080)

then open the browser to http://localhost:8080

## Documentation Conventions

To maintain consistency across the documentation, please follow these naming conventions:

### File Naming Conventions

All documentation files should use lowercase naming with hyphens between words:

- ✅ `lowercase-with-hyphens.adoc`
- ❌ `CamelCase.adoc`
- ❌ `UPPERCASE.adoc`
- ❌ `snake_case.adoc`

### Document ID Anchors

Document anchors should also use lowercase with hyphens:

```asciidoc
[[anchor-id-example]]
== Section…
