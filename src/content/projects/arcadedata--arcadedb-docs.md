---
repo: "ArcadeData/arcadedb-docs"
name: "arcadedb-docs"
description: "ArcadeDB Documentation"
readmeQualityOk: true
url: "https://github.com/ArcadeData/arcadedb-docs"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [75, 23]
stars: 10
forks: 30
openIssues: 8
closedIssues: 61
watchers: 4
contributors: 31
recentReleases: 0
createdAt: "2021-07-06T16:18:56Z"
lastCommitAt: "2026-11-02T14:36:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 82
maintainers: ["lvca", "github-actions[bot]", "robfrank"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ab5c65a6b8771094a6e7a46b5bb107d1bc4049dc7b97cfe02241146968c14d9/ArcadeData/arcadedb-docs"
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
