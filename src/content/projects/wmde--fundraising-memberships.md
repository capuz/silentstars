---
repo: "wmde/fundraising-memberships"
name: "fundraising-memberships"
description: "Bounded Context for the Wikimedia Deutschland fundraising membership subdomain "
readmeQualityOk: true
url: "https://github.com/wmde/fundraising-memberships"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2018-01-29T02:45:00Z"
lastCommitAt: "2026-08-03T06:44:10Z"
lastReleaseAt: "2021-05-12T10:51:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 84
undervaluedScore: 51
maintainers: ["dependabot[bot]", "moiikana", "Abban"]
openGraphImageUrl: "https://opengraph.githubassets.com/37d98195b3c0fa1850f8fe713b4149a092796350d7f9686e90c5a6a32babf5c0/wmde/fundraising-memberships"
---

# Fundraising Memberships

Bounded Context for the Wikimedia Deutschland fundraising membership (sub-)domain. Used by the
[user facing donation application](https://github.com/wmde/FundraisingFrontend) and the
"Fundraising Operations Center" (which is not public software).

## Installation

To use the Fundraising Memberships library in your project, simply add a dependency on wmde/fundraising-memberships
to your project's `composer.json` file. Here is a minimal example of a `composer.json`
file that just defines a dependency on Fundraising Memberships 1.x:

```json
{
    "require": {
        "wmde/fundraising-memberships": "~1.0"
    }
}
```

## Development

For development you need to have Docker and the Docker `compose` plugin installed. You don't need a local PHP runtime environment.

    sudo apt-get install docker docker-compose-plugin

### Running Composer

To pull in the project dependencies via Composer, run:

    make install-php

To update the dependencies, run 

    make update-php

### Running the CI checks

To run all CI checks, which includes PHPUnit tests, PHPCS style checks and static analysis with PHPStan, run:

    make
    
### Running the tests

To run just the…
