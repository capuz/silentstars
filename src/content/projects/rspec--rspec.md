---
repo: "rspec/rspec"
name: "rspec"
description: "The RSpec monorepo"
readmeQualityOk: true
url: "https://github.com/rspec/rspec"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [86]
stars: 120
forks: 60
openIssues: 129
closedIssues: 55
watchers: 8
contributors: 532
recentReleases: 0
createdAt: "2024-11-27T01:05:29Z"
lastCommitAt: "2026-10-20T08:49:39Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 71
undervaluedScore: 43
maintainers: ["JonRowe", "chadlwilson", "ngan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/894776590/0f825290-9731-4ae4-a582-272b1997ffff"
---

# rspec [](https://github.com/rspec/rspec/actions)

This is the RSpec mono repo, it contains the core gems we think of as "rspec", they are:

* `rspec-core` provides the structure for writing executable examples of how your
  code should behave, and an `rspec` command with tools to constrain which
  examples get run and tailor the output.

* `rspec-expectations` lets you express expected outcomes on an object in an example.

* `rspec-mocks` is a test-double framework for rspec with support for method stubs,
  fakes, and message expectations on generated test-doubles and real objects
  alike.

* `rspec-support` provides shared helper functionality for the other three gems, in
  general you don't install this on its own.

## Install

    gem install rspec              # for rspec-core, rspec-expectations and rspec-mocks
    gem install rspec-core         # for rspec-core only
    gem install rspec-expectations # for rspec-expectations only
    gem install rspec-mocks        # for rspec-mocks only

Want to run against the `main` branch? You'll need to include the dependent
RSpec repos as well. Add the following to your `Gemfile`:

```ruby
%w[rspec rspec-core rspec-expectations…
