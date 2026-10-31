---
repo: "r7kamura/rubocop-migration"
name: "rubocop-migration"
description: "RuboCop plugin for ActiveRecord migration."
readmeQualityOk: true
url: "https://github.com/r7kamura/rubocop-migration"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 58
forks: 4
openIssues: 3
closedIssues: 7
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-10-17T01:51:38Z"
lastCommitAt: "2026-10-31T07:46:18Z"
lastReleaseAt: "2025-04-20T03:43:45Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 33
maintainers: ["r7kamura"]
openGraphImageUrl: "https://opengraph.githubassets.com/06ce0927fc568f7fe40be75ed8a2f3896db811f664575f3b7ebf4fe952212ff1/r7kamura/rubocop-migration"
fundingLinks: ["GITHUB:https://github.com/r7kamura"]
---

# rubocop-migration

RuboCop plugin for ActiveRecord migration.

## Usage

Install `rubocop-migration` gem:

```ruby
# Gemfile
gem 'rubocop-migration'
```

then add `rubocop-migration` to plugins section:

```yaml
# .rubocop.yml
plugins:
  - rubocop-migration

Migration/AddCheckConstraint:
  Enabled: true
```

Note that all cops are `Enabled: false` by default.

## Cops

Please read the comments of the respective cop classes for more information.

- [Migration/AddCheckConstraint](https://github.com/r7kamura/rubocop-migration/blob/HEAD/lib/rubocop/cop/migration/add_check_constraint.rb)
- [Migration/AddColumnWithDefaultValue](https://github.com/r7kamura/rubocop-migration/blob/HEAD/lib/rubocop/cop/migration/add_column_with_default_value.rb)
- [Migration/AddForeignKey](https://github.com/r7kamura/rubocop-migration/blob/HEAD/lib/rubocop/cop/migration/add_foreign_key.rb)
- [Migration/AddIndexColumnsCount](https://github.com/r7kamura/rubocop-migration/blob/HEAD/lib/rubocop/cop/migration/add_index_columns_count.rb)
- [Migration/AddIndexConcurrently](https://github.com/r7kamura/rubocop-migration/blob/HEAD/lib/rubocop/cop/migration/add_index_concurrently.rb)
-…
