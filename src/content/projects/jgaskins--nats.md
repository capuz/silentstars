---
repo: "jgaskins/nats"
name: "nats"
description: "NATS client in pure Crystal with JetStream support"
url: "https://github.com/jgaskins/nats"
homepage: "https://jgaskins.dev/nats"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [100]
topics: ["nats", "message-broker", "message-bus", "message-queue", "messaging", "microservices-architecture", "microservices", "cloud-native", "jetstream", "crystal"]
stars: 31
forks: 3
openIssues: 3
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-11-07T07:27:45Z"
lastCommitAt: "2026-06-24T00:16:20Z"
lastReleaseAt: "2021-12-02T05:56:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 45
undervaluedScore: 31
maintainers: ["jgaskins"]
openGraphImageUrl: "https://opengraph.githubassets.com/07471aabb479de447cab39f7616dcf15156d41f3f9757bee1e5a335f159f1450/jgaskins/nats"
discussionCount: 0
---

# NATS

NATS is a message broker for distributed systems.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     nats:
       github: jgaskins/nats
   ```

2. Run `shards install`

## Usage

You can use NATS in a publish/subscribe or request/reply paradigm.

### Publish/Subscribe

For publish/subscribe, let's consider the following class to be shared, representing an event that will be published by one service and picked up by another:

```crystal
require "uuid"
require "json"
require "uuid/json"

struct UserRegisteredEvent
  include JSON::Serializable

  getter id : UUID
  getter email : String
  getter name : String

  def initialize(@id, @email, @name)
  end
end
```

In one service, we can subscribe to a subject that will be sent all of the events pertaining to a user registering:

```crystal
require "nats"

nats = NATS::Client.new(URI.parse(ENV["NATS_URL"]))

# Subscribe to all messages on "customers.registration" with an optional queue
# group. A message will only be delivered to a single client in a given queue
# group.
nats.subscribe "customers.registration", queue_group: "cart-service" do |msg|
  new_user =…
