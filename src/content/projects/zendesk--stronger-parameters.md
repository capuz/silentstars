---
repo: "zendesk/stronger_parameters"
name: "stronger_parameters"
description: "Type checking and type casting of parameters for Action Pack"
readmeQualityOk: true
url: "https://github.com/zendesk/stronger_parameters"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 304
forks: 31
openIssues: 1
closedIssues: 18
watchers: 410
contributors: 64
recentReleases: 0
createdAt: "2013-11-14T17:26:08Z"
lastCommitAt: "2026-10-21T08:49:23Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 77
undervaluedScore: 20
maintainers: ["datibbaw", "bquorning"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0c9ac4f60c0ff3e224f3f431d69898a292672c2f836e0cf7f2a841d4e46cd8d/zendesk/stronger_parameters"
---

# stronger_parameters

This is an extension of `strong_parameters` with added type checking and conversion.

## Simple types
You can specify simple types like this:

```ruby
params.permit(
  id: Parameters.id,
  name: Parameters.string
)
```

## Arrays
You can specify arrays like this:

```ruby
params.permit(
  id: Parameters.array(Parameters.id)
)
```

This will allow an array of id parameters that all are IDs (integer less than 2**31, greater than 0) and convert to Fixnum (`'2' --> 2`).

### Empty array -> nil
Rails converts empty arrays to nil, so often `Parameters.array | Parameters.nil` is needed.

### Allowing nils

It can be convenient to allow nil for all attributes since ActiveRecord converts it to false/0.
`ActionController::Parameters.allow_nil_for_everything = true`

### Rejecting nils

You can reject a request that fails to supply certain parameters by marking them
as required with the `.required` operator:

```ruby
params.permit(
  name: Parameters.string.required, # will not accept a nil or a non-String
  email: Parameters.string          # optional, may be omitted
)
```

This also works in conjunction with the `&` and `|` constraints. For example, to
express that a…
