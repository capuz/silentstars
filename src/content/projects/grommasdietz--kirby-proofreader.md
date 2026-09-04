---
repo: "grommasdietz/kirby-proofreader"
name: "kirby-proofreader"
description: "Typographic suggestions for Kirby CMS"
readmeQualityOk: true
url: "https://github.com/grommasdietz/kirby-proofreader"
language: "PHP"
languages: ["PHP"]
languagePcts: [78]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-08T13:24:06Z"
lastCommitAt: "2026-09-04T08:09:28Z"
lastReleaseAt: "2026-05-13T11:45:42Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 21
maintainers: ["semantic-release-bot", "jakobgrommas", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1232987424/bdaa9e0a-a372-41fe-a9e2-ebce304178f0"
---

# Kirby Proofreader

Kirby Proofreader adds a Panel button on Kirby CMS for reviewing typographic corrections in content views before applying them. Field changes are saved to Kirby's changes version, title fixes use Kirby's native title action and save immediately.

## Requirements

- Kirby 5.2+
- PHP 8.2+

## Installation

```bash
composer require grommasdietz/kirby-proofreader
```

> [!TIP]
> For a manual install, download the **Source code (zip)** archive of an immutable GitHub release tag and copy it to `site/plugins/kirby-proofreader`.

## Quickstart

Add the button to a page, site, file, user or custom area blueprint:

```yaml
buttons:
  proofreader: true
  languages: true
  status: true
  settings: true
```

### Options

The default rule order is `unicode`, `ellipsis`, `quotes`, `apostrophes`,
`dashes`, `spaces`. `dimensions` and `paragraphs` are predefined optional
rules. `dimensions` handles values such as `5 x 5 cm`; `paragraphs` removes
empty HTML paragraphs and stale trailing whitespace or `<br>` tags from
paragraph ends.
Rules can be reordered, disabled or extended. Configure via
`site/config/config.php`:

```php
return [
    'grommasdietz.proofreader.rules' => […
