---
repo: "iobroker-community-adapters/ioBroker.email"
name: "ioBroker.email"
description: "Send emails from ioBroker"
readmeQualityOk: true
url: "https://github.com/iobroker-community-adapters/ioBroker.email"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [70, 27]
topics: ["iobroker", "email", "iot", "smarthome"]
stars: 19
forks: 11
openIssues: 9
closedIssues: 82
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2014-08-13T14:37:49Z"
lastCommitAt: "2026-10-12T11:15:18Z"
lastReleaseAt: "2023-06-02T05:46:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 69
maintainers: ["github-actions[bot]", "dependabot[bot]", "GermanBluefox"]
openGraphImageUrl: "https://opengraph.githubassets.com/12eb397047a4554f23075bc51d068af7ff2c4b8a468846ae6e1ecb602009acbd/iobroker-community-adapters/ioBroker.email"
---

# ioBroker email

Send emails from ioBroker. You cannot check emails with this adapter, only send them.

The adapter uses [nodemailer](https://github.com/nodemailer/nodemailer) to provide the functionality.

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.

**IMPORTANT:**
You may have to enter your credentials once again when migrating from release 1.x.x to 2.x.x if you encounter connection problems. 

## Email Provider Specific Notes

### Gmail
**Important:** If you have Two-Factor Authentication (2FA) enabled on your Gmail account, you **must** use an App Password instead of your regular Gmail password. This has always been required by nodemailer for Gmail with 2FA.

To set up Gmail with 2FA:
1. Enable 2-Step Verification in your Google Account settings
2. Generate an App Password specifically for ioBroker email adapter
3. Use your Gmail address as username and the generated App Password as password in…
