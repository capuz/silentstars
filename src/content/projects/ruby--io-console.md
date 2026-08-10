---
repo: "ruby/io-console"
name: "io-console"
description: "add console capabilities to IO instance"
readmeQualityOk: true
url: "https://github.com/ruby/io-console"
language: "Ruby"
languages: ["Ruby", "C"]
languagePcts: [53, 47]
topics: ["ruby"]
stars: 69
forks: 37
openIssues: 0
closedIssues: 16
watchers: 32
contributors: 85
recentReleases: 0
createdAt: "2017-06-14T10:01:58Z"
lastCommitAt: "2026-08-10T04:52:49Z"
lastReleaseAt: "2022-11-17T10:53:20Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 52
maintainers: ["nobu", "dependabot[bot]", "Kostadin"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4449f32a5411cf8debf4a48307a50e2d7572b4e2a22f269f381dec6c92ba3ce/ruby/io-console"
---

# IO.console

Add console capabilities to IO instances.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'io-console'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install io-console

## Usage

```ruby
require 'io/console'

IO.console      -> #<File:/dev/tty>
IO.console(sym, *args)
```

Returns a File instance opened console.

If `sym` is given, it will be sent to the opened console with `args` and the result will be returned instead of the console IO itself.

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake test` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ruby/io-console.

## License

The gem is…
