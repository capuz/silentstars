---
repo: "renaudallard/assettocorsa_competizione_server"
name: "assettocorsa_competizione_server"
description: "Assetto Corsa Competizione server"
url: "https://github.com/renaudallard/assettocorsa_competizione_server"
language: "C"
languages: ["C", "Shell"]
languagePcts: [69, 21]
topics: ["acc", "assetto-corsa-competizione", "bsd", "c99", "clean-room", "dedicated-server", "freebsd", "game-server", "gt3", "linux"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-08T12:58:02Z"
lastCommitAt: "2026-06-23T00:26:01Z"
lastReleaseAt: "2026-04-13T08:57:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 59
maintainers: ["renaudallard"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f562c85cd7d6b1af9b9824e455ea377e2e4bffd1b31fef4733e05730d605222/renaudallard/assettocorsa_competizione_server"
discussionCount: 0
---

</p>

  </a>
  </a>
  </a>
  </a>
</p>

<h1 align="center">accd</h1>
  <b>ACC dedicated server, clean-room reimplementation</b><br/>
  An unmodified Assetto Corsa Competizione client connects and races,<br/>
  on Linux, OpenBSD, or FreeBSD — no Wine, no Kunos binaries.<br/>
  <br/>
  Plus a built-in <b>live telemetry feed</b> over the same TCP port:
  21 kunos-format stdout banners for log scrapers (accweb, custom
  tail scripts) and a protobuf side-channel
  (<code>ServerMonitor v1</code>) for dashboards, with a
  zero-dependency Python CLI client included.
</p>

---

## Contents

- [What works](#what-works)
- [Known limitations](#known-limitations)
- [Building](#building)
- [Running](#running)
  - [Configuration files](#configuration-files)
  - [Starting the server](#starting-the-server)
  - [Firewall / ports](#firewall--ports)
  - [Connecting from the ACC client](#connecting-from-the-acc-client)
  - [Admin console](#admin-console)
  - [Reading live state with smpr-inspect](#reading-live-state-with-smpr-inspect)
  - [Background service](#background-service)
  - [Quick smoke test](#quick-smoke-test)
- [Scope & legal posture](#scope--legal-posture)
- [Repository…
