---
repo: "KDE/plasma-welcome"
name: "plasma-welcome"
description: "A friendly onboarding wizard for Plasma"
url: "https://github.com/KDE/plasma-welcome"
homepage: "https://invent.kde.org/plasma/plasma-welcome"
language: "QML"
languages: ["QML"]
languagePcts: [76]
stars: 9
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 36
recentReleases: 0
createdAt: "2022-09-19T14:11:34Z"
lastCommitAt: "2026-06-28T02:00:35Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 79
undervaluedScore: 78
maintainers: ["bhush9", "olib14", "nmariusp"]
openGraphImageUrl: "https://opengraph.githubassets.com/f61179e0666e1018762f13463521381a38ba6b7996416e469be845021c25bdad/KDE/plasma-welcome"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Plasma Welcome App
Friendly onboarding wizard for Plasma

Welcome Center is the perfect introduction to KDE Plasma! It can help you learn how to connect to the internet, install apps, customize the system, and more!

There are four mutually exclusive usage modes:
- Run the app normally and it will show a welcome/onboarding wizard.
- Run the app with the `--pages` argument to show specific pages (e.g. `KDEConnect,Vaults.qml,01-NateOS`)
- Run the app with the `--post-update` argument to show a post-update message.
- Run the app with the `--live-environment` argument to show a reduced wizard with the live installer page and no settings pages.

## Screenshots
| Welcome to KDE Plasma! | Managing Software | Getting Involved |
| ---                    | ---               | ---              |
|  |  |  |

# For live distributions
When Welcome Center is ran in a live environment, it can show a reduced wizard with a page welcoming the user to the disibution and without any settings pages.

To ensure that Welcome Center's launcher recognizes the live environment, you will need to create/change the config in your live user's `~/.config/plasma-welcomerc`:

```conf
[General]…
