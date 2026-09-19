---
repo: "teacherguy2020/now-playing"
name: "now-playing"
description: "Dashboard/Tookit for extending moOde, library maintenance and more"
readmeQualityOk: true
url: "https://github.com/teacherguy2020/now-playing"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [54, 42]
topics: ["moode", "mpd-client", "raspberry-pi"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-07T17:12:31Z"
lastCommitAt: "2026-09-19T01:37:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 39
maintainers: ["teacherguy2020"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1152300827/fa0b75a0-1ed2-4508-96e9-49bf87c16cdf"
discussionCount: 2
---

# now-playing

A moOde-focused now-playing API + UI stack with optional Alexa integration.

Turbo charge your moOde experience without altering your moOde installation.

Eight ways to use:

1. Browser toolkit/dashboard
2. Display html page
3. Player screen for moOde box (wth controls)
4. Peppymeter+track info screen for moOde box (with controls)
5. Visualizer screen for moOde box
6. Kiosk (library navigation) for moOde box
7. Mobile app (library and control)
8. Alexa skill

> Recommended topology: run this project on a separate Pi from your moOde host.

Deepwiki analysis: https://deepwiki.com/teacherguy2020/now-playing/

## Quick start

1. Install on API/UI host.
2. Open `config.html` and set core fields (`trackKey`, `mpd.host`, `moode.baseUrl`, SSH settings).
3. Run **Check SSH + Paths**.
4. Open `app.html` (shell) or `index.html` (display view) or `player.html` (player view) `controller.html` (mobile view).

## Switch moOde local display to this system (Player / Peppy / Kiosk)

In moOde, open:

- **Configure -> Peripherals -> Local display -> Web UI target URL**

For moOde r1034 and later, use the portless LAN-proxy URL. Newer moOde
Target URL validation rejects URLs containing…
