---
repo: "zendesk/charcoal"
name: "charcoal"
description: "JSONP and CORS support for Rails >= 2.3"
readmeQualityOk: true
url: "https://github.com/zendesk/charcoal"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 9
forks: 8
openIssues: 1
closedIssues: 3
watchers: 276
contributors: 50
recentReleases: 0
createdAt: "2012-11-20T19:48:44Z"
lastCommitAt: "2026-10-21T08:49:00Z"
lastReleaseAt: "2023-11-16T10:20:47Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 82
undervaluedScore: 32
maintainers: ["datibbaw", "bquorning", "batizhevsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a81b59d8d66e3898e5ba65ad65d77b3a199d0390f58fea8a9751170dfdbffdc/zendesk/charcoal"
---

# charcoal

JSONP ("JSON with padding") and CORS (Cross-Origin Resource Sharing) filtration.

## Usage

### JSONP

Include the module `Charcoal::JSONP` in the controller you'd like to allow JSONP.
You may then use `allow_jsonp` class method with the following options:

```ruby
# directive is a method name, block, boolean, or array of conditions
allow_jsonp method [method2 ...], :if => directive, :unless => directive
```

Method predicates may be private and are resolved when the permission is checked.
Blocks run in the controller instance's context and may optionally take that instance
as an argument. When both `:if` and `:unless` are supplied, all `:if` conditions must
be truthy and all `:unless` conditions must be falsey.

`:all` is also a valid argument that applies to all methods. The default (with no arguments) is the same as `:all`.

Requests that come in with a callback parameter (e.g. `http://test.com/users.json?callback=hello`)
will have the response body wrapped in that callback and the content type changed to `application/javascript`

### CORS

Please familiarize yourself with the [documentation](https://developer.mozilla.org/En/HTTP_access_control)…
