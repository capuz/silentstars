---
repo: "fleetyards/fleetyards"
name: "fleetyards"
description: "A Ship Database and Web API based on the official Star Citizen Ship Matrix."
readmeQualityOk: true
url: "https://github.com/fleetyards/fleetyards"
homepage: "https://fleetyards.net"
language: "Ruby"
languages: ["Ruby", "Vue"]
languagePcts: [54, 27]
topics: ["rails", "star-citizen", "roberts-space-industries", "ruby", "vuejs", "webpacker", "cypress"]
stars: 62
forks: 11
openIssues: 41
closedIssues: 299
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2017-02-11T21:58:32Z"
lastCommitAt: "2026-10-06T10:27:24Z"
lastReleaseAt: "2021-09-27T08:10:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 54
maintainers: ["mortik", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/81685140/91a02080-687a-11e9-8079-2ca5a6a8a2ed"
fundingLinks: ["GITHUB:https://github.com/fleetyards", "PATREON:https://patreon.com/fleetyards", "CUSTOM:https://www.buymeacoffee.com/mortik", "CUSTOM:https://paypal.me/mortik"]
---

# Fleetyards.net

A Ship Database and Web API based on the official [Star Citizen Ship Matrix](https://robertsspaceindustries.com/ship-specs).

Powered by [Ruby on Rails 6.x](https://rubyonrails.org/) and [VueJS 2.x](https://vuejs.org/)

## Feedback

If you have any feedback, please reach out on the [Fleetyards.net Discord](https://discord.gg/YdeAdEaTpb) or contact me via info@fleetyards.net
  
## License

[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
  
## Development Setup

### Prerequisites

- [1Password CLI](https://developer.1password.com/docs/cli/get-started/) (`brew install 1password-cli`)
- Access to the **Fleetyards** vault in 1Password

### Getting Started

```bash
bin/setup
bin/dev
```

Secrets are injected at runtime via `op run` from `.env.tpl` — nothing is written to disk. Worktree overrides (ports, DB suffix) go in `.env.local`.

### Editing Rails Credentials

```bash
bin/credentials production
bin/credentials staging
```

### Optional Integrations

#### Patreon Supporter Sync

A nightly Sidekiq job (`PatreonSupporterSyncJob`, 04:17 UTC) imports active
Patreon patrons into the `supporter_contributions` table so the public progress
bar reflects ongoing…
