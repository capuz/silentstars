---
repo: "remp2020/remp"
name: "remp"
description: "REMP - Reader's engagement and monetization platform. Set of open-source tools for publishers to engage with their audience. Repository is public mirror of our internal private repo."
readmeQualityOk: true
url: "https://github.com/remp2020/remp"
homepage: "https://remp2020.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [65]
stars: 137
forks: 43
openIssues: 9
closedIssues: 19
watchers: 20
contributors: 32
recentReleases: 0
createdAt: "2017-08-28T07:39:34Z"
lastCommitAt: "2026-09-03T08:11:55Z"
lastReleaseAt: "2019-06-14T07:14:00Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 75
undervaluedScore: 45
maintainers: ["rootpd", "miroc", "davidkvasnovsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bac34f6c26b9254d7b2c3547f1907d07fc5d940713955ef82c3cef7e644a834/remp2020/remp"
discussionCount: 0
---

# REMP

## Apps

Each of the REMP services provides its own description and integration documentation - you can access
it by clicking one of the headings below.

Following is a brief description of REMP services included in this mono-repository. 

#### [SSO](https://github.com/remp2020/remp/blob/HEAD/Sso)

SSO is the single point of authentication in the default REMP tools configuration. Currently, it allows users of
REMP tools (Beam, Campaign, Mailer) to log in via their Google accounts.

It also serves as an authentication tool for API requests across the REMP tools - you can manage your API keys
within the web administration of the SSO.

In the future we plan to make easier to develop other authentication mechanisms to connect and also proper
authorization management for users.

#### [Beam](https://github.com/remp2020/remp/blob/HEAD/Beam)

Beam is primary tool for tracking all events across the system and providing aggregated data for statistical
components in Beam and other REMP services.

You can track pageview related events right from the Javascript on your website or call an API from backend.

Beam admin provides a way to display real time usage stats on your website,…
