---
repo: "barsoom/net_http_timeout_errors"
name: "net_http_timeout_errors"
description: "Provides a list of Net::HTTP timeout errors."
url: "https://github.com/barsoom/net_http_timeout_errors"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 32
forks: 0
openIssues: 0
closedIssues: 0
watchers: 11
contributors: 9
recentReleases: 0
createdAt: "2012-10-31T16:39:18Z"
lastCommitAt: "2026-06-23T06:38:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 87
undervaluedScore: 24
maintainers: ["p-wall"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f7e1867b0dd046aaccbc2b888b228c9c3f8ae0cc780182cdd877bac6afb004d/barsoom/net_http_timeout_errors"
---

# NetHttpTimeoutErrors

Whether you use Net::HTTP or some higher abstraction like HTTParty, are you tired of having to rescue an ever-growing list of Net::HTTP timeout error types?

Just load this gem and then do:

``` ruby
begin
  uri = URI.parse("http://google.com/")
  response = Net::HTTP.get_response(uri)
rescue *NetHttpTimeoutErrors.all
  puts "It timed out some way or other!"
rescue AnotherError, *NetHttpTimeoutErrors.all
  puts "This works too."
end
```

Or if you prefer:

``` ruby
begin
  NetHttpTimeoutErrors.conflate do
    uri = URI.parse("http://google.com/")
    response = Net::HTTP.get_response(uri)
  end
rescue NetHttpTimeoutError
  puts "It timed out some way or other!"
end
```

You can still get at the original error through `NetHttpTimeoutError#original_error`.

Did we miss an error? Please add it!

## Installation

Add this line to your application's Gemfile:

    gem 'net_http_timeout_errors'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install net_http_timeout_errors

## Also see

There is also [net_http_exception_fix](https://github.com/edward/net_http_exception_fix) which cleverly tags these exceptions with a `Net::HTTPBroken`…
