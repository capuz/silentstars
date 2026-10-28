---
repo: "govuk-one-login/mobile-wallet-tech-docs"
name: "mobile-wallet-tech-docs"
description: "Documentation website for credential issuers integrating with GOV.UK Wallet"
readmeQualityOk: true
url: "https://github.com/govuk-one-login/mobile-wallet-tech-docs"
homepage: "http://docs.wallet.service.gov.uk/"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 33
recentReleases: 0
createdAt: "2024-01-19T15:50:11Z"
lastCommitAt: "2026-10-28T09:57:48Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 75
maintainers: ["ZahuraB", "dependabot[bot]", "claire-cheuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/17e66e2c29c87e6f2f51c8b6fb5748ec5e923dde28ecdabc0461f3432d222e23/govuk-one-login/mobile-wallet-tech-docs"
---

# GOV.UK Wallet technical documentation
This documentation is for government services that want to integrate with GOV.UK Wallet.

The Wallet technical documentation is based on the [Tech Docs Template](https://github.com/alphagov/tech-docs-template) - a [Middleman template](https://github.com/alphagov/tech-docs-template#:~:text=Template%20is%20a-,Middleman%20template,-that%20you%20can) to build technical documentation using a GOV.UK style.

## Preview the documentation in a browser

To preview any changes and additions you have made to the documentation in a browser, clone this repo and use the [Dockerfile in this repo](https://github.com/govuk-one-login/mobile-wallet-tech-docs/blob/HEAD/Dockerfile) to run a Middleman server on your machine without having to set up Ruby locally.

This setup has live reload enabled, which means your changes will be applied as you edit files in the source directory. The only exception to this is if you make changes to `config/tech-docs.yml`, you must stop and restart the server to see your changes in the preview. You can stop the server with `Ctrl-C`.

Run the [helper…
