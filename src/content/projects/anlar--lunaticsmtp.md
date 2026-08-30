---
repo: "anlar/lunaticsmtp"
name: "lunaticsmtp"
description: "Dummy SMTP server with JavaFX UI for testing email sending applications"
readmeQualityOk: true
url: "https://github.com/anlar/lunaticsmtp"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["javafx", "java", "smtp", "developer-tools", "email"]
stars: 58
forks: 3
openIssues: 0
closedIssues: 19
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2016-02-23T13:37:51Z"
lastCommitAt: "2026-08-30T09:24:49Z"
lastReleaseAt: "2026-08-29T18:44:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 43
maintainers: ["dependabot[bot]", "anlar"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5fc36716446b7d2e6190ec7887a29b2308017998b3f44e1bc4ebc630f1dcd69/anlar/lunaticsmtp"
discussionCount: 0
---

# LunaticSMTP

Dummy SMTP server with JavaFX gui for testing email sending applications.

## Requirements

You need Java 17+ and JavaFX module to build and run this application.

## Installation

### Ubuntu (18.04+) and Debian (10+)

Download deb package from [latest release page](https://github.com/anlar/lunaticsmtp/releases/latest) and install it:

    # apt install ./lunaticsmtp_X.Y.Z-1_all.deb

## Usage

    Usage: lunaticsmtp [options]
      Options:
        -c, --cleanup      Remove saved on disk emails after shutdown (default:
                           false)
        -d, --directory    Directory to save incoming messages (default: incoming)
        -h, --help         Show short summary of options
        -j, --jump-to-last Automatically select last received email in GUI
                           (default: false)
        -n, --no-gui       Starts application without GUI (should be used with -s
                           argument) (default: false)
        -p, --port         Specify port for SMTP server (default: 2525)
        -s, --start        Starts SMTP server at application launch (default:
                           false)
        -t, --tray-mode    Set tray mode…
