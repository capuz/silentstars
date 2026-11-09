---
repo: "dpep/rspec-protobuf"
name: "rspec-protobuf"
description: "RSpec matchers for Protobuf"
readmeQualityOk: true
url: "https://github.com/dpep/rspec-protobuf"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-11-08T14:51:48Z"
lastCommitAt: "2026-11-09T04:34:04Z"
status: "thriving"
tags: []
healthScore: 72
undervaluedScore: 37
maintainers: ["dependabot[bot]", "dpep"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3ed9b309f1b6feddd2147132575d433835e8ee6e27eaedc84e8738083fadbbf/dpep/rspec-protobuf"
---

rspec-protobuf
======

RSpec matchers for Protobuf.

```ruby
require "rspec/protobuf"

subject { MyProtoMessage.new(msg: "hi") }

it { is_expected.to be_a_protobuf }

# check type
it { is_expected.to be_a_protobuf(MyProtoMessage) }

# check field values
it { is_expected.to be_a_protobuf(msg: "hi") }
it { is_expected.to be_a_protobuf(msg: /^h/) }

# composite matching
it { expect(result).to include(data: a_protobuf(MyProtoMessage, msg: starting_with("h"))) }
```

### Improved RSpec Errors
Before
```ruby
Failure/Error: is_expected.to have_attributes(date: { month: 2 })
     expected <ComplexMessage: complex: false, date: <DateMessage: type: :DATE_DEFAULT, month: 1, day: 0, year: 0>> to have attributes {:date => {:month => 2}} but had attributes {:date => <DateMessage: type: :DATE_DEFAULT, month: 1, day: 0, year: 0>}
     Diff:
     @@ -1 +1 @@
     -:date => {:month => 2},
     +:date => <DateMessage: type: :DATE_DEFAULT, month: 1, day: 0, year: 0>,
```

After
```ruby
Failure/Error: is_expected.to be_a_protobuf(date: { month: 2 })
     Diff:
     @@ -1 +1 @@
     -:date => {:month => 2},
     +:date => {:month => 1},
```

----
## Installation

```ruby
# Gemfile
gem "rspec-protobuf"…
