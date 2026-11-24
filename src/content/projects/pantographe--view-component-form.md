---
repo: "pantographe/view_component-form"
name: "view_component-form"
description: "Rails FormBuilder for ViewComponent"
readmeQualityOk: true
url: "https://github.com/pantographe/view_component-form"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
topics: ["rails", "form-builder", "viewcomponent", "viewcomponents", "forms"]
stars: 261
forks: 28
openIssues: 9
closedIssues: 71
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2020-12-19T14:18:39Z"
lastCommitAt: "2026-11-24T14:05:08Z"
lastReleaseAt: "2023-05-01T20:47:05Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 39
maintainers: ["Spone", "dependabot[bot]", "nicolas-brousse"]
openGraphImageUrl: "https://opengraph.githubassets.com/d03fbc2672419cfda53a89927633edc8b4a9ae9dca6a3483bbd4013cef8509c3/pantographe/view_component-form"
---

# ViewComponent::Form

**`ViewComponent::Form`** is a customizable form builder using the same interface as [`ActionView::Helpers::FormBuilder`](https://api.rubyonrails.org/classes/ActionView/Helpers/FormBuilder.html) but with extensible [ViewComponent](https://github.com/github/view_component) components.

Development of this gem is sponsored by:

## Compatibility

> **Warning**
>
> **This is an early release, and the API is subject to change until `v1.0.0`.**

This gem is tested on:

- Rails 8.1+ (with or without ActionText)
- Ruby 3.3+

## Installation

```shell
bundle add view_component-form
```

### Configuration

```ruby
# config/initializers/vcf.rb

ViewComponent::Form.configure do |config|
  config.parent_component = 'ApplicationFormComponent'
end
```

| Attribute                   | Purpose                                               | Default                 |
| --------------------------- | ----------------------------------------------------- | ----------------------- |
| `parent_component` (string) | Parent class for all `ViewComponent::Form` components | `"ViewComponent::Base"` |
