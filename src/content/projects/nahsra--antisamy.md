---
repo: "nahsra/antisamy"
name: "antisamy"
description: "a library for performing fast, configurable cleansing of HTML coming from untrusted sources"
readmeQualityOk: true
url: "https://github.com/nahsra/antisamy"
language: "DIGITAL Command Language"
languages: ["DIGITAL Command Language", "HTML", "Java"]
languagePcts: [32, 29, 22]
topics: ["html", "javascript", "xss-filter", "java-library", "security-tools"]
stars: 207
forks: 100
openIssues: 19
closedIssues: 89
watchers: 13
contributors: 19
recentReleases: 0
createdAt: "2016-09-24T22:00:02Z"
lastCommitAt: "2026-11-02T15:17:26Z"
lastReleaseAt: "2021-04-08T01:49:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 43
maintainers: ["dependabot[bot]", "spassarop", "rbri"]
openGraphImageUrl: "https://opengraph.githubassets.com/41d1d0f583fe97f1d6a5dc8a343d2d3a315a72254ca2c2271eb78757f5ffd408/nahsra/antisamy"
---

# AntiSamy

A library for performing fast, configurable cleansing of HTML coming from untrusted sources. Supports Java 8+.

Another way of saying that could be: It's an API that helps you make sure that clients don't supply malicious cargo code in the HTML they supply for their profile, comments, etc., that get persisted on the server. The term "malicious code" in regards to web applications usually mean "JavaScript." Mostly, Cascading Stylesheets are only considered malicious when they invoke JavaScript. However, there are many situations where "normal" HTML and CSS can be used in a malicious manner.

## IMPORTANT! - API breaking changes in 1.7.0

Throughout the development of the 1.6.x series, we have identified and deprecated a number of features and APIs. All of these deprecated items have been removed in the 1.7.0 release. These changes were all tracked in ticket: https://github.com/nahsra/antisamy/issues/195. Each of the changes are described below:

`CssHandler` had 2 constructors which dropped the `LinkedList<URI> embeddedStyleSheets` parameter. Both constructors now create an empty internal `LinkedList<URI>` and the method `getImportedStylesheetsURIList()` can be used to…
