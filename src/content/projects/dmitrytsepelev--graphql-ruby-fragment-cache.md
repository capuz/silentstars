---
repo: "DmitryTsepelev/graphql-ruby-fragment_cache"
name: "graphql-ruby-fragment_cache"
description: "graphql-ruby plugin for caching parts of the response"
readmeQualityOk: true
url: "https://github.com/DmitryTsepelev/graphql-ruby-fragment_cache"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["ruby", "graphql", "cache", "graphql-ruby"]
stars: 234
forks: 40
openIssues: 2
closedIssues: 46
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2020-03-15T16:01:37Z"
lastCommitAt: "2026-11-07T09:30:36Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 74
undervaluedScore: 24
maintainers: ["DmitryTsepelev", "LRFalk01", "gsdean"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8eae75aa1dbcbb7619466d3f2bba85398ee6753ff69bd4c4db3aec073857dc8/DmitryTsepelev/graphql-ruby-fragment_cache"
---

# GraphQL::FragmentCache  

`GraphQL::FragmentCache` powers up [graphql-ruby](https://graphql-ruby.org) with the ability to cache response _fragments_: you can mark any field as cached and it will never be resolved again (at least, while cache is valid). For instance, the following code caches `title` for each post:

```ruby
class PostType < BaseObject
  field :id, ID, null: false
  field :title, String, null: false, cache_fragment: true
end
```

## Professional Support

Need help with your GraphQL API architecture, schema design, or performance?
I'm available for consulting — [get in touch](https://dmitrytsepelev.dev/consulting).

## Getting started

Add the gem to your Gemfile `gem 'graphql-fragment_cache'` and add the plugin to your schema class:

```ruby
class GraphqSchema < GraphQL::Schema
  use GraphQL::FragmentCache

  query QueryType
end
```

Include `GraphQL::FragmentCache::Object` to your base type class:

```ruby
class BaseType < GraphQL::Schema::Object
  include GraphQL::FragmentCache::Object
end
```

If you're using [resolvers](https://graphql-ruby.org/fields/resolvers.html) — include the module into the base resolver as well:

```ruby
class Resolvers::BaseResolver <…
