---
repo: "kenanpelit/margo"
name: "margo"
description: "Practical and Powerful wayland compositor "
readmeQualityOk: true
url: "https://github.com/kenanpelit/margo"
homepage: "https://kenanpelit.github.io/margo/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 17
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-07T11:56:32Z"
lastCommitAt: "2026-11-04T13:04:42Z"
lastReleaseAt: "2026-05-10T20:40:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["kenanpelit"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b465894275cbcf940a1fecbcbc9f7cd587f72d8435e029d4fe7253f07e5e74b/kenanpelit/margo"
---

---

  human amplified by AI — an experiment in whether one person can design,
  implement, and maintain a complete modern desktop stack alone.</em></p>

---

**margo** is a Wayland compositor in the dwl/mango tradition — a Rust + [Smithay] port of [mango] with tags instead of workspaces, a deep tiling layout catalogue, and a complete first-party stack for everyday use: a GTK4 desktop shell (`mshell`) with bar / menus / notifications / OSD / settings UI, a control CLI (`mctl`), a screen locker (`mlock`), a login manager (`mlogind`) with a GTK4 greeter (`mgreet`), monitor profiles (`mlayout`), a screenshot helper (`mscreenshot`), an automatic power-profile manager (`mpower`), an on-screen keyboard (`mkeys`), Mullvad VPN control (`mvpn`), a calendar (`mcal`), a folder-first music player (`mtune`) and a tmux session manager (`mtm`). The whole stack ships from one workspace and one release. The compositor exposes a scriptable Unix control socket (`get` / `watch` / `dispatch`) plus the standard `ext-workspace` + `foreign-toplevel-list` protocols, so third-party bars (sfwbar, ironbar) work too — but you don't need one.

[Smithay]: https://github.com/Smithay/smithay
[mango]:…
