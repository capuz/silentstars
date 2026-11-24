---
repo: "spk121/guile-gi"
name: "guile-gi"
description: "Bindings for GObject Introspection and libgirepository for Guile"
readmeQualityOk: true
url: "https://github.com/spk121/guile-gi"
language: "C"
languages: ["C", "Scheme"]
languagePcts: [61, 35]
topics: ["scheme", "scheme-library", "gobject-introspection", "guile", "gnu"]
stars: 64
forks: 11
openIssues: 4
closedIssues: 87
watchers: 5
contributors: 4
recentReleases: 1
createdAt: "2018-09-05T17:22:10Z"
lastCommitAt: "2026-11-24T14:06:15Z"
lastReleaseAt: "2026-11-21T01:28:22Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 53
maintainers: ["claude", "spk121"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc2d3aafd56a72ce6b79d1b3edb77441801a48fcd61fabbc4f052fd648ad5a5e/spk121/guile-gi"
discussionCount: 3
---

# Guile GI

This is a library for [GNU Guile](https://gnu.org/software/guile) to
create language bindings via [GObject Introspection](https://gi.readthedocs.io).

**⚠️ Important: This is not the canonical Guile binding for GNOME or GTK.
This is a personal project that you probably shouldn't use. The canonical
binding for GNU Guile is [GNU G-Golf](https://www.gnu.org/software/g-golf).
For serious work, use that one, which is actually maintained.**

GNU Guile is an implementation of Scheme, which is a Lisp-like language.
This library allows Guile to use GObject-based libraries -- such as GTK+3,
GLib, and WebKit2 -- by generating a Scheme API from the GObject Introspection
information provided by those libraries.

This is beta code.  It is only partially documented.  The API is
stabilizing, but may still be subject to change.

Guile GI has two primary components.

* The `gi` scheme modules: guile modules that provide functionality to
  dynamically generate Scheme API from GObject typelib files

* `libguile-gi.so` or `libguile-gi.dll`: a compiled module that
  contains glue code to interface with GObject

To create bindings, use the `use-typelibs` syntax found in the `(gi)`
library.
