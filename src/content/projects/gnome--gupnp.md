---
repo: "GNOME/gupnp"
name: "gupnp"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/gupnp"
url: "https://github.com/GNOME/gupnp"
homepage: "https://gitlab.gnome.org/GNOME/gupnp"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 26
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 51
recentReleases: 0
createdAt: "2012-06-08T14:42:18Z"
lastCommitAt: "2026-06-26T21:29:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 71
undervaluedScore: 41
maintainers: ["phako", "valeria1995"]
openGraphImageUrl: "https://opengraph.githubassets.com/b679aacc3015523f3c63747da6fabce1471c6e79e67ff79af946fe5748c9998f/GNOME/gupnp"
---

# GUPnP

GUPnP is an object-oriented open source framework for creating UPnP devices and
control points, written in C using GObject and libsoup. The GUPnP API is
intended to be easy to use, efficient and flexible.

The GUPnP framework consists of the following two libraries:

  * GSSDP implements resource discovery and announcement over SSDP.

  * GUPnP implements the UPnP specification: resource announcement and
    discovery, description, control, event notification, and presentation
    (GUPnP includes basic web server functionality through libsoup). GUPnP does
    not include helpers for construction or control of specific standardized
    resources (e.g. MediaServer); this is left for higher level libraries
    utilizing the GUPnP framework.

The GUPnP framework was born out of frustration with libupnp and its mess of
threads. GUPnP is entirely single-threaded (though asynchronous), integrates
with the GLib main loop, and provides the same set of features as libupnp while
hiding most of the UPnP internals through an elegant object-oriented design.

GUPnP is free software released under the GNU LGPL version 2.1 or later.

## Building

GUPnP uses the meson build system. To…
