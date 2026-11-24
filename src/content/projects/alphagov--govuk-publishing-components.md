---
repo: "alphagov/govuk_publishing_components"
name: "govuk_publishing_components"
description: "A gem to document and distribute frontend components for GOV.UK applications"
readmeQualityOk: true
url: "https://github.com/alphagov/govuk_publishing_components"
homepage: "https://components.publishing.service.gov.uk"
language: "Ruby"
languages: ["Ruby", "JavaScript"]
languagePcts: [40, 39]
topics: ["govuk"]
stars: 95
forks: 32
openIssues: 80
closedIssues: 333
watchers: 57
contributors: 120
recentReleases: 0
createdAt: "2017-07-12T14:59:27Z"
lastCommitAt: "2026-11-24T13:10:16Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 47
maintainers: ["andysellick", "dependabot[bot]", "MartinJJones"]
openGraphImageUrl: "https://opengraph.githubassets.com/31979522b3da6833011d5bd7cdabb44d5612f95e01c6b4a2512619ff22573e4c/alphagov/govuk_publishing_components"
---

# GOV.UK Publishing Components

govuk_publishing_components is a Ruby gem to document and distribute components for GOV.UK applications. It provides:

- a shared library of components
- helpers to generate component payloads
- an application to preview components and provide guidance
- [GOV.UK Design System](https://design-system.service.gov.uk/) styles and components (via [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend))

Only add a component to this gem if it is required in more than one application. Please do not add application-specific components to govuk_publishing_components.

All components should meet the accessibility standards for browser and assistive technology support described in [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend#browser-and-assistive-technology-support).

## Technical documentation

### Run the application

```sh
./startup.sh
```

See also [Local frontend development](https://docs.publishing.service.gov.uk/manual/local-frontend-development.html).

### Run the test suite

```sh
bundle install
yarn install
bundle exec rake
```

### Run the JavaScript tests alone

With text-only output to the terminal:
