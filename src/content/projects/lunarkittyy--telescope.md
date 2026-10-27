---
repo: "LunarKittyy/Telescope"
name: "Telescope"
description: "Use your phone's camera as a webcam on Linux or Windows, telephoto and wide lenses included"
readmeQualityOk: true
url: "https://github.com/LunarKittyy/Telescope"
homepage: "https://telescope.webcam/"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["android", "droidcam-alternative", "linux", "obs", "phone-camera", "v4l2loopback", "virtual-webcam", "webcam", "windows"]
stars: 33
forks: 2
openIssues: 0
closedIssues: 19
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-06-09T22:00:56Z"
lastCommitAt: "2026-10-27T12:39:50Z"
lastReleaseAt: "2026-10-04T15:25:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["LunarKittyy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1264431181/e40dbab7-de98-4200-8dd4-9c7d212a57e7"
fundingLinks: ["KO_FI:https://ko-fi.com/lunarkittyy"]
discussionCount: 5
---

## Up and running in about two minutes

1. **Get the desktop app.** On Windows run `TelescopeSetup.exe` (it installs only for your user and needs no admin). On Linux extract the tarball and run `./start.sh`.
2. **Follow the checklist it opens with.** It sets up the virtual camera, puts the phone app on your phone with a QR code and pairs the two.
3. **Pick the camera in your app.** It's called **Telescope** on Windows and **Phone Camera** on Linux, in Discord, Zoom, OBS or anything else that takes a webcam.

- **Python 3.12 or newer**
- **`v4l2loopback`** from your distro, for the virtual camera (`sudo apt install v4l2loopback-dkms` on Debian and Ubuntu, `sudo dnf install v4l2loopback` on Fedora with [RPM Fusion](https://rpmfusion.org/))
- **`adb`** only if you want USB. Wi-Fi works without it

[Manual setup](https://github.com/LunarKittyy/Telescope/blob/HEAD/docs/setup.md#linux) has the rest, including Ubuntu 22.04's older Python.

No Android phone? [Browser camera](https://github.com/LunarKittyy/Telescope/blob/HEAD/docs/features.md#browser-camera) streams from an iPhone, a tablet or an old laptop straight from its browser with nothing to install.

## More than a webcam

Plug the…
