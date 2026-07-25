---
repo: "rubyatscale/packs-specification"
name: "packs-specification"
description: "The specification for `packs` in the `rubyatscale` ecosystem."
readmeQualityOk: true
url: "https://github.com/rubyatscale/packs-specification"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 22
forks: 5
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2022-10-05T14:11:39Z"
lastCommitAt: "2026-07-25T06:01:03Z"
lastReleaseAt: "2023-08-11T13:49:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 41
maintainers: ["dduugg", "dependabot[bot]", "technicalpickles"]
openGraphImageUrl: "https://opengraph.githubassets.com/37b2e18cce3592e7755f33babe333d268ea260cb062100bb8960757d06cea6bd/rubyatscale/packs-specification"
discussionCount: 0
---

# packs-specification
This is a low-dependency gem that allows your production environment to query simple information about [`packs`](https://github.com/rubyatscale/packs).

## Usage
```ruby

require 'packs-specification'

# Getting all packs
# Example use: adding pack paths to a list of fixture paths
# Returns a T::Array[Packs::Pack]
Packs.all

# Getting the pack for a specific file
# Example use: Associating a file with an owner via a pack owner
# Returns a T.nilable(Packs::Pack)
Packs.for_file('/path/to/file.rb')
Packs.for_file(Pathname.new('/path/to/file.rb')) # also works

# Getting a pack with a specific name
# Example use: Special casing certain behavior for a specific pack
# Example use: Development tools that operate on user inputted pack names
# Returns a T.nilable(Packs::Pack)
Packs.find('packs/my_pack')
```
