---
repo: "eait-itig/rdpproxy"
name: "rdpproxy"
description: "remote desktop login proxy and load-balancer"
url: "https://github.com/eait-itig/rdpproxy"
homepage: "https://student.eait.uq.edu.au/infrastructure/remote-access/rdp.html"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [99]
stars: 37
forks: 7
openIssues: 3
closedIssues: 1
watchers: 11
contributors: 5
recentReleases: 0
createdAt: "2015-06-02T06:24:33Z"
lastCommitAt: "2026-07-03T12:38:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 57
undervaluedScore: 30
maintainers: ["arekinath"]
openGraphImageUrl: "https://opengraph.githubassets.com/46e227a57571b67c90768c5aa5f984ad9a4f75bc648fbac21948ff13cfdfaf88/eait-itig/rdpproxy"
---

A login proxy and load-balancer for Microsoft Remote Desktop (RDP), as used for
`rdp.labs.eait.uq.edu.au`.

## What is it for?

The rdpproxy sits between a large pool of client machines (running, eg, Windows
7 Enterprise) and the Internet. The idea is to make remote desktop on these
client machines available to Internet users securely, without exposing the
machines themselves (so they can remain on private IPs etc).

The RDP proxy accepts connections from external users (and enforces the use of
TLS/SSL on them), then itself draws a login screen. Once the user's credentials
have been validated by the proxy (via KRB5), including the use of Duo 2FA, it
then opens a connection to a chosen back-end server (from the pool) and forwards
all traffic.

If the external user disconnects and re-connects later and their session is
still open on the back-end server, they will always be forwarded back to the
same one. Additionally, the RDP proxy integrates with an agent that can run on
each client machine to keep its records of when sessions begin and end up to
date. It also performs probes on the back-end servers to check which are
available for use.

The rdpproxy can also be set up with…
