---
repo: "edaa-org/pyEDAA.Reports"
name: "pyEDAA.Reports"
description: "Proposal to define an XML-based logging format for outputs from EDA tools and logging libraries."
readmeQualityOk: true
url: "https://github.com/edaa-org/pyEDAA.Reports"
homepage: "https://edaa-org.github.io/pyEDAA.Reports"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["edaa", "xml", "yaml", "eda", "report", "xunit", "json", "python"]
stars: 14
forks: 1
openIssues: 5
closedIssues: 0
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2021-04-11T22:43:17Z"
lastCommitAt: "2026-10-21T23:36:51Z"
lastReleaseAt: "2024-05-05T18:20:42Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 57
maintainers: ["claude-code", "Paebbels", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d196630e183f1dc1e27999ef9ef4e69c8835e1bda294c0f3ece7d734758755b3/edaa-org/pyEDAA.Reports"
---

Proposal to define an abstract model for outputs from EDA tools and logging libraries.

The main intended use case of pyEDAA.Reports is to import multiple log/report formats (raw logs, CSVs, YAML, JSON, etc.)
and provide a unified model that can generate reports using popular formats such as XUnit or Cobertura.
Since most vendors, CI services and monitoring tools support XML, the internals of pyEDAA.Reports are to be based on
XML transformations.

As an abstract model, the main capability of pyEDAA.Reports is handling messages using an structured format.
The readers categorize messages by IDs and append attributes such as the severity, which allow complex filtering and
fancy coloring for better human readability.

# Report Kinds

## Test Report Summary

* Test Suite
* Test Case
* Test Parameter

## Code Coverage Report

* Line Coverage
* Statement Coverage
* Branch Coverage
* Expression Coverage
* State Coverage
* Transition Coverage

### Cobertura Format

Schema Source: http://cobertura.sourceforge.net/xml/coverage-04.dtd

### gcov JSON

#### gcovr JSON

Schema: https://gcovr.com/en/stable/output/json.html#json-format

## Functional Coverage

* Coverage Model
  * Dimension
  *…
