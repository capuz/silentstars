---
repo: "erikdubois/nemesis_repo"
name: "nemesis_repo"
description: "Erik Dubois' pre-built Arch Linux package repository"
readmeQualityOk: true
url: "https://github.com/erikdubois/nemesis_repo"
homepage: "https://erikdubois.github.io/nemesis_repo/"
language: "Shell"
languages: ["Shell", "HTML", "CSS"]
languagePcts: [39, 35, 26]
stars: 21
forks: 13
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-04-25T10:03:23Z"
lastCommitAt: "2026-07-18T05:48:25Z"
status: "thriving"
tags: ["solo_builder", "funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 71
maintainers: ["erikdubois"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc54fcc82b851ff67f3a145ee28ae9038556641745cc03b31d3c63a43fead869/erikdubois/nemesis_repo"
fundingLinks: ["GITHUB:https://github.com/erikdubois", "PATREON:https://patreon.com/kiroproject", "KO_FI:https://ko-fi.com/erikdubois", "CUSTOM:https://www.paypal.me/erikdubois"]
---

</p>

# NEMESIS REPOSITORY

A pacman package repository for Kiro and Arch-based systems. It holds the
extra software you install **after** a clean install — the desktop apps,
themes, and tools (Spotify and friends) that aren't part of the base system.

Learn, have fun and enjoy.

> **Note** — this is *not* the install-time repo. The `kiro_repo` is used by the
> Calamares installer while building the system and disappears after reboot.
> The nemesis repo is the one you opt into and keep, to pull in extras whenever
> you like.

## Screenshots

<table>
  <tr>
    <td align="center">
      <sub>ohmychadwm desktop</sub>
    </td>
    <td align="center">
      <sub>XFCE desktop</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <sub>Arch Linux Tweak Tool</sub>
    </td>
    <td align="center">
      <sub>Alacritty tweak tool</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <sub>Betterlockscreen</sub>
    </td>
    <td align="center">
      <sub>Logout screen</sub>
    </td>
  </tr>
</table>

## Add the repository

`nemesis_repo` is PGP-signed by the Kiro key (trusted via `kiro-keyring`) and
inherits your global `SigLevel = Required`. The easiest way to add it is…
