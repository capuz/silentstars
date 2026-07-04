---
repo: "datenschutz-individuell/twofactor_email"
name: "twofactor_email"
description: "Two-Factor Email Provider for Nextcloud (future version, see state of the app)."
readmeQualityOk: true
url: "https://github.com/datenschutz-individuell/twofactor_email"
homepage: "https://apps.nextcloud.com/apps/twofactor_totp"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [66, 26]
stars: 19
forks: 0
openIssues: 3
closedIssues: 9
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2024-03-08T16:43:46Z"
lastCommitAt: "2026-07-04T23:13:43Z"
lastReleaseAt: "2026-02-03T19:02:42Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 63
maintainers: ["nursoda", "nextcloud-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68e8fb1a630e8b3a547c4c8d6303aba83f8f4b514b0cefdd58efd52fa06d25c6/datenschutz-individuell/twofactor_email"
---

# Two-Factor Email Provider for Nextcloud

[Nextcloud](https://nextcloud.com/) supports web logins with a second factor
([two-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication#Factors),
2FA). To support a certain type of 2FA, a "2FA provider" (server-)app must be
installed. 2FA kicks in after the primary authentication stage (typically
username and password) were successful. This provider challenges the user to
enter a randomly generated authentication code (aka one-time password, OTP,
currently six digits). It sends that code to the user's primary email address
and expects the user to enter it on an additional second step web login page.

## Installation, activation and usage

As with any 2FA provider, two-factor email must be installed from the
[Nextcloud app store](https://apps.nextcloud.com/apps/twofactor_email) and
enabled by a Nextcloud server admin. Additionally, the Nextcloud must have a
working email server configured.

The user may set up any of the installed providers or even multiple. This
provider uses email to send the code and thus can only be enabled if an email
address is set in 'Personal info'. Mind that a user may not be able to…
