---
repo: "udzura/wardite"
name: "wardite"
description: "A pure-ruby webassembly runtime."
readmeQualityOk: true
url: "https://github.com/udzura/wardite"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [83]
stars: 44
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 6
createdAt: "2024-10-11T12:36:08Z"
lastCommitAt: "2026-11-19T12:00:07Z"
lastReleaseAt: "2026-11-19T07:06:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["udzura"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cd7a7b632d820f7288b7f8a9f171b925a256e12cb36ddbec6c39d91ba645d6a/udzura/wardite"
---

# Wardite

A pure-ruby webassembly runtime.

- [x] Fully typed by RBS (with the aid of [rbs-inline](https://github.com/soutaro/rbs-inline))
- [ ] WASI (p1) support

## Supported Instructions

ref: https://webassembly.github.io/spec/core/binary/instructions.html

- [x] Control Instructions
- [x] Parametric Instructions
- [x] Variable Instructions
- [ ] Table Instructions
- [x] Memory Instructions (except `data.drop`)
- [x] Numeric Instructions (`0x41 ... 0xC4`)
- [x] Numeric Instructions (`0xFC` Operations)
- [ ] Reference Instructions
- [ ] Vector Instructions
- [x] end `0x0B`

## Installation

Install the gem and add to the application's Gemfile by executing:

    $ bundle add wardite

If bundler is not being used to manage dependencies, install the gem by executing:

    $ gem install wardite

## Usage

- In your ruby code, instanciate Wardite runtime:

```ruby
require "wardite"

path = ARGV[0]
method = ARGV[1]
args = ARGV[2..-1] || []

instance = Wardite::new(path: path)
if !method && instance.runtime.respond_to?(:_start)
  instance.runtime._start
else
  instance.runtime.call(method, args)
end
```

- Wardite bundles `wardite` cli command:
