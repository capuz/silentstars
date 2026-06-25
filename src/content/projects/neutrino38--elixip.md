---
repo: "neutrino38/elixip"
name: "elixip"
description: "A distributed SIP application server written in Elixir language"
url: "https://github.com/neutrino38/elixip"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2015-12-09T22:58:18Z"
lastCommitAt: "2026-06-25T01:36:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 67
maintainers: ["neutrino38"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7ddcb4c9f69d0d54033f75826070c01c3d8a131c3c3f4227f012120c0df926c/neutrino38/elixip"
---

# Elixip

**Elixip is a personal project to write a multipurpose SIP application layer.**

It provides a [Domain Specific Language](https://elixir.hexdocs.pm/1.20.1/domain-specific-languages.html)
specialized to describe call scenarios. It is vaguely inspired by the K language developed by the N-SOFT
company as part of their Rekoll product. The scenario itself is an .exs file and takes advantage of the
Elixir syntax to provide a finite state machine (FSM) programming model. This is to me the most explicit
way to handle cleanly the asynchronous logic of programmable telecommunication.

The scenario engine itself is a framework similar to ExUnit. It sits on top of a SIP stack fully developed in Elixir.
Such call / telecom scripts are actually Elixir scripts so they can take full advantage of the SIP stack and interact
at dialog / transaction or event message level if needed. Furthermore, external libs and APIs can be easily called and used
within such scenarios as long as they comply with the asynchronous nature of finite state machines.

The framework will also provide a control interface to the
[Medooze media…
