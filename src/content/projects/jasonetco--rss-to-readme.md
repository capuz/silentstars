---
repo: "JasonEtco/rss-to-readme"
name: "rss-to-readme"
description: "📡📝 A GitHub Action that updates a section of a README from an RSS feed."
readmeQualityOk: true
url: "https://github.com/JasonEtco/rss-to-readme"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 227
forks: 23
openIssues: 7
closedIssues: 10
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2020-05-28T01:03:02Z"
lastCommitAt: "2026-09-10T08:21:21Z"
lastReleaseAt: "2021-03-01T20:28:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 84
undervaluedScore: 37
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cfd6f0274c55fd0244187c3429ba05138d56e46d25302c5860d83577027a19a/JasonEtco/rss-to-readme"
---

<h3 align="center">📡📝</h3>
<h3 align="center">RSS to README Action</h3>

---

## Usage

You can use this action in a workflow file like any other:

```yml
name: Update this repo's README

on:
  schedule:
    # Once a day at 8 AM
    - cron: 0 8 * * *

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: JasonEtco/rss-to-readme@v2
        with:
          feed-url: https://jasonet.co/rss.xml
          readme-section: feed
```

### Options

#### `feed-url`:

The URL to an RSS feed. It's assumed that the RSS feed follow the standard format!

#### `readme-section`:

The name of the section of your README to update. This uses [`JasonEtco/readme-box`](https://github.com/JasonEtco/readme-box) to replace a section of the README and update the file. Your README should contain HTML comments like this, where `feed` is the the value of `readme-section`:

```html
### Example RSS feed:

...

```

You can inspect this repo's README to see it in use!

#### `empty-commits`: (default: true)

Set this to `false` to not commit anything when this action run but the section didn't change.

#### `max` (default: 5)

The maximum number of items to show from the RSS feed. Defaults to `5`!…
