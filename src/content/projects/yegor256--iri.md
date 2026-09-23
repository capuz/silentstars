---
repo: "yegor256/iri"
name: "iri"
description: "Simple and immutable URI/URL builder in Ruby, with a fluent interface"
readmeQualityOk: true
url: "https://github.com/yegor256/iri"
homepage: "https://rubygems.org/gems/iri"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["ruby", "uri-builder", "uri", "ruby-gem", "ruby-lib"]
stars: 145
forks: 1
openIssues: 4
closedIssues: 25
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-04-17T04:53:31Z"
lastCommitAt: "2026-09-23T05:10:16Z"
lastReleaseAt: "2023-06-04T02:24:44Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 44
maintainers: ["renovate[bot]", "rultor", "yegor256"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/181819422/8cbb0700-9800-11e9-8da4-36233775b1bb"
---

# Immutable URI Builder for Ruby

The class [Iri] helps you build a URI and then modify its
  parts via a simple [fluent interface]:

```ruby
require 'iri'
url = Iri.new('http://google.com/')
  .append('find').append('me') # -> http://google.com/find/me
  .with(q: 'books about OOP', limit: 50) # -> ?q=books+about+OOP&limit=50
  .without(:q) # remove this query parameter
  .without('limit', 'speed') # also remove these two
  .over(q: 'books about tennis', limit: 10) # replace these params
  .scheme('https') # replace 'http' with 'https'
  .host('localhost') # replace the host name
  .port('443') # replace the port
  .fragment('page-4') # replaces the fragment part of the URI, after the '#'
  .query('a=1&b=2') # replaces the entire query part of the URI
  .path('/new/path') # replace the path of the URI, leaving the query untouched
  .cut('/q') # replace everything after the host and port
  .to_s # convert it to a string
```

See the
[full list of methods](https://www.rubydoc.info/github/yegor256/iri/master/Iri).

Install it:

```bash
gem install iri
```

Or add this to your `Gemfile`:

```ruby
gem 'iri'
```

Pay attention, it is not a parser. The only functionality this gem…
