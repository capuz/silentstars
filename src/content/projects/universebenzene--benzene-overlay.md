---
repo: "Universebenzene/benzene-overlay"
name: "benzene-overlay"
description: "Universebenzene's personal Gentoo overlay"
readmeQualityOk: true
url: "https://github.com/Universebenzene/benzene-overlay"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
stars: 27
forks: 6
openIssues: 19
closedIssues: 779
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-12-28T06:28:33Z"
lastCommitAt: "2026-10-29T02:15:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 62
maintainers: ["Universebenzene"]
openGraphImageUrl: "https://opengraph.githubassets.com/e13a19dc746932515a67d5afed0017a2ae0a97a2e5bbbdd979b439b8f7e92e9e/Universebenzene/benzene-overlay"
---

# benzene-overlay
Universebenzene's personal Gentoo overlay.

Including some old software that no longer supported by official portage.

Alternative building of astropy related packages (more improvement for the doc building and testing, though some of them only work when the `network-sandbox` FEATURE is disabled. See the USE descriptions for details. [(more information)](https://github.com/Universebenzene/benzene-overlay/tree/master/dev-python#information-for-astropy-related-packages))

Related overlay: [benzene-testlay](https://github.com/Universebenzene/benzene-testlay), with some packages testing. You can add it for interest.

This overlay is available on [Gentoo repositories](https://overlays.gentoo.org). You can add it simply through several tools (e.g.: `layman -a benzene-overlay` or `eselect repository enable benzene-overlay`).

It's recommended to mask the whole overlay and then unmask just the packages you need, in order not to get mixed up with other overlays with same packages. (e.g. for using wps-office: `echo "*/*::benzene-overlay" > /etc/portage/package.mask/benzene-overlay; echo "app-office/wps-office::benzene-overlay" >>…
