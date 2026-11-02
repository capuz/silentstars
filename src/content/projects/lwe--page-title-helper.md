---
repo: "lwe/page_title_helper"
name: "page_title_helper"
description: "Simple, internationalized and DRY page titles and headings for Rails."
readmeQualityOk: true
url: "https://github.com/lwe/page_title_helper"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 113
forks: 7
openIssues: 12
closedIssues: 49
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2009-07-06T15:03:20Z"
lastCommitAt: "2026-11-02T13:38:13Z"
lastReleaseAt: "2025-10-22T08:03:48Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 44
maintainers: ["oliverklee", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc33bf58cd021ffb59df40a3609dfd2af3f8a51d4590890d66a40f61d8e35885/lwe/page_title_helper"
---

# Page title helper

This project adheres to [Semantic Versioning](https://semver.org/).

## What does this gem do?

Ever wondered if there was an easier and DRY-way to set your page titles
(and/or headings), introducing _page title helper_, a small view helper for
Rails to inflect titles from controllers and actions.

In your layout, add this to your `<head>`-section:

```html
<title><%= page_title %></title>
```

That's it. Now just add translations, in e.g. `config/locales/en.yml`:

```yaml
en:
  contacts:
    index:
      title: "Contacts"
```

When `/contacts/` is requested, the key `:en, :contacts, :index, :title`
is looked up and printed, together with the applications basename, like:
`Contacts - My cool App`.
The format etc. is of course configurable, just head down to the options.

## Installation

As gem (from rubygems.org):

```ruby
# then add the following line to Gemfile
gem 'page_title_helper'

# living on the bleeding edge?
gem 'page_title_helper', git: 'git://github.com/lwe/page_title_helper.git'
```

## Translated titles

All translated titles are inflected from the current controller and action,
so to easily explain all lookups, here an example with the…
