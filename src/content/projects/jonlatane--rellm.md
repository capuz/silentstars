---
repo: "JonLatane/rellm"
name: "rellm"
description: "Delightful federated gRPC social network implemented in Rust and Elm. Email/SMTP, web push, iCal; Facebook, Instagram, X (plus others) post/event push; Gemini, OpenAI image editing; Mastodon/BlueSky cross-protocol. SMS with Telnyx, Twilio, and more. Packages for macOS/Homebrew and Linux that can run locally or deploy to a k8s namespace in seconds."
readmeQualityOk: true
url: "https://github.com/JonLatane/rellm"
homepage: "https://rellm.org/"
language: "Elm"
languages: ["Elm", "Rust"]
languagePcts: [53, 23]
stars: 65
forks: 5
openIssues: 4
closedIssues: 19
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-06-20T20:30:23Z"
lastCommitAt: "2026-11-02T11:36:01Z"
lastReleaseAt: "2024-04-05T21:22:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 96
undervaluedScore: 52
maintainers: ["JonLatane", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5a6ab619d64f6eca6b97eddd67685be6754e55444b71e4bfa5a2231c2781092/JonLatane/rellm"
fundingLinks: ["GITHUB:https://github.com/JonLatane", "CUSTOM:https://account.venmo.com/u/Jon-Latane", "CUSTOM:https://paypal.me/JLatane"]
---

# <img src="https://rellm.org/favicon.png" alt="Rellm logo" height="32" align="top"/> Rellm [](https://github.com/jonlatane/rellm/actions/workflows/server_ci_cd.yml) [](https://rellm.org/docs)

Rellm is an open-source, community-scale social network designed to be capable of "[delightfully federating](#delightful-federation)" with other Rellm instances/communities, Mastodon/ActivityPub servers, iCal calendars, RSS feeds, and more, making sharing between local-size instances easy. All web-facing features in Rellm - the Elm app, Tamagui/React app, the Flutter app, and Media endpoints - are written with easy-to-read AGPL code, `localStorage` (or system storage, for native Flutter apps), and neither set nor read cookies at all, ever. Thus, an unmodified Rellm server shouldn't need a cookie notice under the GDPR or CCPA. Moreover, any modified version of Rellm that *does* use cookies would violate the AGPL if the source weren't provided to users.

Meanwhile, in support of media creators/providers who might want to self-host Rellm for themselves or in a consortium (whether in lieu of or in addition to monolithic social media presence like YouTube or Twitch), Rellm's CORS support does…
