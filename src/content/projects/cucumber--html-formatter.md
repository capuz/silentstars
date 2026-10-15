---
repo: "cucumber/html-formatter"
name: "html-formatter"
description: "HTML formatter for reporting Cucumber results"
readmeQualityOk: true
url: "https://github.com/cucumber/html-formatter"
homepage: "https://cucumber.io/"
language: "C#"
languages: ["C#", "Java"]
languagePcts: [41, 30]
topics: ["cucumber", "bdd", "polyglot-release", "java", "ruby", "javascript", "tidelift"]
stars: 21
forks: 6
openIssues: 14
closedIssues: 29
watchers: 67
contributors: 52
recentReleases: 0
createdAt: "2019-10-21T13:50:58Z"
lastCommitAt: "2026-10-15T04:24:16Z"
lastReleaseAt: "2023-07-13T15:23:06Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "funded"]
healthScore: 93
undervaluedScore: 50
maintainers: ["renovate[bot]", "dependabot[bot]", "mpkorstanje"]
openGraphImageUrl: "https://opengraph.githubassets.com/347b8ec2950e84e72b53859d31886ee00c91eb8d55d8c1c8704f02b5137732fd/cucumber/html-formatter"
fundingLinks: ["GITHUB:https://github.com/cucumber", "OPEN_COLLECTIVE:https://opencollective.com/cucumber"]
---

# Cucumber HTML Formatter

This is a cross-platform formatter that produces a pretty HTML report for Cucumber runs.

It is built on top of [@cucumber/react-components](https://github.com/cucumber/react-components) and works with *any*
Cucumber implementation with a `message` formatter that outputs [cucumber messages](https://github.com/cucumber/common/tree/main/messages).

This formatter is built into the following Cucumber implementations:

* [cucumber-ruby](https://github.com/cucumber/cucumber-ruby/blob/main/lib/cucumber/formatter/html.rb)
* [cucumber-jvm](https://github.com/cucumber/cucumber-jvm/blob/main/core/src/main/java/io/cucumber/core/plugin/HtmlFormatter.java)
* [cucumber-js](https://github.com/cucumber/cucumber-js/blob/main/src/formatter/html_formatter.ts)
* [Reqnroll](https://github.com/reqnroll/Reqnroll/blob/main/Reqnroll/Formatters/Html/HtmlFormatter.cs)

## Customizations

_Supported by: Java and .Net_

The formatter can be configured with:
 * A custom page title and icon
 * Additional CSS to support [styling react components](https://github.com/cucumber/react-components?tab=readme-ov-file#styling).
 * Additional Javascript for other customisations.
 * The default…
