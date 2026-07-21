---
repo: "cucumber/tag-expressions"
name: "tag-expressions"
description: "Cucumber tag expression parser"
readmeQualityOk: true
url: "https://github.com/cucumber/tag-expressions"
language: "Python"
languages: ["Python"]
languagePcts: [35]
topics: ["polyglot-release", "go", "java", "javascript", "perl", "python", "ruby", "tidelift"]
stars: 19
forks: 11
openIssues: 2
closedIssues: 12
watchers: 63
contributors: 68
recentReleases: 0
createdAt: "2021-10-01T14:33:13Z"
lastCommitAt: "2026-07-20T23:44:39Z"
lastReleaseAt: "2024-10-28T12:03:41Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "community_watch", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 53
maintainers: ["renovate[bot]", "mpkorstanje", "davidjgoss"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d78871f828420ec3186ff54bb3a02eee30149e3c673feec35f0aa68957dbc42/cucumber/tag-expressions"
fundingLinks: ["GITHUB:https://github.com/cucumber", "OPEN_COLLECTIVE:https://opencollective.com/cucumber"]
---

# Tag Expressions

Tag Expressions is a simple query language for tags. The simplest tag expression is
simply a single tag, for example:

```gherkin
@smoke
```

A slightly more elaborate expression may combine tags, for example:

```gherkin
@smoke and not @ui
```

Tag Expressions are used for two purposes:

1. Run a subset of scenarios (using the `--tags expression` option of the [command line](https://cucumber.io/docs/cucumber/api/#running-cucumber))
2. Specify that a hook should only run for a subset of scenarios (using [conditional hooks](https://cucumber.io/docs/cucumber/api/#hooks))

Tag Expressions are [boolean expressions](https://en.wikipedia.org/wiki/Boolean_expression)
of tags with the logical operators `and`, `or` and `not`.

For more complex Tag Expressions you can use parenthesis for clarity, or to change operator precedence:

```gherkin
(@smoke or @ui) and (not @slow)
```

## Escaping

If you need to use one of the reserved characters `(`, `)`, `\` or ` ` (whitespace) in a tag,
you can escape it with a `\`. Examples:

| Gherkin Tag   | Escaped Tag Expression |
| ------------- | ---------------------- |
| @x(y)         | @x\\(y\\)              |
| @x\y          |…
