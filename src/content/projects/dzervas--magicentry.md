---
repo: "dzervas/magicentry"
name: "magicentry"
description: "A smol identity provider"
readmeQualityOk: true
url: "https://github.com/dzervas/magicentry"
homepage: "https://magicentry.rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["authentication", "identity-provider", "magic-link", "oidc", "oidc-provider", "oidc-server", "rust"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-03-07T20:07:22Z"
lastCommitAt: "2026-08-28T14:33:27Z"
lastReleaseAt: "2024-03-22T16:18:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 37
maintainers: ["dzervas", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b29a2b75bb91edef31e59c7b51c61459194b1554ec4616f82eb91ef977747d7/dzervas/magicentry"
---

</a>
</p>

  A smol identity provider
</p>

</p>

</p>

An identity provider that focuses on passwordless authentication and simplicity.
Its target use case is for hobbyists and small organizations that need a simple
way to manage user accounts and access to web applications. The only way to
authenticate is by using magic links sent through email or using passkeys.

It has small footprint, is easy to deploy and maintain, and does not require
any other external service (like a database).

It has no admin panel by choice and the only way to dynamically alter its configuration
is by updating the configuration file or use ingress resource annotations.

Check out the documentation at [magicentry.rs](https://magicentry.rs).
