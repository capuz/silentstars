---
repo: "mitodl/mitxpro"
name: "mitxpro"
description: "MIT xPRO web application"
readmeQualityOk: true
url: "https://github.com/mitodl/mitxpro"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 20
forks: 3
openIssues: 110
closedIssues: 1145
watchers: 21
contributors: 40
recentReleases: 0
createdAt: "2019-02-20T18:33:28Z"
lastCommitAt: "2026-11-10T14:49:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 97
undervaluedScore: 56
maintainers: ["renovate[bot]", "feoh", "odlbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b53cf4d38473ebc08b0f0ee8f2cc2e3ec60d6a4d49cebba933ace9d541cfa0e/mitodl/mitxpro"
---

# mitxpro

**SECTIONS**

1. [Initial Setup](#initial-setup)
2. [Optional Setup](#optional-setup)

# Initial Setup

mitxpro follows the same [initial setup steps outlined in the common ODL web app guide](https://mitodl.github.io/handbook/how-to/common-web-app-guide.html).
Run through those steps **including the addition of `/etc/hosts` aliases and the optional step for running the
`createsuperuser` command**.

### Configure xPro and Open edX

See Configure Open edX:

- [Using Tutor](https://github.com/mitodl/handbook/tree/master/openedx/MITx-edx-integration-tutor.md) (Recommended)
- [Using Devstack](https://github.com/mitodl/handbook/tree/master/openedx/MITx-edx-integration-devstack.md) (Deprecated)

### Add settings values

Add the following settings in your `.env` file:

```
MAILGUN_RECIPIENT_OVERRIDE=<your email address>

# Ask a fellow developer for these values
MAILGUN_SENDER_DOMAIN=
MAILGUN_KEY=
```

# PostHog Integration

We are using PostHog for managing the features. PostHog provides many built-in filters/conditions to enable/disable features in the application without any code change or deployment.

_NOTE:_ We are using…
