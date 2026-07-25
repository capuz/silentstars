---
repo: "rubyatscale/danger-packwerk"
name: "danger-packwerk"
description: "Danger plugin for packwerk"
readmeQualityOk: true
url: "https://github.com/rubyatscale/danger-packwerk"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 23
forks: 6
openIssues: 6
closedIssues: 4
watchers: 4
contributors: 15
recentReleases: 0
createdAt: "2022-04-15T18:25:22Z"
lastCommitAt: "2026-07-25T06:00:50Z"
lastReleaseAt: "2022-09-20T15:43:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 68
undervaluedScore: 40
maintainers: ["dduugg", "dependabot[bot]", "technicalpickles"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc7e405758a247e8840e707a02b61832b5db7addc3ab5f19abcdaceacb4ef103/rubyatscale/danger-packwerk"
---

# danger-packwerk

`danger-packwerk` integrates [`packwerk`](https://github.com/Shopify/packwerk) with [`danger`](https://github.com/danger/danger) to provide inline comments in PRs related to boundaries in a Rails application.

## Installation and Basic Usage
Step 1: Add this line to your `Gemfile` (to whatever group your CI uses, as it is not needed in production) and run `bundle install`:

```ruby
gem 'danger-packwerk', group: :test
```

Step 2: Add these to your `Dangerfile`:

```ruby
packwerk.check
package_todo_yml_changes.check
```

That's it for basic usage!

## Advanced Usage

There are currently two danger checks that ship with `danger-packwerk`:
1) One that runs `bin/packwerk check` and leaves inline comments in source code on new violations
2) One that looks at changes to `package_todo.yml` files and leaves inline comments on added violations.

In upcoming iterations, we will include other danger checks, including:
1) A danger check that detects changes to `package.yml` files and posts user-configurable messages on the `package.yml` files that are modified.
2) A danger check that detects changes to `packwerk.yml` files and allows you to specify the action taken when…
