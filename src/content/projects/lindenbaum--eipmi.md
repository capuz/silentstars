---
repo: "lindenbaum/eipmi"
name: "eipmi"
description: "A native Erlang IPMI library."
readmeQualityOk: true
url: "https://github.com/lindenbaum/eipmi"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [100]
stars: 29
forks: 8
openIssues: 0
closedIssues: 6
watchers: 11
contributors: 6
recentReleases: 0
createdAt: "2012-10-24T13:50:07Z"
lastCommitAt: "2026-11-16T11:51:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 38
maintainers: ["IslandUsurper", "schlagert"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ff839e523855a38fa204d0f830d20f8ea9395fc1ae768dd725747e631bf1d7c/lindenbaum/eipmi"
---

EIPMI
=====

EIPMI is a native Erlang/OTP application for RMCP/IPMI. It implements the
remote console part of the IPMI LAN interface, as specified
[here](http://www.intel.com/design/servers/ipmi/spec.htm). To provide a low
threshold for learning and using EIPMI it is designed close to the well known
`inet` API (think of `gen_udp`). It supports IPMI v1.5 as well as v2.0 (RMCP+).

Contributing
------------

If you whish to contribute fixes or enhancements, use `rebar3 fmt -w` to format
your code before committing. Also, you should always write proper `edoc` module
documentation. When writing documentation, please try to keep the tone simple
and on a higher abstraction level, so that users may understand the concepts
without having to know too much of the standard.

The modules `eipmi_request` and `eipmi_response` are a starting point for
developers that want add support for not yet implemented request/response pairs.
To add support for a new request the encoding of the corresponding IPMI data
part needs to be added to the `eipmi_request` module. To add support for a new
response the decoding of the corresponding IPMI data part needs to be added to
the `eipmi_response` module. As…
