---
repo: "KDE/spectacle"
name: "spectacle"
description: "Screenshot capture utility"
readmeQualityOk: true
url: "https://github.com/KDE/spectacle"
homepage: "https://invent.kde.org/plasma/spectacle"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [70, 23]
stars: 412
forks: 57
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 136
recentReleases: 0
createdAt: "2015-09-24T17:05:39Z"
lastCommitAt: "2026-11-16T02:52:31Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 35
maintainers: ["bhush9", "kbroulik", "noahadvs"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ab27dd8fab2554fa3dd1c08cf7261f40de757a3d66ed79c47fe4248627b20ca/KDE/spectacle"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# <img src="https://raw.githubusercontent.com/KDE/spectacle/HEAD/logo.png" width="48"/> Spectacle - The KDE Screenshot Utility

Spectacle is a screenshot taking utility for the KDE desktop. Spectacle
can also be used in non-KDE X11 desktop environments.

## Get help
You can get help in :
* Forum: https://discuss.kde.org/tag/spectacle
* Matrix: https://matrix.to/#/#kde:kde.org
* IRC: irc://irc.libera.chat/kde
## Contributing

Spectacle is developed under the KDE umbrella and uses KDE infrastructure
for development.

Please see the file [`CONTRIBUTING`](https://github.com/KDE/spectacle/blob/HEAD/CONTRIBUTING.md) for details on coding style and how
to contribute patches. Please note that pull requests on GitHub aren't
supported. The recommended way of contributing patches is via KDE's
instance of GitLab at https://invent.kde.org/plasma/spectacle.

When building Spectacle yourself (including when using kde-builder), you may
find that Spectacle is not authorized to take screenshots or recordings with
your system's installed KWin. To work around this, you can either also build
KWin from source, or use the `KWIN_SCREENSHOT_NO_PERMISSION_CHECKS=1`/\
`KWIN_WAYLAND_NO_PERMISSION_CHECKS=1`…
