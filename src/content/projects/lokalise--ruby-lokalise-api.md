---
repo: "lokalise/ruby-lokalise-api"
name: "ruby-lokalise-api"
description: "Lokalise API v2 Ruby interface."
readmeQualityOk: true
url: "https://github.com/lokalise/ruby-lokalise-api"
homepage: "https://lokalise.github.io/ruby-lokalise-api"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["translation-providers", "translation-files", "lokalise-api", "api-client", "rubygem", "ruby-interface", "lokalise"]
stars: 24
forks: 3
openIssues: 0
closedIssues: 7
watchers: 11
contributors: 5
recentReleases: 0
createdAt: "2018-10-15T15:45:46Z"
lastCommitAt: "2026-09-18T14:03:10Z"
lastReleaseAt: "2022-01-27T16:28:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 41
maintainers: ["bodrovis", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd352f6eacbc3594599724035ae208258501f1de7ba4a831753e025bf1eb7064/lokalise/ruby-lokalise-api"
---

# Lokalise API v2 official Ruby interface

Official opinionated Ruby interface for the [Lokalise API](https://developers.lokalise.com/reference/lokalise-rest-api) that represents returned data as Ruby objects.

Looking for a Rails integration? Try the [lokalise_rails gem](https://github.com/bodrovis/lokalise_rails). Also you can use a [lokalise_manager gem](https://github.com/bodrovis/lokalise_manager) which allows to exchange translation files between Lokalise and *any* Ruby script.

## Quickstart

Install the gem by running:

```bash
$ gem install ruby-lokalise-api
```

Obtain an API token in your [personal profile](https://lokalise.com/profile#apitokens) (*API tokens* section) and initialize the client:

```ruby
require 'ruby_lokalise_api'

@client = RubyLokaliseApi.client 'YOUR_TOKEN_HERE'
```

Now the `@client` can be used to perform API requests:

```ruby
project = @client.project '123.abc'
project.name

process = @client.upload_file project_id,
                              data: 'Base-64 encoded data... ZnI6DQogI...',
                              filename: 'my_file.yml',
                              lang_iso: 'en'

process.status
```

Alternatively instantiate your…
