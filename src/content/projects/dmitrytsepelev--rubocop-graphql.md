---
repo: "DmitryTsepelev/rubocop-graphql"
name: "rubocop-graphql"
description: "Rubocop extension for enforcing graphql-ruby best practices"
readmeQualityOk: true
url: "https://github.com/DmitryTsepelev/rubocop-graphql"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["ruby", "rubocop", "graphql", "linter", "static-code-analysis", "rubocop-graphql", "best-practices"]
stars: 245
forks: 58
openIssues: 2
closedIssues: 59
watchers: 3
contributors: 51
recentReleases: 0
createdAt: "2020-05-18T14:57:41Z"
lastCommitAt: "2026-11-07T09:29:38Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 39
maintainers: ["a-lavis", "DmitryTsepelev", "corsonknowles"]
openGraphImageUrl: "https://opengraph.githubassets.com/563437530d54e656f16620257aaeef175f1509551d6000b86966dad09d92c3da/DmitryTsepelev/rubocop-graphql"
---

# RuboCop::GraphQL 

[Rubocop](https://github.com/rubocop-hq/rubocop) extension for enforcing [graphql-ruby](https://github.com/rmosolgo/graphql-ruby) best practices.

## Professional Support

Need help with your GraphQL API architecture, schema design, or performance?
I'm available for consulting — [get in touch](https://dmitrytsepelev.dev/consulting).

## Installation

Install the gem:

```bash
gem install rubocop-graphql
```

If you use bundler put this in your Gemfile:

```ruby
gem 'rubocop-graphql', require: false
```

## Usage

You need to tell RuboCop to load the GraphQL extension. There are three ways to do this:

### RuboCop configuration file

Put this into your `.rubocop.yml`.

```yaml
plugins: rubocop-graphql
```

Alternatively, use the following array notation when specifying multiple extensions.

```yaml
plugins:
  - rubocop-other-extension
  - rubocop-graphql
```

Now you can run `rubocop` and it will automatically load the RuboCop GraphQL cops together with the standard cops.

> [!NOTE]
> The plugin system is supported in RuboCop 1.72+. In earlier versions, use `require` instead of `plugins`.

### Command line

```sh
rubocop --plugins rubocop-graphql
```

### Rake…
