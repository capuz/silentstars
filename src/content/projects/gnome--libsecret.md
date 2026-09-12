---
repo: "GNOME/libsecret"
name: "libsecret"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/libsecret"
readmeQualityOk: true
url: "https://github.com/GNOME/libsecret"
homepage: "https://gitlab.gnome.org/GNOME/libsecret"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 70
forks: 26
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 141
recentReleases: 0
createdAt: "2012-06-02T16:01:12Z"
lastCommitAt: "2026-09-12T07:53:03Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 68
undervaluedScore: 46
maintainers: ["mcrha", "nielsdg", "ueno"]
openGraphImageUrl: "https://opengraph.githubassets.com/ceddef2a48d63d80681f0250a59d6372923fce02f4cea4d671bda85c5660a82b/GNOME/libsecret"
---

libsecret
=========

A [GObject]-based library for storing and receiving secrets. libsecret provides
a convenient wrapper around two different mechanisms: If available, secrets are
stored in the freedesktop [secret service]. Otherwise, secrets are stored in a
file that is encrypted using a master secret that was provided by the [secret
portal].

Documentation
--------

You can find the nightly documentation at https://gnome.pages.gitlab.gnome.org/libsecret/.

Building
--------

To build, test and install libsecret, you can use the following commands:

```
$ meson setup _build
$ meson compile -C _build
$ meson test -C _build
$ meson install -C _build
```

Contributing
-------------

You can browse the code, issues and more at libsecret's [GitLab repository].

If you find a bug in libsecret, please file an issue on the [issue tracker].
Please try to add reproducible steps and the relevant version of libsecret.

If you want to contribute functionality or bug fixes, please open a Merge
Request (MR). For more info on how to do this, see GitLab's [help pages on
MR's].

If libsecret is not translated in your language or you believe that the
current translation has errors, you can join…
