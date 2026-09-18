---
repo: "testdouble/maybe_later"
name: "maybe_later"
description: "Run code after the current Rack response or Rails action completes"
readmeQualityOk: true
url: "https://github.com/testdouble/maybe_later"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 134
forks: 3
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2022-01-19T16:39:54Z"
lastCommitAt: "2026-09-18T14:03:07Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 21
maintainers: ["rosston"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/449773569/e5163d9c-1351-45d8-983f-f36035b2ec73"
---

# maybe_later - get slow code out of your users' way

Maybe you've been in this situation: you want to call some Ruby while responding
to an HTTP request, but it's a time-consuming operation, its outcome won't
impact the response you send, and naively invoking it will result in a slower
page load or API response for your users.

In almost all cases like this, Rubyists will reach for a [job
queue](https://edgeguides.rubyonrails.org/active_job_basics.html). And that's
usually the right answer! But for relatively trivial tasks—cases where the
_only_ reason you want to defer execution is a faster page load—creating a new
job class and scheduling the work onto a queuing system can feel like overkill.

If this resonates with you, the `maybe_later` gem might be the best way to run
that code for you (eventually).

##  Bold Font Disclaimer

⚠️ **If the name `maybe_later` didn't make it clear, this gem does nothing to
ensure that your after-action callbacks actually run. If the code you're calling
is very important, use [sidekiq](https://github.com/mperham/sidekiq) or
something!** ⚠️

## Setup

Add the gem to your Gemfile:

```ruby
gem "maybe_later"
```

If you're using Rails, the gem's…
