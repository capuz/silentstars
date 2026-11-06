---
repo: "edulazaro/larameter"
name: "larameter"
description: "Credit metering, plans, quotas and usage limits for Laravel"
readmeQualityOk: true
url: "https://github.com/edulazaro/larameter"
homepage: "https://edulazaro.com/portfolio/larameter"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-08-23T23:43:32Z"
lastCommitAt: "2026-11-06T11:24:02Z"
lastReleaseAt: "2026-11-06T11:24:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 73
undervaluedScore: 49
maintainers: ["edulazaro"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5ce226508d35e0aae2037a1cf1c8ea873afb48274a655743179efa9e1dae5db/edulazaro/larameter"
---

# Larameter

Credit metering and plans for Laravel. Sell an allowance per session and per week, sell
top-ups on the side, charge per action or per unit consumed, and stop a call before it
spends what an account no longer has.

Nothing to do with AI in particular. The app this came from charges credits for creating a
form, generating a document, running a poll, verifying an identity and sending an email,
none of which involve a model. That is exactly why it is not part of an AI package: you
should not have to install one to meter a form.

## Four tables

    larameter_accounts    what does not expire: the plan, and credits bought on top
    larameter_windows     what the plan has covered, per window, per account
    larameter_deposits    credits in: purchases, gifts, refunds, adjustments
    larameter_usage       credits out, append-only

The balance is stored rather than summed, and once you sell credits that is not an
optimisation but the model itself: a top-up is not consumption, so it cannot be expressed
as a sum of what was spent. With the deposits table it stays checkable all the same, which
is what you want the first time somebody asks why an account has five thousand…
