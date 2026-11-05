---
repo: "Drieam/rspec-github"
name: "rspec-github"
description: "Formatter for RSpec to show errors in GitHub action annotations"
readmeQualityOk: true
url: "https://github.com/Drieam/rspec-github"
homepage: "https://drieam.github.io/rspec-github/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["rpsec", "formatter", "github-actions"]
stars: 80
forks: 15
openIssues: 3
closedIssues: 8
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2020-04-02T14:37:31Z"
lastCommitAt: "2026-11-05T08:05:40Z"
lastReleaseAt: "2025-01-14T10:52:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 28
maintainers: ["RinseV"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/252481020/bafb0f00-7515-11ea-8f7b-0b4eb68d0eff"
---

# Rspec::Github

[RSpec](https://rspec.info/) formatter compatible with [GitHub Action](https://github.com/features/actions)'s annotations. It supports multiline errors and will set pending specs as warnings:

## Installation
Add the gem to your application's `Gemfile` `test` group:

```ruby
group :test do
  gem 'rspec-github', require: false
end
```

And then of course install the gem by executing:

```bash
bundle install
```

## Usage
You can specify the formatter with a command line argument:

```bash
rspec --format RSpec::Github::Formatter
```

And to always run it with this formatter, you can set it in the `.rspec` file:

```
# other configuration
--format RSpec::Github::Formatter
```

And to register the formatter in configuration, you can add the following to `spec/spec_helper.rb`:

```ruby
RSpec.configure do |config|
  # Use the GitHub Annotations formatter for CI
  if ENV['GITHUB_ACTIONS'] == 'true'
    require 'rspec/github'
    config.add_formatter RSpec::Github::Formatter
  end
end
```

Note that you can select multiple formatters so that you can also see other output:
```bash
rspec --format RSpec::Github::Formatter --format progress
rspec --format…
