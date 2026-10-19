---
repo: "rhjdjong/SlipLib"
name: "SlipLib"
description: "Python package supporting the SLIP protocol (RFC 1055)"
readmeQualityOk: true
url: "https://github.com/rhjdjong/SlipLib"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 27
forks: 7
openIssues: 3
closedIssues: 31
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2015-03-01T15:52:26Z"
lastCommitAt: "2026-10-19T09:14:08Z"
lastReleaseAt: "2026-10-13T09:22:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 42
maintainers: ["dependabot[bot]", "rhjdjong", "aamir-azeez"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0d3d0b3870f02be0a24b50f3980e6f551c54e3f3525ee518f55c857d0af1063/rhjdjong/SlipLib"
discussionCount: 1
---

# `sliplib` &mdash; A module for the SLIP protocol

The `sliplib` module implements the encoding and decoding
functionality for SLIP packets, as described in
[RFC 1055][rfc1055].
It defines encoding, decoding, and validation functions,
as well as a driver class that can be used to implement
a SLIP protocol stack, and higher-level classes that
apply the SLIP protocol to TCP connections or IO streams.
Read the [documentation](http://sliplib.readthedocs.org/en/main/)
for detailed information.

## Background

The SLIP protocol is described in [RFC 1055][rfc1055] (*A Nonstandard for
Transmission of IP Datagrams over Serial Lines: SLIP*, J. Romkey,
June 1988).  The original purpose of the protocol is
to provide a mechanism to indicate the boundaries of IP packets,
in particular when the IP packets are sent over a connection that
does not provide a framing mechanism, such as serial lines or
dial-up connections.

There is, however, nothing specific to IP in the SLIP protocol.
SLIP offers a generic framing method that can be used for any
type of data that must be transmitted over a (continuous) byte stream.
In fact, the main reason for creating this module
was the need to communicate with…
