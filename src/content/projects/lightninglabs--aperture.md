---
repo: "lightninglabs/aperture"
name: "aperture"
description: "⚡️L402 (Lightning HTTP 402) Reverse Proxy ⚡️"
readmeQualityOk: true
url: "https://github.com/lightninglabs/aperture"
homepage: "http://l402.tech/"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["lightning-network", "bitcoin", "http402", "reverse-proxy", "api-gateway", "macaroons"]
stars: 272
forks: 84
openIssues: 35
closedIssues: 18
watchers: 13
contributors: 34
recentReleases: 0
createdAt: "2019-01-30T22:56:13Z"
lastCommitAt: "2026-11-05T00:21:29Z"
lastReleaseAt: "2026-03-25T20:08:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 81
undervaluedScore: 38
maintainers: ["Roasbeef", "starius", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/899430e56f58430e9f4cf73392b791c2e87bb4ae0b7f08b5243e0e568a4b7a30/lightninglabs/aperture"
discussionCount: 6
---

# L402 (Lightning HTTP 402) API Key proxy

Aperture is your portal to the Lightning-Native Web. Aperture is used in
production today by [Lightning Loop](https://lightning.engineering/loop), a
non-custodial on/off ramp for the Lightning Network.

Aperture is a HTTP 402 reverse proxy that supports proxying requests for gRPC
(HTTP/2) and REST (HTTP/1 and HTTP/2) backends using the [L402 Protocol
Standard][l402]. L402 is short for: the Lightning HTTP 402
protocol.  L402 combines HTTP 402, macaroons, and the Lightning Network to
create a new standard for authentication and paid services on the web.

L402 is a new standard protocol for authentication and paid APIs developed by
Lightning Labs. L402 API keys can serve both as authentication, as well as a
payment mechanism (one can view it as a ticket) for paid APIs. In order to
obtain a token, we require the user to pay us over Lightning in order to obtain
a preimage, which itself is a cryptographic component of the final L402 token

The implementation of the authentication token is chosen to be macaroons, as
they allow us to package attributes and capabilities along with the token. This
system allows one to automate pricing on the fly…
