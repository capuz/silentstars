---
repo: "guardian/members-data-api"
name: "members-data-api"
description: "MMA product management and what features is user entitled to on dotcom?"
readmeQualityOk: true
url: "https://github.com/guardian/members-data-api"
homepage: "https://members-data-api.code.dev-theguardian.com/user-attributes/me"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["production"]
stars: 8
forks: 6
openIssues: 0
closedIssues: 3
watchers: 51
contributors: 71
recentReleases: 0
createdAt: "2015-07-23T12:46:23Z"
lastCommitAt: "2026-09-16T08:47:06Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 91
undervaluedScore: 53
maintainers: ["andrade0", "gu-scala-steward-public-repos[bot]", "johnduffell"]
openGraphImageUrl: "https://opengraph.githubassets.com/583fc33055b248d122b1ca9a7b9f8bb1f125c7ba5e05abefb3d2073fd574fb55/guardian/members-data-api"
---

# Members' Data API

The members' data API is a Play app that manages and retrieves supporter attributes associated with a user.  
It runs on https://members-data-api.theguardian.com/.

### Dotcom
theguardian.com website is the biggest single consumer of `members-data-api`, specifically the `/user-attributes/me` endpoint, which it uses to determine both ad-free (when user has a digital subscription or supporter plus or a newspaper product) and if we should hide 'support messaging/asks' (banner, epic, header/footer support buttons etc).

It would be unnecessary to hit `members-data-api` on every single page view, so instead it uses cookies to regulate how often calls are made. **The `gu_user_features_expiry` contains a timestamp for the 'earliest' point it would be allowed to call `members-data-api` again, and is updated whenever it does call `members-data-api` to _'now + 24hours'_.**

Various things from the `/user-attributes/me` response are stored in cookies, to be used on each render...
- `GU_AF1` the 'ad-free' cookie which is set to a timestamp for _'now + 48hours'_ if the `contentAccess.digitalPack` = `true`
- `gu_hide_support_messaging` is set to `true` if…
