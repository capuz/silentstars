---
repo: "ergebnis/phpunit-agent-reporter"
name: "phpunit-agent-reporter"
description: "🤖 Provides a composer package with an extension for reporting phpunit/phpunit test execution details to agents."
readmeQualityOk: true
url: "https://github.com/ergebnis/phpunit-agent-reporter"
language: "PHP"
languages: ["PHP"]
languagePcts: [95]
topics: ["agent", "extension", "php", "phpunit", "reporter"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-01T16:17:17Z"
lastCommitAt: "2026-08-12T05:14:51Z"
lastReleaseAt: "2026-08-07T15:06:33Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 50
maintainers: ["dependabot[bot]", "ergebnis-bot", "localheinz"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc9dbb7b5a9746dd9516bc021c9a91ae2190a8a28d87c604b4ea668eb434b8c2/ergebnis/phpunit-agent-reporter"
---

# phpunit-agent-reporter

This project provides a [`composer`](https://getcomposer.org) package and a [Phar archive](https://www.php.net/manual/en/book.phar.php) with an extension for reporting [`phpunit/phpunit`](https://github.com/sebastianbergmann/phpunit) test execution details to agents.

## Example

After installing and bootstrapping the extension, when running your tests with `phpunit/phpunit`, the extension will detect whether an agent is running the tests and replace the default output with test execution details that are easier for agents to consume.

When tests pass, the extension outputs:

```json
{
    "result": "success",
    "summary": {
        "assertions": 5,
        "deprecations": 0,
        "errors": 0,
        "failures": 0,
        "incomplete": 0,
        "notices": 0,
        "phpunitDeprecations": 0,
        "phpunitNotices": 0,
        "phpunitWarnings": 0,
        "risky": 0,
        "skipped": 0,
        "tests": 5,
        "warnings": 0
    }
}
```

When tests fail (exit code 1), the extension outputs:

```json
{
    "result": "failure",
    "summary": {
        "assertions": 5,
        "deprecations": 0,
        "errors": 0,
        "failures": 2,…
