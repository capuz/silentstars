---
repo: "CE-Repo/script.tinyppi"
name: "script.tinyppi"
description: "A CoreELEC addon that displays detailed playback information in a custom overlay window during video playback."
readmeQualityOk: true
url: "https://github.com/CE-Repo/script.tinyppi"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 5
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-05-14T22:12:29Z"
lastCommitAt: "2026-07-09T20:44:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 58
maintainers: ["CE-Repo"]
openGraphImageUrl: "https://opengraph.githubassets.com/43388e44df857e11099d5187dc3f86ada464e53d75c80c72d815638749e764d3/CE-Repo/script.tinyppi"
---

# script.tinyppi

A CoreELEC addon that displays detailed playback information in a custom overlay window during video playback. It provides real-time data on video, audio, HDR, system resources, and more — with special support for **Amlogic** hardware (e.g. CoreELEC devices).

---

## Screenshot
</p>

---

## Installation

### Via Repository

1. Open **Settings → File Manager → Add Source**.
2. Enter the repository URL and confirm:
   ```
   https://ce-repo.github.io/repository.jamal2362/
   ```
3. Go to **Add-ons → Install from ZIP file** and select the source you just added.
4. Install the repository ZIP file.
5. Go to **Install from repository**, open the repository, select **TinyPPI** and install.

---

## Usage

### Assign a remote shortcut — Easy way (Keymap Editor)

1. Install the **Keymap Editor** addon.
2. Open it and select **Edit → Global → Add-ons**.
3. Select **Launch TinyPPI**.
4. Press the key or button you want to assign, then confirm.
5. Go back and select **Save**.

Pressing the assigned key/button will now launch or close TinyPPI in the Video OSD.

### Assign a remote shortcut — Manual (`gen.xml`)

Place the following in `Userdata/keymaps/gen.xml`, replacing…
