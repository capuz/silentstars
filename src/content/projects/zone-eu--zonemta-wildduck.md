---
repo: "zone-eu/zonemta-wildduck"
name: "zonemta-wildduck"
description: "Wild Duck MSA plugin for ZoneMTA"
readmeQualityOk: true
url: "https://github.com/zone-eu/zonemta-wildduck"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 18
forks: 12
openIssues: 2
closedIssues: 4
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2017-03-24T20:46:53Z"
lastCommitAt: "2026-10-21T08:50:29Z"
lastReleaseAt: "2024-04-01T06:32:46Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 82
undervaluedScore: 62
maintainers: ["NickOvt", "github-actions[bot]", "andris9"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3b5683a6aa79fe76378976d2d3ebf9cdd8f7623baaabb955e03e966aad32154/zone-eu/zonemta-wildduck"
fundingLinks: ["GITHUB:https://github.com/andris9", "CUSTOM:https://www.paypal.me/nodemailer"]
---

# zonemta-wildduck

WildDuck MSA plugin for [ZoneMTA](https://github.com/zone-eu/zone-mta). Install this to send as a user of the WildDuck IMAP server. This plugin handles authentication and header rewriting – users are only allowed to send mail from their registered email addresses. If the address in an email does not match then it is overridden with an allowed address. This is similar to the behavior of Gmail SMTP.

WildDuck actions apply only to interfaces that require authentication.

## Features

* **authentication** – if authentication is enabled for the smtp interface then authentication data is checked against WildDuck user accounts
* **From rewriting** – if the message has a From: address in the header that is not registered as one of the aliases for this user then the address part (but not the name) is rewritten with the default address for this user
* **Upload to Sent Mail folder** – sent message is automatically appended to the _Sent Mail_ folder of the user
* **Recipient limiting** – limit RCPT TO calls for 24 hour period based on the _recipients_ user value
* **Local delivery** – messages that are deliverable to the current WildDuck installation are routed directly…
