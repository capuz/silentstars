---
repo: "nxt-insurance/nxt_registry"
name: "nxt_registry"
description: "A simple registry to implement the container pattern"
readmeQualityOk: true
url: "https://github.com/nxt-insurance/nxt_registry"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["registry", "container", "ruby", "ruby-on-rails"]
stars: 17
forks: 0
openIssues: 3
closedIssues: 3
watchers: 12
contributors: 6
recentReleases: 0
createdAt: "2019-12-25T22:44:44Z"
lastCommitAt: "2026-07-22T06:11:01Z"
lastReleaseAt: "2020-03-02T09:09:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 84
undervaluedScore: 28
maintainers: ["depfu[bot]", "mitnal"]
openGraphImageUrl: "https://opengraph.githubassets.com/700a32d29260134f84c2983331ac790b0f2a85764f0d8097424e15d2b667985c/nxt-insurance/nxt_registry"
---

# NxtRegistry

`NxtRegistry` is a simple container that allows you to register and resolve values in nested structures.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'nxt_registry'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install nxt_registry

## Usage

### Simple use case

## Instance Level

If you simply need a single global instance of a registry include `NxtRegistry::Singleton`:    

```ruby
class Example
  include NxtRegistry::Singleton
  
  registry do
    register(:ruby, 'Stone')
    register(:python, 'Snake')
    register(:javascript, 'undefined')
  end
end

Example.resolve(:ruby) # => 'Stone'
```

Alternatively you can simply create instances of `NxtRegistry::Registry`:

```ruby
registry = NxtRegistry::Registry.new do
  register(:andy, 'Andy')
  register(:anthony, 'Anthony')
  register(:aki, 'Aki')
end

registry.resolve(:aki) # => 'Aki'

```

## Class Level

You can also add registries on the class level simply by extending your class with `NxtRegistry`

```ruby
class OtherExample
  extend NxtRegistry
 
  registry(:errors) do
    register(KeyError, ->(error) { puts 'KeyError handler' } )…
